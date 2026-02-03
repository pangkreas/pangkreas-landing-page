
import React from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children?: React.ReactNode;
}

/**
 * MainLayout Component
 * 
 * Defines the shared structural skeleton of the application.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-40 h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Pangkreas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">What We Do</Link>
          <Link to="/#process" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Process</Link>
          <Link to="/contact" className="text-sm font-semibold text-white px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-sm">Start a Project</Link>
        </nav>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="py-12 px-6 md:px-12 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl text-slate-900">Pangkreas</span>
            <p className="text-sm text-slate-500 max-w-xs">
              Pangkalan Kreasi: Turning digital ideas into usable products with a builder's mindset.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://github.com/pangkreas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-slate-600">Home</Link>
            <Link to="/contact" className="hover:text-slate-600">Contact</Link>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Pangkreas. Jakarta, Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}
