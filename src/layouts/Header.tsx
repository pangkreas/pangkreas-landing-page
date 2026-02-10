import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white/80 px-6 backdrop-blur-md md:px-12">
      <Logo />
      <Navbar />
    </header>
  );
}
