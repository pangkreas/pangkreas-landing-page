import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";

const sections = [
  "collected",
  "purpose",
  "processing",
  "retention",
  "protection",
  "thirdParty",
  "rights",
  "contact",
];

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        titleKey="seo.privacy.title"
        descriptionKey="seo.privacy.description"
        path="/privacy"
      />
      <PageIntro
        eyebrow={t("privacy.eyebrow")}
        title={t("privacy.title")}
        description={t("privacy.description")}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-9">
          {sections.map((key) => (
            <section key={key} aria-labelledby={`privacy-${key}`}>
              <h2
                id={`privacy-${key}`}
                className="text-2xl font-black text-slate-950"
              >
                {t(`privacy.sections.${key}.title`)}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                {t(`privacy.sections.${key}.description`)}
              </p>
            </section>
          ))}
          <p className="rounded-2xl bg-sky-50 p-5 text-sm leading-6 text-slate-600">
            {t("privacy.note")}
          </p>
        </div>
      </Container>
    </>
  );
}
