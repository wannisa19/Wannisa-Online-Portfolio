"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Star, BookOpen, Award } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Computer Science Focus",
    desc: "Core CS fundamentals: algorithms, data structures, software engineering.",
    color: "#06b6d4",
  },
  {
    icon: Award,
    title: "GPA 3.15 / 4.00",
    desc: "Consistent academic performance throughout the 4-year program.",
    color: "#6366f1",
  },
  {
    icon: Star,
    title: "Thammasat University",
    desc: "One of Thailand's top-ranked universities, Faculty of Science & Technology.",
    color: "#8b5cf6",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 relative"
      style={{ background: "#070f1f" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "#06b6d4" }}
          >
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
            style={{
              border: "1px solid rgba(6,182,212,0.2)",
              boxShadow: "0 0 40px rgba(6,182,212,0.08)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, #06b6d4, transparent)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(6,182,212,0.12)" }}
              >
                <GraduationCap size={26} style={{ color: "#06b6d4" }} />
              </div>

              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: "rgba(6,182,212,0.1)",
                  color: "#06b6d4",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                2016 – 2020
              </div>

              <h3 className="text-white text-xl font-bold mb-1">
                Bachelor of Science
              </h3>
              <p className="text-cyan-400 font-semibold mb-1">Computer Science</p>
              <p className="text-slate-400 text-sm mb-4">
                Faculty of Science and Technology
              </p>
              <p className="text-slate-300 font-medium mb-4">
                Thammasat University
              </p>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                <Star size={14} style={{ color: "#6366f1" }} />
                <span className="text-slate-300 text-sm font-semibold">
                  GPA: 3.15 / 4.00
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-white/[0.12] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Certification placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass-card rounded-xl p-5"
              style={{ border: "1px dashed rgba(255,255,255,0.08)" }}
            >
              <p className="text-slate-500 text-xs text-center">
                Continuously learning — currently exploring cloud architecture &amp; advanced TypeScript patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
