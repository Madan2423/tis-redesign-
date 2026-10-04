import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

const campusImage =
  "https://tis.edu.in/_next/static/media/5md.914eb3a9.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#111111] text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={campusImage}
          alt="Tulas International School campus in Dehradun"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
      </div>

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 md:pb-14 lg:px-10">
        {/* Location Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-white/70" />

          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/80">
            Tulas International School · Dehradun
          </p>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.06em]"
          >
            <span className="block">Education</span>

            <span className="ml-[8vw] block italic text-white/75">
              beyond
            </span>

            <span className="block">the classroom.</span>
          </motion.h1>
        </div>

        {/* Bottom Content */}
        <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="max-w-md"
          >
            <p className="text-sm leading-6 text-white/70 md:text-base md:leading-7">
              A place where curiosity becomes confidence, learning becomes
              an adventure, and every student gets the space to discover
              their own potential.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Explore Tulas */}
            <a
              href="#about"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200"
            >
              <span className="whitespace-nowrap text-neutral-900">
                Explore Tulas
              </span>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Virtual Tour */}
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40">
                <Play size={12} fill="currentColor" />
              </span>

              <span className="whitespace-nowrap">Virtual Tour</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
            duration: 1,
          }}
          className="mt-12 flex items-center justify-between border-t border-white/20 pt-5 md:mt-16"
        >
          {/* Community */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-black bg-white/80" />
              <span className="h-7 w-7 rounded-full border-2 border-black bg-white/60" />
              <span className="h-7 w-7 rounded-full border-2 border-black bg-white/40" />
            </div>

            <p className="text-xs text-white/60">
              A community built to help students grow
            </p>
          </div>

          {/* Scroll */}
          <a
            href="#about"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            <span>Scroll</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown size={14} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Campus Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-5 top-32 z-20 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md lg:block"
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
          22 Acre Campus
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;