import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <Link
        to="/services"
        className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
      >
        Services
      </Link>

      <Link
        to="/projects"
        className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
      >
        Work
      </Link>

      <Link
        to="/process"
        className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
      >
        Process
      </Link>

      <Link
        to="/contact"
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm"
      >
        Start a Project
      </Link>
    </nav>
  );
}
