import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaBehance, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/7ad91ebcc56909b120487bf8e54dbef9", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-bg-main border-t border-border-soft"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-text-muted mb-4">[06]</div>
            <h2 className="text-6xl lg:text-[8vw] leading-[0.85] font-display font-bold uppercase tracking-tighter text-balance mb-8">
              Let's Build <br /> Your Brand
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              Ready to elevate your visual identity? Fill out the form or reach
              out directly to discuss your project.
            </p>
          </div>

          <div className="mt-16 lg:mt-0 space-y-8">
            <div>
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                Email
              </h3>
              <a
                href="mailto:ab.foysal90@gmail.com"
                className="text-lg font-display hover:text-text-secondary transition-colors"
              >
                ab.foysal90@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                Socials
              </h3>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://www.behance.net/foysalabedin90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Behance"
                >
                  <span className="w-6 h-6 block"><FaBehance size={24} /></span>
                </a>
                <a
                  href="https://www.fiverr.com/ab_foysal/buying?source=avatar_menu_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Fiverr"
                >
                  <span className="w-8 h-8 block"><SiFiverr size={32} /></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-foysal-abedin-532914362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="w-6 h-6 block"><FaLinkedin size={24} /></span>
                </a>
                <a
                  href="https://www.instagram.com/foysal.who/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <span className="w-6 h-6 block"><FaInstagram size={24} /></span>
                </a>
                <a
                  href="https://dribbble.com/Foysal_Abedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Dribbble"
                >
                  <span className="w-6 h-6 block"><FaDribbble size={24} /></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-12">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-b border-border-soft py-4 text-text-primary focus:outline-none focus:border-text-primary transition-colors peer placeholder-transparent"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-2 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-border-soft py-4 text-text-primary focus:outline-none focus:border-text-primary transition-colors peer placeholder-transparent"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-2 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="projectType"
                name="projectType"
                className="w-full bg-transparent border-b border-border-soft py-4 text-text-primary focus:outline-none focus:border-text-primary transition-colors peer placeholder-transparent"
                placeholder=" "
              />
              <label
                htmlFor="projectType"
                className="absolute left-0 -top-2 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary"
              >
                Project Type (e.g., Logo Redesign, New Identity)
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-border-soft py-4 text-text-primary focus:outline-none focus:border-text-primary transition-colors peer placeholder-transparent resize-none"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-2 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary"
              >
                Tell me about your brand...
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-5 bg-text-primary text-bg-main font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm rounded-lg"
                >
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg"
                >
                  Oops! Something went wrong. Please try again later or email me directly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
