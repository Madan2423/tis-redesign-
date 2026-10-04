import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Tulas provides an environment where students are encouraged to explore, participate and become confident individuals.",
    name: "Parent",
    role: "Tulas International School",
  },
  {
    quote:
      "The combination of academics, sports and activities gives students opportunities to discover interests beyond the classroom.",
    name: "Parent",
    role: "Tulas International School",
  },
  {
    quote:
      "The school creates a supportive environment where learning feels much bigger than simply preparing for examinations.",
    name: "Parent",
    role: "Tulas International School",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#e5dfd2] px-5 py-24 text-neutral-900 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 md:grid-cols-[0.65fr_1fr]"
        >
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-neutral-400" />

              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Voices of Tulas
              </p>
            </div>

            <h2 className="max-w-lg text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              A community
              <br />
              <span className="italic text-neutral-400">
                that matters.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div className="min-h-[360px]">
              <Quote
                size={46}
                strokeWidth={1}
                className="mb-10 text-neutral-400"
              />

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                  “{activeTestimonial.quote}”
                </blockquote>

                <div className="mt-10">
                  <p className="text-sm font-medium">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
                    {activeTestimonial.role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between border-t border-neutral-900/10 pt-6">
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name + index}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-10 bg-neutral-900"
                        : "w-4 bg-neutral-900/20"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={previousTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900/15 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                >
                  <ArrowLeft size={16} />
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={nextTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900/15 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;