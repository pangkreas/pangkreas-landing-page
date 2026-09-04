import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { useTranslation } from "react-i18next";
import Home from "@/features/Home/HomePage";

const Solutions = lazy(() => import("@/features/Services/ServicesPage"));
const Creations = lazy(() => import("@/features/Projects/ProjectPage"));
const Process = lazy(() => import("@/features/process/ProcessPage"));
const About = lazy(() => import("@/features/About/AboutPage"));
const Contact = lazy(() => import("@/features/Contact/ContactPage"));
const Privacy = lazy(() => import("@/features/Privacy/PrivacyPage"));
const NotFound = lazy(() => import("@/pages/NotFoundPage"));
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="/services"
              element={<Navigate replace to="/solutions" />}
            />
            <Route
              path="/projects"
              element={<Navigate replace to="/creations" />}
            />
            <Route
              path="/work"
              element={<Navigate replace to="/creations" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function LoadingFallback() {
  const { t } = useTranslation();
  return (
    <p role="status" className="p-8 text-center text-slate-600">
      {t("common.loading")}
    </p>
  );
}
