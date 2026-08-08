"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download } from "lucide-react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

// sections to track for active state — skills maps back to about
const trackIds = ["about", "skills", "experience", "projects", "contact"];
const sectionToNav: Record<string, string> = {
  about: "about", skills: "about",
  experience: "experience", projects: "projects", contact: "contact",
};

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,     setMenuOpen]     = useState(false);

  /* ── scroll / active-section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = trackIds;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = sectionToNav[id];
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[rgba(3,7,18,0.85)] backdrop-blur-xl border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
              <Code2 size={18} className="text-cyan-400" />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            </div>
            <span
              className="text-lg font-bold gradient-text-cyan"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {personal.name.split(" ")[0]}
              <span className="text-white/40">.</span>
              <span className="text-purple-400">dev</span>
            </span>
          </motion.a>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* ── Resume CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personal.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow-cyan flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <Download size={14} />
              Resume
            </motion.a>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#030712]/90 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass border-l border-white/10 flex flex-col pt-24 px-8 pb-10"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        activeSection === link.href.slice(1)
                          ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={personal.resume}
                  download
                  className="btn-glow-cyan flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
