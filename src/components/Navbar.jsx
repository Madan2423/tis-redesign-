import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#academics",
  },
  {
    label: "Beyond Academics",
    href: "#beyond",
  },
  {
    label: "Virtual Tour",
    href: "#virtual-tour",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9000] px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
          isScrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
            isScrolled
              ? "border-black/10 bg-[#f4f1ea]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
              : "border-white/20 bg-black/10 text-white backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-500 ${
                isScrolled
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-white/30 bg-white text-neutral-900"
              }`}
            >
              TI
            </div>

            <div className="hidden sm:block">
              <p
                className={`text-sm font-semibold tracking-tight transition-colors duration-500 ${
                  isScrolled
                    ? "text-neutral-900"
                    : "text-white"
                }`}
              >
                Tulas
              </p>

              <p
                className={`text-[9px] uppercase tracking-[0.18em] transition-colors duration-500 ${
                  isScrolled
                    ? "text-neutral-400"
                    : "text-white/50"
                }`}
              >
                International School
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-neutral-500 hover:text-neutral-900"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-neutral-900 text-white hover:bg-neutral-700"
                  : "bg-white text-neutral-900 hover:bg-white/90"
              }`}
            >
              <span>Admissions</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
              isScrolled
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-900"
            }`}
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9500] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col bg-[#f4f1ea] px-6 py-6 text-neutral-900 transition-transform duration-500 sm:px-8 ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between">
            <a
              href="#top"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                TI
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Tulas
                </p>

                <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-400">
                  International School
                </p>
              </div>
            </a>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-20 flex flex-col">
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Navigation
            </p>

            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-t border-neutral-900/10 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs text-neutral-300">
                    0{index + 1}
                  </span>

                  <span className="text-2xl font-medium tracking-tight">
                    {link.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-neutral-400 transition-transform duration-300 group-hover:rotate-45"
                />
              </a>
            ))}

            <a
              href="#admissions"
              onClick={closeMenu}
              className="group flex items-center justify-between border-y border-neutral-900/10 py-5"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-neutral-300">
                  05
                </span>

                <span className="text-2xl font-medium tracking-tight">
                  Admissions
                </span>
              </div>

              <ArrowUpRight
                size={20}
                className="text-neutral-400 transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-auto">
            <div className="mb-6 h-px bg-neutral-900/10" />

            <p className="max-w-xs text-sm leading-6 text-neutral-500">
              Discover a learning environment designed to help
              students learn, explore and grow.
            </p>

            <a
              href="#admissions"
              onClick={closeMenu}
              className="mt-6 flex w-full items-center justify-between rounded-full bg-neutral-900 px-5 py-4 text-sm font-semibold text-white"
            >
              <span>Begin your journey</span>

              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;