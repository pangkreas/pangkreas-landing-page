import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink 
        to="/services" 
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `transition-colors ${
            isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
          }`
        }
      >Services</NavLink>
      <NavLink 
        to="/projects" 
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `transition-colors ${
            isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
          }`
        }
      >Work</NavLink>
      <NavLink 
        to="/process" 
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `transition-colors ${
            isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
          }`
        }
      >Process</NavLink>
      <NavLink
        to="/contact"
        onClick={() => setOpen(false)}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
      >
        Start a Project
      </NavLink>
    </>
  );


  return (
    <>
      <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600">
        {navLinks}
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="relative h-6 w-6 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`absolute h-0.5 w-6 bg-slate-800 transition-all ${
            open ? "rotate-45 top-3" : "top-1"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-slate-800 transition-all ${
            open ? "opacity-0" : "top-3"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-slate-800 transition-all ${
            open ? "-rotate-45 top-3" : "top-5"
          }`}
        />
      </button>
      <div className={`absolute left-0 top-16 w-full border-b bg-white md:hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-slate-700">
          {navLinks}
        </div>
      </div>
    </>
  );
}
