import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    number: "01",
    title: "Sports",
    description:
      "Develop discipline, teamwork and confidence through a wide range of sporting experiences.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    tag: "Move",
  },
  {
    number: "02",
    title: "Arts",
    description:
      "Create, perform and express ideas through music, visual arts, theatre and creative exploration.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
    tag: "Create",
  },
  {
    number: "03",
    title: "Leadership",
    description:
      "Students learn to take responsibility, collaborate with others and make a positive impact.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
    tag: "Lead",
  },
  {
    number: "04",
    title: "Adventure",
    description:
      "Experiences beyond the campus encourage students to explore, adapt and discover new perspectives.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1400&q=85",
    tag: "Explore",
  },
];

function Sports() {
  return (
    <section
      id="beyond"
      className="overflow-hidden bg-[#171717] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 md:grid-cols-[1fr_0.45fr] md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                Beyond Academics
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Find your
              <br />
              <span className="italic text-white/35">
                next thing.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45 md:pb-2">
            The best education gives students opportunities to discover
            interests, develop confidence and find the things that make
            them come alive.
          </p>
        </motion.div>

        {/* Intro Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-16 max-w-4xl border-y border-white/10 py-8"
        >
          <p className="text-xl leading-8 tracking-[-0.02em] text-white/70 sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
            From the playing field to the stage, students have the freedom
            to explore their interests and{" "}
            <span className="text-white">
              discover what they are capable of.
            </span>
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[520px] overflow-hidden rounded-[1.7rem] bg-neutral-800"
            >
              {/* Image */}
              <motion.img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Number */}
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="text-xs text-white/45">
                  {activity.number}
                </span>

                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                  {activity.tag}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute right-5 top-16 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-medium tracking-[-0.04em]">
                  {activity.title}
                </h3>

                <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  <p className="max-w-xs text-sm leading-6 text-white/65">
                    {activity.description}
                  </p>
                </div>

                {/* Mobile description */}
                <p className="mt-3 text-sm leading-6 text-white/55 sm:hidden">
                  {activity.description}
                </p>
              </div>

              {/* Bottom hover line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 flex flex-col gap-7 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Discover the campus
            </p>

            <h3 className="mt-3 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
              There is more to Tulas
              <span className="italic text-white/40">
                {" "}than a classroom.
              </span>
            </h3>
          </div>

          <a
            href="#virtual-tour"
            className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200"
          >
            <span>Take a Virtual Tour</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Sports;