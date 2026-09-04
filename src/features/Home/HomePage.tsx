import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import Seo from "@/components/common/Seo";
import {
  CreationVisual,
  PangkreasCoreVisual,
  SolutionIcon,
} from "@/components/visual";
import { creations, getLocalizedText, spaces } from "@/data/content";
import { track } from "@/services/analytics";
const needs = [
  "business",
  "automation",
  "product",
  "creative",
  "experiment",
  "unsure",
];
export default function HomePage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const choose = (key: string) => {
    track("solution_selected", { category: key });
    navigate(
      key === "unsure" ? "/contact?category=unsure" : `/solutions#${key}`,
    );
  };
  return (
    <>
      <Seo
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        path="/"
      />
      <section className="surface-grid relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-100 py-12 sm:py-16 lg:py-20">
        <Container className="relative grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
          <div className="reveal">
            <p className="mb-4 font-bold uppercase tracking-[.24em] text-sky-700 sm:mb-5">
              Pangkalan Kreasi
            </p>
            <h1 className="max-w-3xl text-[2.65rem] font-black leading-[1.03] tracking-[-.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {t("home.hero.description")}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              {t("home.hero.support")}
            </p>
            <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap sm:mt-8">
              <Link
                onClick={() => track("hero_primary_cta_clicked")}
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-center font-bold text-white shadow-lg shadow-sky-200 hover:-translate-y-0.5 hover:bg-sky-800"
              >
                {t("home.hero.primary")}
              </Link>
              <Link
                onClick={() => track("hero_secondary_cta_clicked")}
                to="/solutions"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-bold text-slate-800 hover:border-sky-400"
              >
                {t("home.hero.secondary")}
              </Link>
            </div>
          </div>
          <PangkreasCoreVisual className="mx-auto h-[260px] w-full max-w-[520px] sm:h-[360px] lg:h-[500px]" />
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="text-3xl font-black md:text-4xl">
            {t("home.needs.title")}
          </h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {needs.map((key, i) => (
              <button
                type="button"
                onClick={() => choose(key)}
                key={key}
                className="group flex min-h-32 items-end justify-between rounded-2xl border border-slate-200 p-5 text-left hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl sm:p-6"
              >
                <span className="max-w-xs text-lg font-bold">
                  {t(`home.needs.${key}`)}
                </span>
                <span aria-hidden="true" className="text-sky-700">
                  0{i + 1} ↗
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-slate-950 py-14 text-white sm:py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-400">
            {t("nav.solutions")}
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {t("home.spaces.title")}
          </h2>
          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-5">
            {spaces.map((key, index) => (
              <Link
                to={`/solutions#${key}`}
                key={key}
                className="group flex min-h-52 flex-col rounded-2xl border border-white/10 bg-slate-900 p-6 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-800 focus-visible:border-sky-400"
              >
                <div className="flex items-center justify-between text-sky-400">
                  <SolutionIcon space={key} className="h-9 w-9" />
                  <span className="text-sm">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  {t(`spaces.${key}.name`)}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-300">
                  {t(`spaces.${key}.description`)}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 text-sky-400 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-700">
                {t("nav.creations")}
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                {t("home.creations.title")}
              </h2>
            </div>
            <Link to="/creations" className="font-bold text-sky-700">
              {t("common.viewAll")} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {creations.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <CreationVisual
                  category={item.category}
                  variant={item.visualVariant}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase text-sky-700">
                    {t(`spaces.${item.category}.name`)}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {getLocalizedText(item.title, language)}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {getLocalizedText(item.solution, language)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sky-50 py-14 sm:py-20">
        <Container>
          <h2 className="text-3xl font-black">{t("home.process.title")}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n} className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-sm font-black text-sky-700">0{n}</span>
                <p className="mt-4 font-bold">{t(`home.process.step${n}`)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">{t("home.why.title")}</h2>
            <ul className="mt-8 space-y-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="flex gap-3 text-base leading-7">
                  <span className="text-sky-700">✓</span>
                  {t(`home.why.item${n}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-400">
              {t("nav.about")}
            </p>
            <h2 className="mt-4 text-3xl font-black">Pangkalan Kreasi</h2>
            <p className="mt-5 leading-7 text-slate-300">{t("home.about")}</p>
            <Link
              to="/about"
              className="mt-7 inline-block font-bold text-sky-400"
            >
              {t("common.learnMore")} →
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-sky-500 py-16 text-slate-950">
        <Container className="text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            {t("home.final.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl">
            {t("home.final.description")}
          </p>
          <Link
            to="/contact?category=unsure"
            className="mt-8 inline-block rounded-xl bg-slate-950 px-7 py-3 font-bold text-white focus-visible:outline-slate-950"
          >
            {t("home.final.cta")}
          </Link>
        </Container>
      </section>
    </>
  );
}
