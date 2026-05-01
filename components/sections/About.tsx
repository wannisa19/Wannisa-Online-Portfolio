"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code2, Users, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Code2, value: "4", label: "Companies" },
  { icon: Users, value: "10+", label: "Projects Delivered" },
  { icon: Zap, value: "2", label: "Tech Stacks" },
];

const hidden = { opacity: 0, y: 30 };
const visible = { opacity: 1, y: 0 };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const anim = (delay: number) => ({
    initial: hidden,
    animate: inView ? visible : hidden,
    transition: { delay, duration: 0.5 },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #050d1a 0%, #070f1f 100%)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
        style={{ background: "linear-gradient(180deg, transparent, #06b6d4)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <motion.div {...anim(0)} className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "#06b6d4" }}
          >
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.p {...anim(0.1)} className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-white font-semibold">Full Stack Developer</span>{" "}
              with approximately{" "}
              <span className="text-cyan-400 font-semibold">5 years</span> of
              hands-on experience building web applications and business systems
              across diverse industries.
            </motion.p>

            <motion.p {...anim(0.2)} className="text-slate-400 leading-relaxed">
              Throughout my career I&apos;ve worked in logistics, accounting, HR
              management, and enterprise SaaS — collaborating closely with Business
              Analysts to translate complex requirements into clean, maintainable
              code. I thrive in cross-functional teams and take ownership of
              delivering high-quality solutions end-to-end.
            </motion.p>

            <motion.p {...anim(0.3)} className="text-slate-400 leading-relaxed">
              My tech stack spans both frontend and backend — from{" "}
              <span className="text-slate-200">
                Vue.js, Nuxt.js, React.js, Next.js
              </span>{" "}
              on the client side to{" "}
              <span className="text-slate-200">ASP.NET Core MVC and C# .NET</span>{" "}
              on the server, with SQL databases in between. Currently serving as{" "}
              <span className="text-cyan-400 font-medium">Senior Developer</span> at
              ClickNext Co., Ltd.
            </motion.p>

            <motion.div
              {...anim(0.4)}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="mailto:Wannisaf19@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}
              >
                Contact Me
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                My Experience
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                {...anim(0.15 + i * 0.1)}
                className="glass-card rounded-2xl p-6 text-center group hover:border-cyan-400/20 transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(6,182,212,0.1)" }}
                >
                  <Icon size={22} style={{ color: "#06b6d4" }} />
                </div>
                <div
                  className="text-3xl font-extrabold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
