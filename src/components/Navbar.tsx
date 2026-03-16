import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (targetId === "top") {
      if (location.pathname !== "/") {
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and render, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 pt-6 pb-8 bg-gradient-to-b from-bg-main via-bg-main/80 to-transparent"
      >
        <div className="flex items-center gap-8 text-sm font-medium tracking-wide text-text-primary z-50">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#work"
              onClick={(e) => handleScroll(e, "work")}
              className="hover:text-text-secondary transition-colors flex items-center gap-1"
            >
              Work <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="/#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-text-secondary transition-colors flex items-center gap-1"
            >
              About <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-text-secondary transition-colors flex items-center gap-1"
            >
              Contact <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -ml-2 text-text-primary hover:text-text-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <a
            href="/"
            onClick={(e) => handleScroll(e, "top")}
            className="text-lg md:text-xl font-display font-bold tracking-widest uppercase"
          >
            Foysal
          </a>
        </div>

        <div className="z-50">
          <a
            href="/#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="px-3 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs font-semibold tracking-widest uppercase border border-border-soft hover:bg-text-primary hover:text-bg-main transition-colors duration-300 whitespace-nowrap"
          >
            Let's Talk
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-main pt-28 px-6 flex flex-col gap-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-display uppercase tracking-widest">
              <a 
                href="/#work" 
                onClick={(e) => handleScroll(e, "work")} 
                className="flex items-center justify-between border-b border-border-soft pb-4"
              >
                Work <ArrowUpRight className="w-5 h-5" />
              </a>
              <a 
                href="/#about" 
                onClick={(e) => handleScroll(e, "about")} 
                className="flex items-center justify-between border-b border-border-soft pb-4"
              >
                About <ArrowUpRight className="w-5 h-5" />
              </a>
              <a 
                href="/#contact" 
                onClick={(e) => handleScroll(e, "contact")} 
                className="flex items-center justify-between border-b border-border-soft pb-4"
              >
                Contact <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
