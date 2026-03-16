import { motion } from "motion/react";
import { useSiteContent } from "../hooks/useFirestore";

export default function About() {
  const { content } = useSiteContent();

  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 bg-bg-panel border-t border-border-soft"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="text-xs font-mono text-text-muted mb-4">[03]</div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-tighter">
            About <br /> Philosophy
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">
              {content.aboutText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">
                Core Focus
              </h3>
              <ul className="space-y-2 text-text-primary">
                <li>Minimal Logo Design</li>
                <li>Clean Visual Systems</li>
                <li>Brand Identity Evolution</li>
                <li>Strategic Typography</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">
                Primary Tools
              </h3>
              <ul className="space-y-2 text-text-primary">
                {content.aboutTools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
