
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { ContactPage } from '../../pages/Contact';
import { NotFoundPage } from '../../pages/NotFound';
import { MainLayout } from '../../components/layout/MainLayout';

/**
 * Application Router component.
 * Uses HashRouter for compatibility with static hosting environments.
 */
export function Router() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}
