import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import Footer from "../components/Footer";

export default function AllWork() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary selection:bg-text-primary selection:text-bg-main">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 pt-6 pb-8 bg-gradient-to-b from-bg-main via-bg-main/80 to-transparent">
        <a href="/#work" onClick={handleBack} className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-text-secondary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </a>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="text-lg md:text-xl font-display font-bold tracking-widest uppercase">
            Foysal<span className="text-blue-500">.</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-xs font-mono text-text-muted mb-4">[ALL WORK]</div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter">
            Archive
          </h1>
        </motion.div>

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
      </main>
      
      <Footer />
    </div>
  );
}
