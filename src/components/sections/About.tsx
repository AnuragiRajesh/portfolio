"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Calendar, Zap, Code2, Server, Terminal, Wrench } from "lucide-react";
import { personal, skills } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const CATEGORIES = [
  { key: "Frontend",   label: "Frontend",   icon: Code2,    color: "#00f5ff" },
  { key: "Backend",    label: "Backend",    icon: Server,   color: "#a855f7" },
  { key: "DevOps",     label: "DevOps",     icon: Wrench,   color: "#4ade80" },
  { key: "Automation", label: "Automation", icon: Terminal, color: "#f472b6" },
] as const;

type Category = typeof CATEGORIES[number]["key"];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="font-semibold text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href?: string }) {
  const inner = (
    <span className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-cyan-400 transition-colors">
      <Icon size={14} className="text-cyan-400 flex-shrink-0" />
      <span>{label}</span>
    </span>
  );
  if (href)
    return <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{inner}</a>;
  return <div>{inner}</div>;
}

const TECH_BADGES = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "Python", "PostgreSQL", "MongoDB", "Docker", "AWS",
  "GraphQL", "Redis", "Tailwind CSS", "Playwright", "Git",
];

export default function About() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");
  const activeCategory = CATEGORIES.find((c) => c.key === activeTab)!;
  const filteredSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }} />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fira-code)" }}>01. Who I Am</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>About Me</h2>
        </motion.div>

        {/* Bio — two columns on lg */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Left: paragraphs */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-base">{personal.bio}</p>
            <p className="text-slate-400 leading-relaxed">
              I enjoy combining academic learning with hands-on development. Whether it&apos;s
              building responsive UIs, designing APIs with database functionality, or automating
              workflows with Python — I focus on writing clean, maintainable code that solves
              real problems.
            </p>
          </motion.div>

          {/* Right: info chips + links */}
          <motion.div {...fadeUp(0.18)} className="space-y-3">
            <InfoRow icon={MapPin}   label={personal.location} />
            <InfoRow icon={Calendar} label="3+ Years Experience" />
            <InfoRow icon={Mail}     label={personal.email}   href={`mailto:${personal.email}`} />
            <InfoRow icon={Mail}     label={personal.email2!} href={`mailto:${personal.email2}`} />
            <InfoRow icon={Zap}      label={personal.availability} />

            <div className="flex gap-4 pt-3">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4">
                GitHub ↗
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4">
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech badges */}
        <motion.div {...fadeUp(0.1)} className="mb-20">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest mb-6 font-semibold">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_BADGES.map((tech, i) => (
              <motion.span key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: i * 0.025 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-sm text-slate-300 border border-white/10 bg-white/[0.04]
                           hover:border-cyan-400/40 hover:text-cyan-400 cursor-default transition-colors duration-200"
                style={{ fontFamily: "var(--font-fira-code)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <div id="skills">
          <motion.div {...fadeUp(0.1)} className="text-center mb-10">
            <p className="text-purple-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "var(--font-fira-code)" }}>02. What I Know</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}>Skills</h2>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(({ key, label, icon: Icon, color }) => {
              const isActive = activeTab === key;
              return (
                <button key={key} onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                    isActive ? "" : "text-slate-400 bg-white/[0.03] border-white/10 hover:text-white hover:border-white/20"
                  }`}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${color}20, ${color}0c)`,
                    borderColor: `${color}55`, color,
                    boxShadow: `0 0 18px ${color}20`,
                  } : {}}
                >
                  <Icon size={14} /> {label}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex items-center gap-3 mb-7">
                {(() => { const Icon = activeCategory.icon; return (
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${activeCategory.color}18`, border: `1px solid ${activeCategory.color}44` }}>
                    <Icon size={16} style={{ color: activeCategory.color }} />
                  </div>
                ); })()}
                <h3 className="text-white font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {activeCategory.label}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                {filteredSkills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level}
                    color={activeCategory.color} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
