import { motion } from "motion/react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "Understanding your brand, target audience, and core values through a detailed questionnaire and discussion.",
  },
  {
    id: "02",
    title: "Research",
    description:
      "Analyzing the industry landscape, competitors, and visual trends to find a unique positioning.",
  },
  {
    id: "03",
    title: "Concept Development",
    description:
      "Sketching and exploring multiple directions, focusing on simplicity, balance, and memorability.",
  },
  {
    id: "04",
    title: "Refinement",
    description:
      "Selecting the strongest concept and perfecting its proportions, typography, and color application.",
  },
  {
    id: "05",
    title: "Final Delivery",
    description:
      "Providing all necessary logo files, variations, and a basic brand guideline for consistent usage.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-bg-panel border-t border-border-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="text-xs font-mono text-text-muted mb-4">[05]</div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter">
              Approach
            </h2>
          </div>
          <p className="max-w-sm text-text-secondary text-lg">
            A structured, strategic process to ensure every logo is built on a
            solid foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-6 lg:pl-0 lg:pt-6 border-l lg:border-l-0 lg:border-t border-border-soft"
            >
              <div className="absolute left-[-5px] lg:left-0 lg:top-[-5px] w-2 h-2 bg-text-primary rounded-full" />

              <div className="text-xs font-mono text-text-muted mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
