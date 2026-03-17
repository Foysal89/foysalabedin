import React from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
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
    <footer className="py-12 px-6 lg:px-12 bg-bg-panel border-t border-border-soft text-sm text-text-muted">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-text-primary uppercase tracking-widest">
            Foysal<span className="text-blue-500">.</span>
          </span>
          <span className="w-1 h-1 bg-border-soft rounded-full" />
          <span>Logo and Identity Designer</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="/#work" onClick={(e) => handleScroll(e, "work")} className="hover:text-text-primary transition-colors">
            Work
          </a>
          <a
            href="/#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/#services"
            onClick={(e) => handleScroll(e, "services")}
            className="hover:text-text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span>&copy; 2023</span>
          <span className="w-1 h-1 bg-border-soft rounded-full" />
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
