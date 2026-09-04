import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "@/components/common/Seo";
export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="flex min-h-[65vh] items-center justify-center p-6 text-center">
      <Seo
        titleKey="notFound.title"
        descriptionKey="notFound.description"
        path="/404"
      />
      <div>
        <p className="text-7xl font-black text-sky-200">404</p>
        <h1 className="mt-3 text-3xl font-black">{t("notFound.title")}</h1>
        <p className="mt-3 text-slate-600">{t("notFound.description")}</p>
        <Link
          to="/"
          className="mt-7 inline-block rounded-xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800"
        >
          {t("notFound.home")}
        </Link>
      </div>
    </section>
  );
}
