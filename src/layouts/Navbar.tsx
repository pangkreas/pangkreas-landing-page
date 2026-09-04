import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { track } from "@/services/analytics";
const links = ["solutions", "creations", "process", "about"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  const change = (lang: "id" | "en") => {
    void i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    track("language_changed", { locale: lang });
  };
  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen(!open)}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 p-2 md:hidden"
      >
        <span className="sr-only">{t("nav.menu")}</span>
        <span aria-hidden="true" className="text-xl">
          {open ? "×" : "☰"}
        </span>
      </button>
      <nav
        id="main-menu"
        aria-label={t("nav.mainLabel")}
        className={`${open ? "flex" : "hidden"} fixed inset-x-0 top-16 max-h-[calc(100dvh-4rem)] flex-col gap-2 overflow-y-auto border-b bg-white p-5 shadow-xl md:static md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        {links.map((key) => (
          <NavLink
            ref={key === "solutions" ? firstLinkRef : undefined}
            onClick={() => setOpen(false)}
            key={key}
            to={`/${key}`}
            className={({ isActive }) =>
              `flex min-h-11 items-center rounded-lg px-3 py-2 text-base font-semibold md:text-sm ${isActive ? "bg-sky-50 text-sky-700 md:bg-transparent md:text-sky-600" : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"}`
            }
          >
            {t(`nav.${key}`)}
          </NavLink>
        ))}
        <div className="mt-2 flex min-h-11 items-center gap-2 border-t border-slate-100 pt-3 text-sm md:mt-0 md:border-0 md:pt-0">
          <button
            type="button"
            onClick={() => change("id")}
            aria-pressed={i18n.language.startsWith("id")}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg px-2 py-1 aria-pressed:bg-sky-100 aria-pressed:text-sky-700"
          >
            ID
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            onClick={() => change("en")}
            aria-pressed={i18n.language.startsWith("en")}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg px-2 py-1 aria-pressed:bg-sky-100 aria-pressed:text-sky-700"
          >
            EN
          </button>
        </div>
        <NavLink
          onClick={() => setOpen(false)}
          to="/contact"
          className="mt-2 flex min-h-11 items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-center text-base font-bold text-white hover:bg-sky-600 md:mt-0 md:text-sm"
        >
          {t("nav.contact")}
        </NavLink>
      </nav>
    </>
  );
}
