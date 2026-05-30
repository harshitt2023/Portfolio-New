"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const experiences = [
  {
    company: "Ethara.AI",
    role: "LLM Post-Training Intern",
    date: "Feb-May 2026",
    description: "Worked on RLHF, SFT, prompt evaluation and LLM post-training pipelines"
  },
  {
    company: "ScholarRank AI",
    role: "AIML Intern",
    date: "May-Aug 2025",
    description: "Built ML workflows with Python & Scikit-learn for educational AI systems"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.div variants={fadeUp} className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan">Experience</p>
            <h2 className="mt-4 font-mono text-3xl font-bold text-warm sm:text-4xl">
              LLMs, workflows, shipped systems.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <motion.article
              key={item.company}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="glass glow-border rounded-lg border-l-2 border-l-cyan p-6 transition hover:shadow-glow"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-2xl font-bold text-warm">{item.company}</h3>
                  <p className="mt-2 text-warm/58">{item.role}</p>
                </div>
                <span className="shrink-0 rounded-full border border-cyan/28 bg-cyan/8 px-3 py-1 font-mono text-xs text-cyan">
                  {item.date}
                </span>
              </div>
              <p className="leading-7 text-warm/68">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
