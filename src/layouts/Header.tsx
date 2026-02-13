import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Container from "@/components/layout/Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 h-16 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}
