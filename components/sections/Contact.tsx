"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Wannisaf19@gmail.com",
    href: "mailto:Wannisaf19@gmail.com",
    color: "#06b6d4",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+66) 080-217-7328",
    href: "tel:+66802177328",
    color: "#6366f1",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chonburi, Thailand",
    href: null,
    color: "#8b5cf6",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:Wannisaf19@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "#070f1f" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
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
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you have a project in mind, a job opportunity, or just want
            to say hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                {href ? (
                  <a
                    href={href}
                    className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-white/[0.12] transition-all duration-300 block"
                  >
                    <div
                      className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${color}18` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium mb-0.5">{label}</p>
                      <p className="text-white font-semibold text-sm">{value}</p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color }}
                    />
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center"
                      style={{ background: `${color}18` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium mb-0.5">{label}</p>
                      <p className="text-white font-semibold text-sm">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(99,102,241,0.08))",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
            >
              <p className="text-slate-300 text-sm mb-3">Prefer a direct reach?</p>
              <a
                href="mailto:Wannisaf19@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}
              >
                <Mail size={15} />
                Send Email Directly
              </a>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder:text-slate-600"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(6,182,212,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")
                  }
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder:text-slate-600"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(6,182,212,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")
                  }
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none transition-all duration-200 placeholder:text-slate-600"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(6,182,212,0.4)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  boxShadow: "0 0 20px rgba(6,182,212,0.2)",
                }}
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="mt-20 text-center text-slate-600 text-xs"
      >
        <div
          className="w-24 h-px mx-auto mb-6"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <p>
          &copy; {new Date().getFullYear()} Wannisa Klomchoho · Built with Next.js &amp; Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
