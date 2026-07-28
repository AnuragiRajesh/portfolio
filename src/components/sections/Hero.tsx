"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Sparkles, ChevronRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal, stats } from "@/lib/data";

// ─── Particle canvas ──────────────────────────────────────────────────────────

interface Particle { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string; }

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const COLORS = ["#00f5ff", "#a855f7", "#f472b6", "#4ade80", "#6366f1"];
    let particles: Particle[] = [], animId: number, W = 0, H = 0;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    const spawn = () => { particles = Array.from({ length: Math.floor((W * H) / 14000) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, size: Math.random() * 1.8 + 0.4, alpha: Math.random() * 0.4 + 0.08, color: COLORS[Math.floor(Math.random() * COLORS.length)] })); };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 110) { ctx.beginPath(); ctx.strokeStyle = `rgba(0,245,255,${0.05 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); } }
      for (const p of particles) { p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0"); ctx.fill(); }
      animId = requestAnimationFrame(draw);
    };
    resize(); spawn(); draw();
    const onResize = () => { resize(); spawn(); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />;
}

// ─── Typewriter ───────────────────────────────────────────────────────────────

function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => { const t = setInterval(() => setBlink(b => !b), 530); return () => clearInterval(t); }, []);
  useEffect(() => {
    const word = words[idx]; let t: ReturnType<typeof setTimeout>;
    if (!del && sub < word.length) t = setTimeout(() => setSub(s => s + 1), 75);
    else if (!del && sub === word.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && sub > 0) t = setTimeout(() => setSub(s => s - 1), 40);
    else if (del && sub === 0) { setDel(false); setIdx(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [sub, del, idx, words]);
  return (
    <span className="gradient-text-cyan" style={{ fontFamily: "var(--font-space-grotesk)" }}>
      {words[idx].slice(0, sub)}
      <span className="inline-block w-0.5 h-7 ml-1 bg-cyan-400 align-middle rounded"
        style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }} />
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const socials = [
  { icon: GithubIcon,   href: personal.github,              label: "GitHub" },
  { icon: LinkedinIcon, href: personal.linkedin,            label: "LinkedIn" },
  { icon: Mail,         href: `mailto:${personal.email}`,   label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid mesh-gradient pt-20"
    >
      <ParticleCanvas />
      {/* spotlight */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,245,255,0.07) 0%, rgba(168,85,247,0.05) 50%, transparent 80%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── LEFT: all text ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 border border-cyan-400/20 bg-cyan-400/[0.06]"
            >
              <Sparkles size={13} className="text-cyan-400" />
              <span className="text-slate-300">A</span>
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
            </motion.div> */}

            {/* greeting */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-slate-500 text-sm mb-2" style={{ fontFamily: "var(--font-fira-code)" }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white mb-4 leading-[1.05]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {personal.name}
            </motion.h1>

            {/* typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
              className="text-xl sm:text-2xl font-semibold mb-4 h-9"
            >
              <Typewriter words={personal.taglines} />
            </motion.div>

            {/* location */}
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }}
              className="flex items-center gap-1.5 justify-center lg:justify-start text-slate-500 text-sm mb-7"
            >
              <MapPin size={13} className="text-cyan-400 flex-shrink-0" />
              {personal.location}
            </motion.p>

            {/* bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-slate-400 leading-relaxed max-w-lg mb-9 mx-auto lg:mx-0"
            >
              Fullstack developer and CS student — I build responsive UIs, REST APIs, and automation
              tools. Currently studying Information Sciences at Azim Premji University while working
              part-time as a Fullstack Developer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="btn-glow-purple flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
                View Projects <ChevronRight size={15} />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="btn-glow-cyan flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
                <Mail size={15} /> Get In Touch
              </motion.a>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-12"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400
                             hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40
                             bg-white/[0.04] transition-colors duration-200">
                  <Icon width={17} height={17} />
                </motion.a>
              ))}
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.63 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center px-3 py-4 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
                  <div className="text-2xl font-black gradient-text-cyan mb-0.5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex-shrink-0"
          >
            <div className="relative">
              {/* corner glow accents */}
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none"
                style={{ background: "#00f5ff" }} />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ background: "#a855f7" }} />
              {/* glowing border frame */}
              <div className="absolute -inset-[3px] rounded-2xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #00f5ff66, #a855f766, #f472b644)", borderRadius: "18px" }} />
              {/* photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[26rem] rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <Image src={personal.avatar} alt={personal.name} fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top" priority />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={15} className="text-slate-600" />
        </motion.div>
      </motion.div>


    </section>
  );
}
