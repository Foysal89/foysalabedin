import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Minimal Logo Design",
    description:
      "Crafting simple, memorable, and timeless logos that communicate your brand's core essence.",
    tags: ["Identity", "Symbol", "Wordmark"],
  },
  {
    id: "02",
    title: "Logo Redesign",
    description:
      "Refining and modernizing existing logos while maintaining brand recognition and heritage.",
    tags: ["Refresh", "Modernize", "Simplify"],
  },
  {
    id: "03",
    title: "Monogram Design",
    description:
      "Creating elegant interlocking letterforms for fashion, luxury, and personal brands.",
    tags: ["Initials", "Luxury", "Fashion"],
  },
  {
    id: "04",
    title: "Basic Brand Direction",
    description:
      "Establishing typography, color palettes, and visual guidelines to accompany your new logo.",
    tags: ["Guidelines", "Colors", "Typography"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 lg:px-12 bg-bg-main border-t border-border-soft"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-text-muted mb-4">[04]</div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter text-balance">
              SERVICES THAT ENSURE VISUAL CLARITY
            </h2>
          </div>
          <p className="max-w-sm text-text-secondary text-lg">
            Strategic design services focused on building strong, minimalist
            brand presences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border-soft">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-bg-panel p-8 lg:p-12 group hover:bg-bg-main transition-colors duration-500 flex flex-col justify-between min-h-[320px]"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-sm font-mono text-text-muted">
                  {service.id}
                </span>
                <div className="w-10 h-10 rounded-full border border-border-soft flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-main transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-border-soft rounded-full text-text-muted group-hover:border-text-muted transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
