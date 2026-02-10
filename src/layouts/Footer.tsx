import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xl font-bold text-slate-900">Pangkreas</span>
          <p className="max-w-xs text-sm text-slate-500">
            Turning digital ideas into usable products.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link to="/" className="hover:text-slate-600">Home</Link>
          <Link to="/contact" className="hover:text-slate-600">Contact</Link>
        </div>

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Pangkreas
        </div>
      </div>
    </footer>
  );
}
