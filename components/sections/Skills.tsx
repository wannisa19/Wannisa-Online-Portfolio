"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Palette,
  Code,
  Layers,
} from "lucide-react";

const skillGroups = [
  {
    icon: Globe,
    label: "Frontend",
    color: "#06b6d4",
    skills: [
      { name: "Vue.js", level: 92 },
      { name: "Nuxt.js", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    icon: Server,
    label: "Backend",
    color: "#6366f1",
    skills: [
      { name: "ASP.NET Core MVC", level: 88 },
      { name: "C# .NET", level: 85 },
    ],
  },
  {
    icon: Code,
    label: "Languages",
    color: "#8b5cf6",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 82 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    icon: Database,
    label: "Databases",
    color: "#10b981",
    skills: [
      { name: "MSSQL", level: 82 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    icon: Palette,
    label: "UI / Design Tools",
    color: "#f59e0b",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Ant Design", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    icon: Layers,
    label: "Practices",
    color: "#ec4899",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Requirements Analysis", level: 85 },
      { name: "Team Collaboration", level: 92 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative"
      style={{ background: "#070f1f" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
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
            What I Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ icon: Icon, label, color, skills }, groupIdx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: groupIdx * 0.08, duration: 0.5, ease: "easeOut" }}
              className="glass-card rounded-2xl p-6 group hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="text-white font-semibold">{label}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={color}
                    delay={groupIdx * 0.08 + skillIdx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Git", "REST APIs", "Agile", "MVC Pattern", "Code Review",
              "Database Design", "UI/UX Principles", "Cross-browser Compatibility",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
