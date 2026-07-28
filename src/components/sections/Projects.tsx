"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Star, Filter } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects, type ProjectTag } from "@/lib/data";
import { personal } from "@/lib/data";

// ─── helpers ─────────────────────────────────────────────────────────────────

const FILTERS: ProjectTag[] = ["All", "Fullstack", "Frontend", "Backend", "Automation"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

// ─── Tech badge ───────────────────────────────────────────────────────────────

function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] text-slate-400 border border-white/[0.08]"
      style={{ fontFamily: "var(--font-fira-code)" }}
    >
      {label}
    </span>
  );
}

// ─── Featured project card (large, horizontal) ────────────────────────────────

function FeaturedCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
      className="group relative glass rounded-2xl border overflow-hidden card-shine"
      style={{ borderColor: `${project.accent}22` }}
    >
      {/* Gradient background fill */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Glow orb */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ background: project.accent }}
      />

      <div className={`relative z-10 flex flex-col ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"} gap-0`}>

        {/* Mock browser / visual pane */}
        <div className="sm:w-2/5 p-6 flex items-center justify-center min-h-[180px]">
          <div
            className="w-full max-w-[240px] rounded-xl border overflow-hidden"
            style={{ borderColor: `${project.accent}33`, background: `${project.accent}08` }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b"
              style={{ borderColor: `${project.accent}22` }}>
              {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            {/* Screen content placeholder */}
            <div className="p-4 space-y-2">
              <div className="h-2.5 rounded-full w-3/4" style={{ background: `${project.accent}40` }} />
              <div className="h-2 rounded-full w-full bg-white/10" />
              <div className="h-2 rounded-full w-5/6 bg-white/[0.07]" />
              <div className="grid grid-cols-3 gap-1.5 mt-3">
                {[1,2,3].map((n) => (
                  <div key={n} className="h-10 rounded-lg" style={{ background: `${project.accent}15` }} />
                ))}
              </div>
              <div className="h-2 rounded-full w-2/3 bg-white/[0.07]" />
              <div className="h-2 rounded-full w-3/4 bg-white/[0.05]" />
            </div>
          </div>
        </div>

        {/* Content pane */}
        <div className={`sm:w-3/5 p-7 flex flex-col justify-center ${isEven ? "sm:pl-2" : "sm:pr-2"}`}>
          <div className="flex items-center gap-2 mb-3">
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-semibold text-yellow-400 tracking-wide uppercase">Featured Project</span>
          </div>

          <h3
            className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => <TechBadge key={t} label={t} />)}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              <GithubIcon width={15} height={15} /> Code
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow-cyan flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
              >
                <ExternalLink size={12} /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />
    </motion.div>
  );
}

// ─── Regular project card (compact grid) ─────────────────────────────────────

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative glass rounded-2xl border overflow-hidden card-shine flex flex-col h-full"
      style={{ borderColor: `${project.accent}22` }}
    >
      {/* Gradient header bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
        style={{ background: project.accent }}
      />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${project.accent}1a`, border: `1px solid ${project.accent}44` }}
          >
            <div className="w-4 h-4 rounded" style={{ background: `${project.accent}` }} />
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#fff" }}
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon width={17} height={17} />
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="transition-colors"
                style={{ color: project.accent }}
                aria-label="Live demo"
              >
                <ExternalLink size={17} />
              </motion.a>
            )}
          </div>
        </div>

        <h3
          className="text-white font-bold text-base mb-2 group-hover:transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border font-medium"
              style={{
                color: project.accent,
                borderColor: `${project.accent}40`,
                background: `${project.accent}0f`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => <TechBadge key={t} label={t} />)}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs text-slate-500">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />
    </motion.div>
  );
}

// ─── Projects section ─────────────────────────────────────────────────────────

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag>("All");

  const featured  = projects.filter((p) => p.featured);
  const regular   = projects.filter((p) => !p.featured);

  const filteredFeatured = activeFilter === "All"
    ? featured
    : featured.filter((p) => p.tags.includes(activeFilter));

  const filteredRegular = activeFilter === "All"
    ? regular
    : regular.filter((p) => p.tags.includes(activeFilter));

  const totalFiltered = filteredFeatured.length + filteredRegular.length;

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }} />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-12">
          <p
            className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            04. What I&apos;ve Built
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Projects
          </h2>
          <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm">
            {projects.length} projects — fullstack apps, APIs, UI tools, and automation scripts.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-2 mb-14">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mr-2">
            <Filter size={14} />
            <span>Filter:</span>
          </div>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? "text-white border-transparent"
                    : "text-slate-400 glass border-white/10 hover:text-white hover:border-white/20"
                }`}
                style={isActive ? {
                  background: "linear-gradient(135deg, #00f5ff22, #a855f722)",
                  borderColor: "rgba(0,245,255,0.4)",
                  color: "#00f5ff",
                  boxShadow: "0 0 20px rgba(0,245,255,0.15)",
                } : {}}
              >
                {f}
              </motion.button>
            );
          })}

          {/* Count badge */}
          <span className="ml-2 px-3 py-2 rounded-xl glass border border-white/10 text-slate-500 text-sm">
            {totalFiltered} projects
          </span>
        </motion.div>

        {/* No results */}
        <AnimatePresence>
          {totalFiltered === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-slate-500"
            >
              No projects match this filter.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured projects */}
        <AnimatePresence mode="wait">
          {filteredFeatured.length > 0 && (
            <motion.div
              key={`featured-${activeFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 mb-10"
            >
              {filteredFeatured.map((p, i) => (
                <FeaturedCard key={p.id} project={p} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regular grid */}
        <AnimatePresence mode="wait">
          {filteredRegular.length > 0 && (
            <motion.div
              key={`grid-${activeFilter}`}
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence>
                {filteredRegular.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p {...fadeUp(0.3)} className="text-center text-slate-600 text-sm mt-12">
          More projects on{" "}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
        </motion.p>

      </div>
    </section>
  );
}
