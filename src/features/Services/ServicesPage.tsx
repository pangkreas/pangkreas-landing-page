import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import PageIntro from "@/components/common/PageIntro";
import Seo from "@/components/common/Seo";
import { spaces } from "@/data/content";
import FinalCta from "@/components/common/FinalCta";
import { SolutionVisual } from "@/components/visual/SolutionVisual";
const capabilities = {
  build: [
    "erp",
    "pos",
    "inventory",
    "dashboard",
    "admin",
    "website",
    "custom",
    "api",
  ],
  automate: ["workflow", "ai", "integration", "data", "device", "repetitive"],
  create: ["identity", "media", "content", "experience"],
  explore: ["research", "prototype", "concept", "technology"],
  improve: ["process", "ux", "performance", "existing"],
};
export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        titleKey="seo.solutions.title"
        descriptionKey="seo.solutions.description"
        path="/solutions"
      />
      <PageIntro
        eyebrow={t("nav.solutions")}
        title={t("solutions.title")}
        description={t("solutions.description")}
      />
      <Container className="py-12 sm:py-16">
        <div className="space-y-7 sm:space-y-10">
          {spaces.map((space, i) => (
            <section
              id={space}
              key={space}
              className="group scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-sky-100/70"
            >
              <div
                className={`grid items-stretch lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <span className="text-sm font-black text-sky-500">
                    0{i + 1}
                  </span>
                  <h2 className="mt-3 text-3xl font-black">
                    {t(`spaces.${space}.name`)}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {t(`spaces.${space}.description`)}
                  </p>
                  <Link
                    to={`/contact?category=${space}`}
                    className="mt-7 inline-flex min-h-11 w-fit items-center rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-sky-600"
                  >
                    {t(`solutions.cta.${space}`)}
                  </Link>
                </div>
                <div className="bg-slate-950 p-6 sm:p-8">
                  <SolutionVisual space={space} className="mb-6 h-36 sm:h-44" />
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {capabilities[space].map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-base leading-6 text-slate-200"
                      >
                        {t(`capabilities.${space}.${item}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
      <FinalCta />
    </>
  );
}
