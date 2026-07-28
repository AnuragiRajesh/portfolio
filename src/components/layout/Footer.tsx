"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

const socials = [
  { icon: GithubIcon,   href: personal.github,               label: "GitHub" },
  { icon: LinkedinIcon, href: personal.linkedin,             label: "LinkedIn" },
  { icon: Mail,         href: `mailto:${personal.email}`,    label: "Email" },
];

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] bg-[rgba(3,7,18,0.8)] backdrop-blur-xl overflow-hidden">
      {/* Subtle gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30">
                <Code2 size={18} className="text-cyan-400" />
              </div>
              <span
                className="text-lg font-bold gradient-text-cyan"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {personal.name.split(" ")[0]}
                <span className="text-white/40">.</span>
                <span className="text-purple-400">dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building scalable web applications and elegant digital experiences. Available for freelance and full-time opportunities.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
              <span className="text-green-400 text-xs font-medium">{personal.availability}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase text-cyan-400/70">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-200 rounded" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase text-cyan-400/70">
              Connect
            </h3>
            <p className="text-slate-400 text-sm mb-5">{personal.email}</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 transition-colors duration-200"
                >
                  <Icon width={16} height={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Sarjapura, Banglore, Karnataka - India
          </p>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl glass border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
