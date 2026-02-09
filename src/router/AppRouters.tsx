import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "@/pages/NotFoundPage";

import { HomePage } from "@/features/Home";
import { ContactPage } from "@/features/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* 404 route (tanpa layout) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
