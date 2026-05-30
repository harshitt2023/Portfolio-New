"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const groups = [
  { label: "AI/ML", skills: ["Python", "Scikit-learn", "Prompt Engineering", "RLHF", "LLM Evaluation", "Gemini AI"] },
  { label: "Web Dev", skills: ["Next.js", "React", "REST APIs"] },
  { label: "Data", skills: ["SQL", "NumPy", "Pandas", "PostgreSQL"] },
  { label: "Tools", skills: ["Git"] }
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"
      >
        <motion.div variants={fadeUp}>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan">Skills</p>
          <h2 className="mt-4 font-mono text-3xl font-bold text-warm sm:text-4xl">
            The working stack.
          </h2>
          <p className="mt-5 text-warm/58">
            B.Tech CSE (AI & ML) — NIET, Greater Noida | 2022-2026
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label} className="glass rounded-lg p-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-violet">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-xs text-warm/72 transition hover:border-cyan hover:text-cyan hover:shadow-glow"
                    animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                    transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
