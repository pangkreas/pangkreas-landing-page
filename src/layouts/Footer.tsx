import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
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
      </Container>
    </footer>
  );
}
