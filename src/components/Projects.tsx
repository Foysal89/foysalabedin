import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();

  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="text-xs font-mono text-text-muted mb-4">[02]</div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter">
              Selected Work
            </h2>
          </div>
          <p className="max-w-sm text-text-secondary text-lg">
            A curated selection of minimal logo identities designed for modern
            brands.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${project.colSpan} group cursor-pointer`}
            >
              <Link to={`/work/${project.id}`} className="block">
                <div
                  className={`relative overflow-hidden bg-bg-panel mb-6 ${project.aspect}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-text-primary" />
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {project.summary}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-widest text-right">
                    {project.category}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
