"use client";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "ClickNext Co., Ltd.",
    role: "Senior Developer",
    period: "Sep 2024 – Present",
    type: "Full-time",
    current: true,
    color: "#06b6d4",
    bullets: [
      "Plan, design, and develop web applications for various organizations, ensuring alignment with business requirements and system scalability.",
      "Collaborate with cross-functional teams including Business Analysts to gather requirements, define project scope, and deliver high-quality solutions.",
    ],
  },
  {
    company: "VPRO Tech Co., Ltd.",
    role: "Front End Developer",
    period: "Jan 2024 – Aug 2024",
    type: "Outsource",
    current: false,
    color: "#6366f1",
    bullets: [
      "Collaborated with the SSO team to develop a project primarily focusing on frontend development based on client requirements.",
      "Implemented user interface features and ensured alignment with functional specifications.",
      "Identified and resolved defects to improve system performance and user experience.",
    ],
  },
  {
    company: "Mister Fox Co., Ltd.",
    role: "Junior Full Stack Developer",
    period: "Dec 2021 – Jan 2024",
    type: "Full-time",
    current: false,
    color: "#8b5cf6",
    bullets: [
      "Researched and developed processes for gathering business requirements, delivering products for end users and supporting the core team.",
      "Developed and implemented accounting reports, improving visibility of key performance metrics and enabling data-driven decision-making.",
    ],
  },
  {
    company: "Inter Express Logistics Co., Ltd.",
    role: "Web Developer",
    period: "Jul 2020 – Nov 2021",
    type: "Full-time",
    current: false,
    color: "#10b981",
    bullets: [
      "Collaborated with developers to design and build multiple web applications (internal and external): IEMS, InterShip, ISAS, and IEL Service Point systems.",
      "Gathered requirements from users to design and develop responsive web applications; created specifications for new label reports.",
    ],
  },
];

type Exp = (typeof experiences)[number];

function ExperienceCard({ exp, index }: { exp: Exp; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="relative pl-16 sm:pl-20"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-4 sm:left-6 top-5 w-4 h-4 rounded-full -translate-x-1/2 flex items-center justify-center"
        style={{
          background: "#050d1a",
          border: `2px solid ${exp.color}`,
          boxShadow: `0 0 12px ${exp.color}55`,
        }}
      >
        {exp.current && (
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: exp.color }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="glass-card rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300"
        style={{ borderLeft: `3px solid ${exp.color}40` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-white font-bold text-lg">{exp.role}</h3>
              {exp.current && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(6,182,212,0.15)",
                    color: "#06b6d4",
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={13} style={{ color: exp.color }} />
              <span className="text-slate-300 font-medium text-sm">
                {exp.company}
              </span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-xs">{exp.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
            <Calendar size={12} />
            <span>{exp.period}</span>
          </div>
        </div>

        <ul className="space-y-2.5">
          {exp.bullets.map((bullet, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <ChevronRight
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: exp.color }}
              />
              <span className="text-slate-400 text-sm leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #070f1f 0%, #050d1a 100%)",
      }}
    >
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6"
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
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
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white py-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
