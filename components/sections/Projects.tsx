"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Leaf, Bug, Users, Truck, Ship, MapPin } from "lucide-react";

const projects = [
  {
    icon: Leaf,
    title: "Project AOT — Carbon Footprint",
    company: "ClickNext Co., Ltd.",
    description:
      "Contributed to the development of the Carbon Footprint module. Implemented features to support environmental data tracking and reporting in compliance with project specifications.",
    tags: ["Environmental Data", "Reporting", "Web App"],
    color: "#10b981",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    icon: Bug,
    title: "Project COJ — System Stability",
    company: "VPRO Tech Co., Ltd.",
    description:
      "Resolved system defects and issues to improve application stability and performance. Performed debugging, troubleshooting, and system enhancements based on user feedback.",
    tags: ["Debugging", "Performance", "Frontend"],
    color: "#6366f1",
    gradient: "from-indigo-500/10 to-transparent",
  },
  {
    icon: Users,
    title: "Project FAD HRM — Phase 3",
    company: "Mister Fox Co., Ltd.",
    description:
      "Led the development team as Developer Lead in Phase 3 of an HRM system. Designed and implemented features including database design and application development, reviewed and assigned tasks to team members.",
    tags: ["HRM", "Team Lead", "Full Stack", "Database Design"],
    color: "#8b5cf6",
    gradient: "from-violet-500/10 to-transparent",
    featured: true,
  },
  {
    icon: Truck,
    title: "IEMS System",
    company: "Inter Express Logistics Co., Ltd.",
    description:
      "Designed and developed an internal/external management system for Inter Express Logistics. Built responsive interfaces and gathered requirements from business users.",
    tags: ["Logistics", "Web App", "Responsive"],
    color: "#06b6d4",
    gradient: "from-cyan-500/10 to-transparent",
  },
  {
    icon: Ship,
    title: "InterShip System",
    company: "Inter Express Logistics Co., Ltd.",
    description:
      "Developed a shipment tracking and management web application for logistics operations. Implemented requirement-driven features with focus on user experience.",
    tags: ["Shipping", "Tracking", "Web App"],
    color: "#f59e0b",
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    icon: MapPin,
    title: "IEL Service Point System",
    company: "Inter Express Logistics Co., Ltd.",
    description:
      "Created the service point management system enabling branch operations and customer interactions. Designed and built label report specifications for the logistics workflow.",
    tags: ["Service Points", "Reports", "Operations"],
    color: "#ec4899",
    gradient: "from-pink-500/10 to-transparent",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      className={`glass-card rounded-2xl p-6 flex flex-col group hover:border-white/[0.12] transition-all duration-300 relative overflow-hidden ${
        project.featured ? "ring-1 ring-violet-500/20" : ""
      }`}
    >
      {project.featured && (
        <div
          className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{ background: "rgba(139,92,246,0.2)", color: "#8b5cf6" }}
        >
          Featured
        </div>
      )}

      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${project.color}18` }}
        >
          <Icon size={22} style={{ color: project.color }} />
        </div>

        <h3 className="text-white font-bold text-base mb-1 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.color }}>
          {project.company}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #050d1a 0%, #070f1f 100%)" }}
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
            What I&apos;ve Built
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
            A selection of professional projects I have contributed to across
            various industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
