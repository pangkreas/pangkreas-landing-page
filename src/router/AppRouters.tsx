import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "@/pages/NotFoundPage";

import { HomePage } from "@/features/Home";
import { ServicesPage } from "@/features/Services";
import { ProjectPage } from "@/features/Projects";
import { ProcessPage } from "@/features/process";
import { ContactPage } from "@/features/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* 404 route (tanpa layout) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
