import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StructuredData from "@/components/common/StructuredData";
import { useTranslation } from "react-i18next";

export default function MainLayout() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <StructuredData />
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-lg bg-sky-600 px-4 py-2 text-white focus:translate-y-0"
      >
        {t("nav.skip")}
      </a>
      <Header />

      <main id="main-content" className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
