import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useProjects } from "../hooks/useProjects";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const project = projects.find((p) => p.id === Number(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-main text-text-primary flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display uppercase mb-4">Project Not Found</h1>
        <a href="/#work" onClick={handleBack} className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main text-text-primary selection:bg-text-primary selection:text-bg-main">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 pt-6 pb-8 bg-gradient-to-b from-bg-main via-bg-main/80 to-transparent">
        <a href="/#work" onClick={handleBack} className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-text-secondary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </a>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="text-xl font-display font-bold tracking-widest uppercase">
            Foysal
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12">
            <div className="text-xs font-mono text-text-muted mb-4 uppercase tracking-widest">
              {project.category}
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              {project.summary}
            </p>
          </div>

          <div className="w-full aspect-video bg-bg-panel mb-16 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">
                About the Project
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Client</h3>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Year</h3>
                <p className="font-medium">{project.year}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Services</h3>
                <ul className="flex flex-col gap-1">
                  {project.services.map((service, i) => (
                    <li key={i} className="font-medium">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
