"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { ArrowDown, BookSearch, MapPin } from "lucide-react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050d1a" }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#06b6d4"
          speed={1.2}
        />
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                padding: "3px",
                borderRadius: "50%",
                filter: "blur(8px)",
                opacity: 0.7,
              }}
            />
            <div
              className="relative rounded-full p-[3px]"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
              }}
            >
              <div className="rounded-full overflow-hidden w-36 h-36 sm:w-44 sm:h-44">
                <Image
                  src={`${basePath}/profile.jpg`}
                  alt="Wannisa Klomchoho"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-medium"
          style={{
            background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.3)",
            color: "#06b6d4",
            marginTop: "1rem",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight"
          style={{ textShadow: "0 0 80px rgba(6,182,212,0.15)" }}
        >
          Wannisa Klomchoho
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5"
        >
          <span className="gradient-text">Full Stack Developer</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          ~5 years of hands-on experience crafting web applications and business
          systems — delivering high-quality, scalable solutions.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10"
          style={{ marginTop: "10px" }}
        >
          <MapPin size={16} />
          <span>Chonburi, Thailand</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #6366f1)",
              boxShadow: "0 0 30px rgba(6,182,212,0.25)",
              marginTop: "1rem",
            }}
          >
            View My Work
          </button>
          <a
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              border: "1px solid rgba(6,182,212,0.4)",
              background: "rgba(6,182,212,0.05)",
              marginTop: "1rem",
            }}
          >
            <BookSearch size={16} />
            View My Skills
          </a>
          {/* <a
            href="mailto:Wannisaf19@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              border: "1px solid rgba(6,182,212,0.4)",
              background: "rgba(6,182,212,0.05)",
              marginTop: "1rem",
            }}
          >
            <Mail size={16} />
            Get In Touch
          </a> */}
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {[
            "Vue.js",
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "C# .NET",
            "MVC",
            "SQL",
          ].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                marginTop: "1rem",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
