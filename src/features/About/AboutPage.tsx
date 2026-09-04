import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";
export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        titleKey="seo.about.title"
        descriptionKey="seo.about.description"
        path="/about"
      />
      <PageIntro
        eyebrow={t("nav.about")}
        title={t("about.title")}
        description={t("about.description")}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-black">{t("about.meaningTitle")}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {t("about.meaning")}
            </p>
            <h2 className="mt-12 text-3xl font-black">
              {t("about.directionTitle")}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {t("about.direction")}
            </p>
          </section>
          <section className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-sky-400/10"
            />
            <h2 className="text-3xl font-black">{t("about.valuesTitle")}</h2>
            <div className="mt-8 space-y-5">
              {[
                "curious",
                "practical",
                "collaborative",
                "adaptive",
                "responsible",
              ].map((key) => (
                <div key={key}>
                  <h3 className="font-bold text-sky-400">
                    {t(`about.values.${key}.name`)}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-slate-300">
                    {t(`about.values.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
