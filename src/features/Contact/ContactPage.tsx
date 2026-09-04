import { useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import Container from "@/components/layout/Container";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";
import {
  getContactConfig,
  submitInquiry,
  type ContactConfig,
} from "@/services/contact";
import { track } from "@/services/analytics";
import {
  CONTACT_CATEGORIES,
  parseContactCategory,
  validateContact,
  type ContactCategory,
  type ContactErrors,
  type ContactPayload,
} from "@/schemas/contact";
type State = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const requestedCategory = params.get("category");
  const [categorySelection, setCategorySelection] = useState(() => ({
    query: requestedCategory,
    value: parseContactCategory(requestedCategory),
  }));
  const category =
    categorySelection.query === requestedCategory
      ? categorySelection.value
      : parseContactCategory(requestedCategory);
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const started = useRef(false);
  const submitting = useRef(false);
  const contact = getContactConfig();
  const formAvailable = Boolean(contact.apiUrl);
  const hasContactChannel = Boolean(contact.email || contact.whatsappUrl);

  const onFocus = () => {
    if (!started.current) {
      started.current = true;
      track("contact_form_started");
    }
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formAvailable || submitting.current) return;

    const form = new FormData(e.currentTarget);
    const raw = Object.fromEntries(form.entries()) as Record<string, string>;
    const values = {
      ...raw,
      privacyAccepted: form.get("privacyAccepted") === "on",
    };
    const next = validateContact(values);
    setErrors(next);
    if (Object.keys(next).length) return;
    const payload: ContactPayload = {
      name: raw.name.trim(),
      organization: raw.organization?.trim() || null,
      email: raw.email.trim(),
      whatsapp: raw.whatsapp?.trim() || null,
      category: parseContactCategory(raw.category),
      message: raw.message.trim(),
      targetTimeline: raw.targetTimeline?.trim() || null,
      locale: i18n.language.startsWith("en") ? "en" : "id",
      privacyAccepted: true,
      source: "website-contact",
    };

    submitting.current = true;
    setState("loading");
    try {
      await submitInquiry(payload);
      setState("success");
      track("contact_form_submitted");
    } catch {
      setState("error");
      track("contact_form_failed");
    } finally {
      submitting.current = false;
    }
  };

  const error = (key: keyof ContactErrors) => (
    <>
      {errors[key] && (
        <p id={`${key}-error`} className="mt-1 text-sm text-red-700">
          {t(`contact.validation.${errors[key]}`)}
        </p>
      )}
    </>
  );
  return (
    <>
      <Seo
        titleKey="seo.contact.title"
        descriptionKey="seo.contact.description"
        path="/contact"
      />
      <PageIntro
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.description")}
      />
      <Container className="py-16">
        {formAvailable ? (
          <div
            className={`mx-auto grid gap-10 ${
              hasContactChannel
                ? "max-w-5xl lg:grid-cols-[.7fr_1.3fr]"
                : "max-w-3xl"
            }`}
          >
            {hasContactChannel && (
              <aside>
                {contact.email && (
                  <>
                    <h2 className="text-2xl font-black">
                      {t("contact.alternativeTitle")}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {t("contact.alternative")}
                    </p>
                  </>
                )}
                <ContactChannels contact={contact} />
              </aside>
            )}
            <ContactForm
              category={category}
              errors={errors}
              onCategoryChange={(value) =>
                setCategorySelection({ query: requestedCategory, value })
              }
              onFocus={onFocus}
              onSubmit={submit}
              renderError={error}
              state={state}
            />
          </div>
        ) : (
          <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-100 md:p-9">
            <p className="text-lg leading-relaxed text-slate-700">
              {t("contact.formUnavailable")}
            </p>
            {hasContactChannel ? (
              <ContactChannels contact={contact} />
            ) : (
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {t("contact.noChannels")}
              </p>
            )}
          </section>
        )}
      </Container>
    </>
  );
}

function ContactChannels({ contact }: { contact: ContactConfig }) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 flex flex-col gap-3">
      {contact.email && (
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-11 flex-col justify-center rounded-xl border border-sky-200 bg-white px-4 py-3 font-bold text-sky-700 transition-colors hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          <span>{t("contact.emailCta")}</span>
          <span className="break-all text-sm font-medium text-slate-600">
            {contact.email}
          </span>
        </a>
      )}
      {contact.whatsappUrl && (
        <a
          href={contact.whatsappUrl}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          {t("contact.whatsappCta")}
        </a>
      )}
    </div>
  );
}

function ContactForm({
  category,
  errors,
  onCategoryChange,
  onFocus,
  onSubmit,
  renderError,
  state,
}: {
  category: ContactCategory;
  errors: ContactErrors;
  onCategoryChange: (category: ContactCategory) => void;
  onFocus: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  renderError: (key: keyof ContactErrors) => React.ReactNode;
  state: State;
}) {
  const { t } = useTranslation();

  return (
    <form
      onFocus={onFocus}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-slate-200 p-6 shadow-xl shadow-slate-100 md:p-9"
    >
      {state === "success" ? (
        <div role="status" className="py-12 text-center">
          <h2 className="text-2xl font-black">{t("contact.success")}</h2>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              name="name"
              label={t("contact.fields.name")}
              autoComplete="name"
              required
              error={errors.name}
            >
              {renderError("name")}
            </Field>
            <Field
              name="organization"
              label={t("contact.fields.organization")}
              autoComplete="organization"
            />
            <Field
              name="email"
              type="email"
              label={t("contact.fields.email")}
              autoComplete="email"
              required
              error={errors.email}
            >
              {renderError("email")}
            </Field>
            <Field
              name="whatsapp"
              type="tel"
              label={t("contact.fields.whatsapp")}
              autoComplete="tel"
            />
          </div>
          <label className="block font-semibold" htmlFor="category">
            {t("contact.fields.category")} *
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) =>
              onCategoryChange(parseContactCategory(event.target.value))
            }
            aria-invalid={!!errors.category}
            aria-describedby={errors.category ? "category-error" : undefined}
            className="mt-1 min-h-11 w-full rounded-xl border border-slate-300 bg-white p-3 text-base"
          >
            {CONTACT_CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option === "unsure"
                  ? t("contact.unsure")
                  : t(`spaces.${option}.name`)}
              </option>
            ))}
          </select>
          {renderError("category")}
          <label className="block font-semibold" htmlFor="message">
            {t("contact.fields.message")} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-1 w-full rounded-xl border border-slate-300 p-3 text-base"
          />
          {renderError("message")}
          <Field name="targetTimeline" label={t("contact.fields.timeline")} />
          <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed">
            <input
              type="checkbox"
              name="privacyAccepted"
              aria-invalid={!!errors.privacyAccepted}
              aria-describedby={
                errors.privacyAccepted ? "privacyAccepted-error" : undefined
              }
              className="mt-1 h-5 w-5 shrink-0"
            />
            <span>
              <Trans
                i18nKey="contact.fields.privacy"
                components={{
                  privacyLink: (
                    <Link
                      to="/privacy"
                      className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
                    />
                  ),
                }}
              />
            </span>
          </label>
          {renderError("privacyAccepted")}
          <div aria-live="polite">
            {state === "error" && (
              <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                {t("contact.error")}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="min-h-11 w-full rounded-xl bg-sky-500 px-6 py-3 font-bold text-white disabled:cursor-wait disabled:opacity-60"
          >
            {state === "loading" ? t("contact.sending") : t("contact.submit")}
          </button>
        </>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required = false,
  error,
  children,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-semibold" htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1 min-h-11 w-full rounded-xl border border-slate-300 p-3 text-base"
      />
      {children}
    </div>
  );
}
