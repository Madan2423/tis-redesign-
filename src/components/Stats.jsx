import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const statistics = [
  {
    number: "22",
    label: "Acre Campus",
    description:
      "A spacious environment designed to give students room to learn and explore.",
  },
  {
    number: "16+",
    label: "Sports",
    description:
      "Multiple sporting opportunities that encourage discipline, teamwork and confidence.",
  },
  {
    number: "24×7",
    label: "Medical Assistance",
    description:
      "Round-the-clock medical support available for the school community.",
  },
  {
    number: "6:1",
    label: "Student Teacher Ratio",
    description:
      "A learning environment designed around individual attention and interaction.",
  },
];

function Stats() {
  return (
    <section
      id="campus"
      className="overflow-hidden bg-[#171717] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Why Tulas
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              The numbers behind
              <br />
              <span className="italic text-white/35">
                the experience.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45">
            A campus and learning environment designed to support
            academic growth, creativity, physical development and
            individual attention.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[310px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.04] sm:p-9"
            >

              {/* Number */}
              <div className="flex items-start justify-between">

                <span className="text-xs text-white/25">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />

              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">

                <p className="text-6xl font-medium tracking-[-0.06em] sm:text-7xl">
                  {stat.number}
                </p>

                <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                  {stat.label}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
                  {stat.description}
                </p>

              </div>

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Built for curiosity · Designed for growth
          </p>

          <div className="hidden h-px flex-1 bg-white/10 sm:mx-8 sm:block" />

          <p className="text-xs text-white/25">
            Dehradun · India
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Stats;