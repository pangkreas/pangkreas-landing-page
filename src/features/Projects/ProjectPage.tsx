import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import FinalCta from "@/components/common/FinalCta";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";
import { CreationVisual } from "@/components/visual";
import {
  creations,
  creationsPageDescription,
  creationTypeLabels,
  getLocalizedText,
  spaces,
  type SpaceKey,
} from "@/data/content";
export default function ProjectPage() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<"all" | SpaceKey>("all");
  const language = i18n.resolvedLanguage ?? i18n.language;
  const visible =
    filter === "all"
      ? creations
      : creations.filter((x) => x.category === filter);
  return (
    <>
      <Seo
        titleKey="seo.creations.title"
        descriptionKey="seo.creations.description"
        path="/creations"
      />
      <PageIntro
        eyebrow={t("nav.creations")}
        title={t("creations.title")}
        description={getLocalizedText(creationsPageDescription, language)}
      />
      <Container className="py-12 sm:py-16">
        <div
          role="group"
          aria-label={t("creations.filterLabel")}
          className="flex flex-wrap gap-2"
        >
          {["all", ...spaces].map((key) => (
            <button
              type="button"
              aria-pressed={filter === key}
              key={key}
              onClick={() => setFilter(key as "all" | SpaceKey)}
              className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-4 py-2 text-base font-bold hover:border-sky-400 aria-pressed:border-sky-700 aria-pressed:bg-sky-700 aria-pressed:text-white"
            >
              {key === "all" ? t("common.all") : t(`spaces.${key}.name`)}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-100/70"
            >
              <CreationVisual
                category={item.category}
                variant={item.visualVariant}
              />
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold uppercase text-sky-700">
                    {t(`spaces.${item.category}.name`)}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {getLocalizedText(creationTypeLabels[item.type], language)}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-black">
                  {getLocalizedText(item.title, language)}
                </h2>
                <dl className="mt-5 space-y-4 text-base leading-7">
                  <div>
                    <dt className="font-bold">{t("creations.problem")}</dt>
                    <dd className="mt-1 text-slate-600">
                      {getLocalizedText(item.background, language)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold">{t("creations.solution")}</dt>
                    <dd className="mt-1 text-slate-600">
                      {getLocalizedText(item.solution, language)}
                    </dd>
                  </div>
                </dl>
                <ul
                  aria-label={t("creations.technology")}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {item.technologies.map((x) => (
                    <li
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-sm text-slate-700"
                      key={x.en}
                    >
                      {getLocalizedText(x, language)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <p
            role="status"
            className="mt-10 rounded-2xl bg-slate-50 p-8 text-center"
          >
            {t("creations.empty")}
          </p>
        )}
      </Container>
      <FinalCta />
    </>
  );
}
