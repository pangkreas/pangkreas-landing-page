import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";
export default function ProcessPage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        titleKey="seo.process.title"
        descriptionKey="seo.process.description"
        path="/process"
      />
      <PageIntro
        eyebrow={t("nav.process")}
        title={t("process.title")}
        description={t("process.description")}
      />
      <Container className="py-12 sm:py-16">
        <ol className="mx-auto max-w-3xl space-y-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <li
              key={n}
              className="group grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-0.5 hover:border-sky-300 sm:grid-cols-[64px_1fr] sm:p-6"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 font-black text-sky-700">
                0{n}
              </span>
              <div>
                <h2 className="text-xl font-black">
                  {t(`process.steps.${n}.title`)}
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {t(`process.steps.${n}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-xl bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-600"
          >
            {t("home.final.cta")}
          </Link>
        </div>
      </Container>
    </>
  );
}
