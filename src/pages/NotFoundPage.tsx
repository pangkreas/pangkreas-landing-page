import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center p-4 text-center">
      <div>
        <h1 className="mb-4 text-6xl font-bold text-gray-200">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-600">
          The route you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-indigo-600 px-6 py-2 text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
