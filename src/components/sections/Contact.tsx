"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin,
  Send, CheckCircle2, AlertCircle, Loader2, MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

// ─── helpers ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

// ─── Info card ────────────────────────────────────────────────────────────────

function ContactInfoCard({
  icon: Icon, title, value, href, color, delay,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  color: string;
  delay: number;
}) {
  const ref    = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="glass glass-hover rounded-2xl p-5 border border-white/10 flex items-center gap-4 group"
      style={{ borderColor: `${color}22` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}1a`, border: `1px solid ${color}44` }}
      >
        <Icon size={19} style={{ color }} />
      </div>
      <div>
        <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{title}</p>
        <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-200">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

// ─── Social link ──────────────────────────────────────────────────────────────

function SocialLink({
  icon: Icon, href, label, color,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 glass rounded-xl flex items-center justify-center border border-white/10 transition-all duration-200"
      style={{}}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}66`;
        (e.currentTarget as HTMLElement).style.color = color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "";
        (e.currentTarget as HTMLElement).style.color = "";
      }}
    >
      <Icon size={17} className="text-slate-400" />
    </motion.a>
  );
}

// ─── Form field ───────────────────────────────────────────────────────────────

function Field({
  label, id, type = "text", placeholder, value, onChange, required, rows,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? "textarea" : "input";

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-slate-400 text-sm font-medium">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <div
        className="relative rounded-xl border transition-all duration-200 overflow-hidden"
        style={{
          borderColor: focused ? "rgba(0,245,255,0.45)" : "rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.03)",
          boxShadow: focused ? "0 0 0 3px rgba(0,245,255,0.07)" : "none",
        }}
      >
        <Tag
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange((e.target as HTMLInputElement | HTMLTextAreaElement).value)}
          className="w-full bg-transparent px-4 py-3 text-white text-sm placeholder-slate-600 outline-none resize-none"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>
    </div>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate async send — replace with your EmailJS / Resend / API call
    await new Promise((r) => setTimeout(r, 1800));

    // For demo: always succeed. Swap with real error handling.
    setStatus("success");
    setName(""); setEmail(""); setSubject(""); setMessage("");

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00f5ff 0%, #a855f7 60%, transparent 100%)" }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p
            className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fira-code)" }}
          >
            05. Get In Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white section-title inline-block"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Contact
          </h2>
          <p className="text-slate-400 mt-5 max-w-lg mx-auto">
            I&apos;m currently open to new opportunities. Whether it&apos;s a project, a job offer,
            or just a chat — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: info + socials ── */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-5">

            {/* Availability chip */}
            <div className="glass rounded-2xl p-5 border border-white/10 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-glow" />
                <span className="text-green-400 text-sm font-semibold">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Looking for fullstack, backend, or automation roles. Open to remote, hybrid, and on-site.
              </p>
            </div>

            <ContactInfoCard
              icon={Mail}
              title="Primary Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
              color="#00f5ff"
              delay={0.15}
            />
            <ContactInfoCard
              icon={Mail}
              title="Secondary Email"
              value={personal.email2!}
              href={`mailto:${personal.email2}`}
              color="#a855f7"
              delay={0.18}
            />
            <ContactInfoCard
              icon={MapPin}
              title="Location"
              value={personal.location}
              href="#"
              color="#4ade80"
              delay={0.22}
            />
            <ContactInfoCard
              icon={MessageSquare}
              title="Response time"
              value="Usually within 24 hours"
              href="#"
              color="#f472b6"
              delay={0.25}
            />

            <div className="pt-3">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                <SocialLink icon={GithubIcon}   href={personal.github}   label="GitHub"   color="#00f5ff" />
                <SocialLink icon={LinkedinIcon} href={personal.linkedin} label="LinkedIn" color="#a855f7" />
              </div>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h3
                className="text-white font-bold text-xl mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"    id="name"
                    placeholder="Your name"
                    value={name}    onChange={setName}   required
                  />
                  <Field
                    label="Email"   id="email"  type="email"
                    placeholder="your@email.com"
                    value={email}   onChange={setEmail}  required
                  />
                </div>

                <Field
                  label="Subject"  id="subject"
                  placeholder="What's this about?"
                  value={subject}  onChange={setSubject} required
                />

                <Field
                  label="Message"  id="message"
                  placeholder="Tell me about your project, role, or just say hi..."
                  value={message}  onChange={setMessage} required
                  rows={5}
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 disabled:cursor-not-allowed"
                  style={{
                    background:
                      status === "success"
                        ? "linear-gradient(135deg, #4ade8033, #22c55e33)"
                        : status === "error"
                        ? "linear-gradient(135deg, #f4717233, #ef444433)"
                        : "linear-gradient(135deg, #a855f7, #6366f1)",
                    color:
                      status === "success" ? "#4ade80"
                      : status === "error"  ? "#f47172"
                      : "#fff",
                    boxShadow:
                      status === "idle"
                        ? "0 0 20px rgba(168,85,247,0.3)"
                        : "none",
                    border:
                      status === "success" ? "1px solid #4ade8044"
                      : status === "error"  ? "1px solid #f4717244"
                      : "none",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2">
                        <Send size={15} /> Send Message
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2">
                        <Loader2 size={15} className="animate-spin" /> Sending…
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span key="success" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2">
                        <CheckCircle2 size={15} /> Message Sent!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2">
                        <AlertCircle size={15} /> Failed — Try Again
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-slate-600 text-xs text-center">
                  I typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
