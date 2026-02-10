import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600">
        <span className="text-xs font-bold text-white">P</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-900">
        Pangkreas
      </span>
    </Link>
  );
}