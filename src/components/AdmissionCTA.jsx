import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

function AdmissionCTA() {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#171717] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-10"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />

            <p className="text-xs uppercase tracking-[0.28em] text-white/40">
              Admissions
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-6xl text-5xl font-medium leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl lg:text-[8rem]">
            Begin your
            <br />

            <span className="italic text-white/35">
              Tulas journey.
            </span>
          </h2>

          {/* Bottom content */}
          <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            {/* Left */}
            <div>
              <p className="max-w-xl text-base leading-7 text-white/50 md:text-lg">
                Discover a learning environment where academics,
                creativity, sports and character development come
                together.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* Enquire Now */}
                <a
                  href="#contact"
                  className="group flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200"
                >
                  <span className="text-[#171717]">
                    Enquire Now
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                    <ArrowUpRight
                      size={15}
                      className="text-white transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </a>

                {/* Call Admissions */}
                <a
                  href="tel:+911352691222"
                  className="flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                >
                  <Phone
                    size={15}
                    className="text-white"
                  />

                  <span className="text-white">
                    Call Admissions
                  </span>
                </a>

              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 border-l border-white/10 pl-6">
              <div className="flex items-center gap-3">
                <Mail
                  size={15}
                  className="text-white/50"
                />

                <span className="text-sm text-white/50">
                  admissions@tis.edu.in
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={15}
                  className="text-white/50"
                />

                <span className="text-sm text-white/50">
                  Admissions Office
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AdmissionCTA;