"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from "lucide-react";
import { experience, education } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ─── Tech pill ────────────────────────────────────────────────────────────────

function TechPill({ tech, color }: { tech: string; color: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg text-xs font-medium border"
      style={{ color, borderColor: `${color}40`, background: `${color}0f`, fontFamily: "var(--font-fira-code)" }}>
      {tech}
    </span>
  );
}

// ─── Timeline progress line ───────────────────────────────────────────────────

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/[0.06] overflow-hidden">
      <motion.div className="w-full origin-top"
        style={{ height, background: "linear-gradient(180deg, #00f5ff, #a855f7, #f472b6)" }} />
    </div>
  );
}

function TimelineDot({ color, index }: { color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
      className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#030712] z-10"
      style={{ background: color, boxShadow: `0 0 12px ${color}88` }} />
  );
}

// ─── Desktop experience card ──────────────────────────────────────────────────

function ExperienceCard({ item, index, side }: { item: typeof experience[number]; index: number; side: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = side === "left";

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`relative flex items-start gap-6 w-full ${isLeft ? "flex-row-reverse text-right" : "flex-row"}`}
    >
      <div className="flex-1 rounded-2xl p-6 border card-shine group bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300"
        style={{ borderColor: `${item.color}25` }}>

        {/* Header */}
        <div className={`flex items-start gap-3 mb-3 ${isLeft ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${item.color}18`, border: `1px solid ${item.color}44` }}>
            {item.type === "internship"
              ? <GraduationCap size={17} style={{ color: item.color }} />
              : <Briefcase size={17} style={{ color: item.color }} />}
          </div>
          <div className={isLeft ? "text-right" : ""}>
            <h3 className="text-white font-bold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {item.role}
            </h3>
            <p className="font-semibold text-sm mt-0.5" style={{ color: item.color }}>{item.company}</p>
          </div>
        </div>

        {/* Meta */}
        <div className={`flex flex-wrap gap-x-4 gap-y-1 mb-3 ${isLeft ? "justify-end" : ""}`}>
          <span className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Calendar size={11} />{item.period}
          </span>
          <span className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin size={11} />{item.location}
          </span>
          <span className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}33` }}>
            {item.duration}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>

        <ul className={`space-y-1.5 mb-4 ${isLeft ? "" : ""}`}>
          {item.highlights.map((h) => (
            <li key={h} className={`flex items-start gap-2 text-slate-300 text-sm ${isLeft ? "flex-row-reverse" : ""}`}>
              <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : ""}`}>
          {item.tech.map((t) => <TechPill key={t} tech={t} color={item.color} />)}
        </div>

        <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
      </div>
      <div className="w-6 flex-shrink-0" />
    </motion.div>
  );
}

// ─── Mobile card ──────────────────────────────────────────────────────────────

function MobileCard({ item, index, isLast }: { item: typeof experience[number]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative pl-9"
    >
      {!isLast && (
        <div className="absolute left-3.5 top-8 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, ${item.color}55, transparent)` }} />
      )}
      <div className="absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-[#030712] flex items-center justify-center"
        style={{ background: item.color, boxShadow: `0 0 10px ${item.color}77` }}>
        {item.type === "internship"
          ? <GraduationCap size={12} className="text-white" />
          : <Briefcase size={12} className="text-white" />}
      </div>

      <div className="rounded-2xl p-5 border mb-6 card-shine group bg-white/[0.03]"
        style={{ borderColor: `${item.color}25` }}>
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <div>
            <h3 className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item.role}</h3>
            <p className="font-semibold text-sm" style={{ color: item.color }}>{item.company}</p>
          </div>
          <span className="px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
            style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}33` }}>
            {item.duration}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          <span className="flex items-center gap-1 text-slate-500 text-xs"><Calendar size={10} />{item.period}</span>
          <span className="flex items-center gap-1 text-slate-500 text-xs"><MapPin size={10} />{item.location}</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
        <ul className="space-y-1.5 mb-3">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-slate-300 text-sm">
              <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => <TechPill key={t} tech={t} color={item.color} />)}
        </div>
        <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
      </div>
    </motion.div>
  );
}

// ─── Education card ───────────────────────────────────────────────────────────

function EducationCard({ item, index }: { item: typeof education[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="rounded-2xl p-6 border bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 group card-shine"
      style={{ borderColor: `${item.color}25` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}44` }}>
          <BookOpen size={17} style={{ color: item.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold leading-tight mb-0.5" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {item.degree}
          </h3>
          <p className="font-semibold text-sm mb-2" style={{ color: item.color }}>{item.institution}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            <span className="flex items-center gap-1.5 text-slate-500 text-xs"><Calendar size={11} />{item.period}</span>
            <span className="flex items-center gap-1.5 text-slate-500 text-xs"><MapPin size={11} />{item.location}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f472b6, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Work Experience ── */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-pink-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fira-code)" }}>03. Where I&apos;ve Worked</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>Experience</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Part-time roles and internships built alongside full-time studies.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative mb-24">
          <TimelineLine />
          <div className="space-y-14">
            {experience.map((item, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              return (
                <div key={item.id} className="relative grid grid-cols-2 gap-0">
                  <div className={`pr-12 ${side === "left" ? "" : "invisible"}`}>
                    {side === "left" && <ExperienceCard item={item} index={i} side="left" />}
                  </div>
                  <TimelineDot color={item.color} index={i} />
                  <div className={`pl-12 ${side === "right" ? "" : "invisible"}`}>
                    {side === "right" && <ExperienceCard item={item} index={i} side="right" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden mb-20">
          {experience.map((item, i) => (
            <MobileCard key={item.id} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>

        {/* ── Education ── */}
        <motion.div {...fadeUp()} className="text-center mb-12">
          <p className="text-green-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fira-code)" }}>04. Where I&apos;ve Studied</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}>Education</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
