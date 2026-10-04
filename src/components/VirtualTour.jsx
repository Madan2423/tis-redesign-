import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const campusImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90";

function VirtualTour() {
  return (
    <section
      id="virtual-tour"
      className="overflow-hidden bg-[#f4f1ea] px-5 py-24 text-neutral-900 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-neutral-400" />

            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              Virtual Tour
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Experience
              <br />
              <span className="italic text-neutral-400">
                Tulas.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-neutral-500 md:pb-2">
              Take a glimpse inside our campus and discover the spaces
              where students learn, create, compete and grow.
            </p>
          </div>
        </motion.div>

        {/* Main Visual */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-14 min-h-[560px] overflow-hidden rounded-[2rem] bg-neutral-900 sm:min-h-[650px] md:min-h-[720px]"
        >
          {/* Image */}
          <motion.img
            src={campusImage}
            alt="Tulas International School campus"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

          {/* Top Information */}
          <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8 md:left-10 md:right-10 md:top-10">

            <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                Tulas International School
              </p>
            </div>

            <div className="hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md sm:block">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                Dehradun · India
              </p>
            </div>

          </div>

          {/* Play Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <button
              type="button"
              aria-label="Start virtual tour"
              className="group/play relative flex h-24 w-24 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl transition-transform duration-500 hover:scale-110 sm:h-28 sm:w-28"
            >
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full border border-white/70 transition-all duration-700 group-hover/play:inset-[-12px] group-hover/play:opacity-0" />

              <Play
                size={25}
                fill="currentColor"
                className="ml-1 transition-transform duration-300 group-hover/play:scale-110"
              />
            </button>

          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Watch the journey
                </p>

                <h3 className="mt-3 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
                  See where curiosity
                  <br />
                  <span className="italic text-white/55">
                    comes to life.
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-3">

                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2.5 text-xs text-white/60 backdrop-blur-md">
                  03:42
                </span>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <ArrowUpRight size={17} />
                </button>

              </div>

            </div>
          </div>
        </motion.div>

        {/* Supporting Cards */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[1.5rem] bg-[#e5dfd2] p-7"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              01
            </p>

            <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em]">
              Learning spaces
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Purpose-built spaces designed to make learning interactive,
              collaborative and engaging.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="rounded-[1.5rem] bg-[#e5dfd2] p-7"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              02
            </p>

            <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em]">
              Life beyond class
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Sports, arts, activities and spaces where students can
              develop interests beyond academics.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="rounded-[1.5rem] bg-neutral-900 p-7 text-white"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              03
            </p>

            <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em]">
              A place to belong
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/40">
              A community where students are supported, challenged and
              encouraged to become their best selves.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default VirtualTour;