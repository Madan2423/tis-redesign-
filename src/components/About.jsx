import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const campusImage =
  "https://tis.edu.in/_next/static/media/5md.914eb3a9.jpg";

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#f4f1ea] px-5 py-24 text-neutral-900 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 md:grid-cols-2 md:items-end"
        >
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-neutral-400" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                About Tulas
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              More than
              <br />
              <span className="italic text-neutral-400">
                a school.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="md:pb-2">
            <p className="max-w-lg text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
              Tulas International School brings academics, creativity,
              sports and character development together to create an
              environment where students can discover their strengths,
              develop confidence and prepare for the world ahead.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-neutral-300 sm:min-h-[600px]"
          >
            <motion.img
              src={campusImage}
              alt="Tulas International School campus"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <div className="flex items-end justify-between gap-5">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Dehradun · India
                  </p>

                  <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight sm:text-3xl">
                    A campus designed for curiosity, discovery and growth.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 backdrop-blur-md transition-transform duration-500 group-hover:rotate-45 sm:flex">
                  <ArrowUpRight size={19} />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between rounded-[2rem] bg-[#e5dfd2] p-7 sm:p-10"
          >
            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                The Tulas Philosophy
              </p>

              <h3 className="mt-8 text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                Learning should create questions,
                <span className="italic text-neutral-500">
                  {" "}not just answers.
                </span>
              </h3>

              <div className="mt-8 space-y-5 text-sm leading-7 text-neutral-600 sm:text-base">
                <p>
                  Education becomes meaningful when students are encouraged
                  to explore beyond the obvious. At Tulas, learning extends
                  beyond textbooks and classrooms.
                </p>

                <p>
                  Students are encouraged to question, experiment,
                  collaborate, compete and create while developing the
                  confidence to approach new challenges.
                </p>
              </div>

            </div>

            {/* Philosophy Items */}
            <div className="mt-14 space-y-0 border-t border-neutral-900/10">

              <div className="flex items-center justify-between border-b border-neutral-900/10 py-5">
                <span className="text-sm font-medium">
                  Academic Excellence
                </span>

                <span className="text-xs text-neutral-400">
                  01
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-neutral-900/10 py-5">
                <span className="text-sm font-medium">
                  Character & Confidence
                </span>

                <span className="text-xs text-neutral-400">
                  02
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-neutral-900/10 py-5">
                <span className="text-sm font-medium">
                  Sports & Creativity
                </span>

                <span className="text-xs text-neutral-400">
                  03
                </span>
              </div>

              <div className="flex items-center justify-between py-5">
                <span className="text-sm font-medium">
                  Leadership & Life Skills
                </span>

                <span className="text-xs text-neutral-400">
                  04
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Large Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 border-y border-neutral-900/10 py-12 md:mt-28 md:py-16"
        >
          <p className="max-w-6xl text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl lg:text-6xl">
            At Tulas, education is not limited to what happens inside a
            classroom.{" "}
            <span className="italic text-neutral-400">
              It is about discovering who you can become.
            </span>
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-8 bg-neutral-400" />

            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Tulas International School
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;