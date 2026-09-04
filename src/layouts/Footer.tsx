import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-300 sm:py-14">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="text-xl font-black text-white">
            Pangkreas
          </Link>
          <p className="mt-4 max-w-sm text-base leading-7 text-slate-400">
            {t("footer.description")}
          </p>
        </div>
        <nav
          aria-label={t("footer.navLabel")}
          className="grid content-start gap-1 text-base sm:grid-cols-2"
        >
          <Link
            className="flex min-h-11 items-center rounded-lg px-2 hover:bg-white/5 hover:text-white"
            to="/solutions"
          >
            {t("nav.solutions")}
          </Link>
          <Link
            className="flex min-h-11 items-center rounded-lg px-2 hover:bg-white/5 hover:text-white"
            to="/creations"
          >
            {t("nav.creations")}
          </Link>
          <Link
            className="flex min-h-11 items-center rounded-lg px-2 hover:bg-white/5 hover:text-white"
            to="/about"
          >
            {t("nav.about")}
          </Link>
          <Link
            className="flex min-h-11 items-center rounded-lg px-2 hover:bg-white/5 hover:text-white"
            to="/contact"
          >
            {t("nav.contact")}
          </Link>
          <Link
            className="flex min-h-11 items-center rounded-lg px-2 hover:bg-white/5 hover:text-white"
            to="/privacy"
          >
            {t("footer.privacy")}
          </Link>
        </nav>
        <div className="text-base leading-7 text-slate-400 md:text-right">
          <p>{t("footer.tagline")}</p>
          <p className="mt-3 text-sm text-slate-400">
            © {new Date().getFullYear()} Pangkreas · Pangkalan Kreasi
          </p>
        </div>
      </Container>
    </footer>
  );
}
