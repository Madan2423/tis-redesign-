import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: "academics",
    number: "01",
    title: "Academics",
    shortTitle: "Learn",
    description:
      "A learning environment that encourages curiosity, critical thinking and a deeper understanding of the world beyond textbooks.",
    details: [
      "Experiential learning",
      "Technology-enabled classrooms",
      "Project-based learning",
      "Individual attention",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "boarding",
    number: "02",
    title: "Boarding",
    shortTitle: "Live",
    description:
      "A supportive residential environment where students learn independence, responsibility and the value of community.",
    details: [
      "Safe residential environment",
      "Structured daily routine",
      "House community",
      "Pastoral support",
    ],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "beyond",
    number: "03",
    title: "Beyond Academics",
    shortTitle: "Explore",
    description:
      "Sports, arts, activities and leadership opportunities that allow students to discover interests and develop confidence outside the classroom.",
    details: [
      "16+ sporting opportunities",
      "Arts and creative activities",
      "Leadership development",
      "Clubs and student activities",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
  },
];

function Experience() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section
      id="academics"
      className="overflow-hidden bg-[#f4f1ea] px-5 py-24 text-neutral-900 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-neutral-400" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                The Tulas Experience
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Learn.
              <br />
              <span className="italic text-neutral-400">
                Live.
              </span>{" "}
              Explore.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-600">
            School life is more than a timetable. Discover the different
            experiences that shape a student's journey at Tulas.
          </p>
        </motion.div>

        {/* Experience Selector */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">

          {/* Left Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col rounded-[2rem] bg-[#e5dfd2] p-4 sm:p-6"
          >
            <div className="mb-5 px-3 pt-2">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Choose your experience
              </p>
            </div>

            <div className="flex flex-col">
              {experiences.map((experience) => {
                const isActive = activeExperience.id === experience.id;

                return (
                  <button
                    key={experience.id}
                    type="button"
                    onClick={() => setActiveExperience(experience)}
                    className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-500 sm:p-6 ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-900 hover:bg-black/5"
                    }`}
                  >
                    <div className="relative z-10 flex items-center justify-between">

                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs ${
                            isActive
                              ? "text-white/40"
                              : "text-neutral-400"
                          }`}
                        >
                          {experience.number}
                        </span>

                        <span className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                          {experience.title}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "rotate-45 text-white"
                            : "text-neutral-400 group-hover:-translate-y-1 group-hover:translate-x-1"
                        }`}
                      />

                    </div>

                    <div className="relative z-10 mt-2 pl-9">
                      <span
                        className={`text-xs uppercase tracking-[0.18em] ${
                          isActive
                            ? "text-white/40"
                            : "text-neutral-400"
                        }`}
                      >
                        {experience.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom message */}
            <div className="mt-auto hidden border-t border-neutral-900/10 px-3 pt-8 lg:block">
              <p className="text-sm leading-6 text-neutral-500">
                Every experience is an opportunity to discover something
                new about yourself.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-neutral-900 text-white sm:min-h-[680px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeExperience.id}
                src={activeExperience.image}
                alt={activeExperience.title}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

            {/* Top Label */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
              <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                {activeExperience.number} / 03
              </span>

              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Tulas Experience
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <h3 className="max-w-2xl text-4xl font-medium leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
                    {activeExperience.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    {activeExperience.description}
                  </p>

                  {/* Details */}
                  <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/20 pt-6 sm:grid-cols-4">
                    {activeExperience.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />

                        <span className="text-xs leading-5 text-white/55">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 flex flex-col gap-5 border-t border-neutral-900/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-neutral-500">
            From academic exploration to sports, arts and residential life,
            every experience contributes to the person a student becomes.
          </p>

          <a
            href="#beyond"
            className="group flex w-fit items-center gap-3 text-sm font-medium"
          >
            Discover more

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;