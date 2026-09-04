import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";

export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-sky-400 py-14 sm:py-18 md:py-20">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-white/20"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          {t("finalCta.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-800 sm:text-lg">
          {t("finalCta.description")}
        </p>
        <Link
          to="/contact?category=unsure"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-slate-950"
        >
          {t("finalCta.button")}
        </Link>
      </Container>
    </section>
  );
}
