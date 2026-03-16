import { motion } from "motion/react";
import { useSiteContent } from "../hooks/useFirestore";

export default function Hero() {
  const { content } = useSiteContent();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
        <div className="lg:col-span-8 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-4 text-text-muted text-sm font-medium tracking-widest uppercase"
          >
            <span className="w-8 h-[1px] bg-border-soft" />
            LOGO AND IDENTITY DESIGNER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] lg:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter uppercase text-balance"
          >
            {content.heroTitle.split(' ').slice(0, 2).join(' ')} <br />
            {content.heroTitle.split(' ').slice(2).join(' ')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 lg:mt-12 max-w-md text-text-secondary text-lg lg:text-xl leading-relaxed text-pretty"
          >
            {content.heroSubtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-bg-panel group"
        >
          <img
            src="https://i.postimg.cc/g22TLZ0B/494231833_3844248185885196_2938705176646727128_n.jpg"
            alt="Minimalist Branding Mockup"
            className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 text-xs font-mono text-text-muted bg-bg-main/80 px-2 py-1 backdrop-blur-sm">
            [01] Visual Introduction
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-6 lg:left-12 flex flex-col items-center gap-4 text-xs font-mono text-text-muted uppercase tracking-widest"
      >
        <div className="w-[1px] h-16 bg-border-soft overflow-hidden relative">
          <motion.div
            animate={{ y: [-32, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 w-full h-1/2 bg-text-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
