import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Container from "@/components/layout/Container";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 h-16 border-b border-transparent transition-all duration-300 ${
        scrolled
          ? "border-slate-100 bg-white shadow-sm"
          : "bg-white/85 backdrop-blur-md"
      }`}
    >
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />
        <Navbar key={location.pathname} />
      </Container>
    </header>
  );
}
