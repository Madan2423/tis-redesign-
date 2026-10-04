import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0d0d0d] px-5 py-16 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Campus CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="border-b border-white/10 pb-16"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/40">
            Discover the campus
          </p>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              There is more to Tulas{" "}
              <span className="italic text-white/35">
                than a classroom.
              </span>
            </h2>

            <a
              href="#virtual-tour"
              aria-label="Explore virtual tour"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#171717] transition-transform duration-300 hover:scale-110"
            >
              <ArrowUpRight size={22} />
            </a>
          </div>
        </motion.div>

        {/* Footer content */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex w-fit items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#171717]">
                TI
              </div>

              <div>
                <p className="text-base font-semibold text-white">
                  Tulas
                </p>

                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  International School
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              A learning community where curiosity, creativity,
              character and confidence come together.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#academics"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Experience
              </a>

              <a
                href="#beyond"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Beyond Academics
              </a>

              <a
                href="#virtual-tour"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Virtual Tour
              </a>
            </div>
          </div>

          {/* Admissions */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
              Admissions
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#admissions"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Enquire Now
              </a>

              <a
                href="#testimonials"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Testimonials
              </a>

              <a
                href="#contact"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
              Contact
            </p>

            <div className="flex flex-col gap-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-white/40"
                />

                <p className="text-sm leading-6 text-white/50">
                  Tulas International School
                  <br />
                  Dehradun, Uttarakhand
                  <br />
                  India
                </p>
              </div>

              <a
                href="mailto:admissions@tis.edu.in"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Mail size={15} />

                <span>
                  admissions@tis.edu.in
                </span>
              </a>

              <a
                href="tel:+911352691222"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone size={15} />

                <span>
                  Admissions Office
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Tulas International School
          </p>

          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex w-fit items-center gap-2 text-xs text-white/40 transition-colors hover:text-white"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
              <ArrowUpRight
                size={12}
                className="-rotate-45"
              />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;