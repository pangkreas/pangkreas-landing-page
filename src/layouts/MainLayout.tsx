import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white/80 px-6 backdrop-blur-md md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600">
            <span className="text-xs font-bold text-white">P</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Pangkreas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/#services"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
          >
            What We Do
          </Link>
          <Link
            to="/#process"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
          >
            Process
          </Link>
          <Link
            to="/contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700"
          >
            Start a Project
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-slate-900">Pangkreas</span>
            <p className="max-w-xs text-sm text-slate-500">
              Pangkalan Kreasi: Turning digital ideas into usable products with a builder's mindset.
            </p>

            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://github.com/pangkreas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition-colors hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-slate-600">
              Home
            </Link>
            <Link to="/contact" className="hover:text-slate-600">
              Contact
            </Link>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Pangkreas. Jakarta, Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}
