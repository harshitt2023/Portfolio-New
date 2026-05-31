"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const focusAreas = [
  "Machine Learning",
  "Generative AI",
  "Modern Web Apps",
  "User-focused Products",
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div variants={fadeUp}>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan">About</p>
          <h2 className="mt-4 font-mono text-3xl font-bold text-warm sm:text-4xl">
            Building practical AI with a human touch.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-warm/68">
            AI/ML Engineer with experience in Machine Learning, Generative AI, and modern web
            technologies. Passionate about developing innovative AI solutions and turning ideas
            into practical, user-focused applications.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glass rounded-lg p-6 shadow-glow">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan/80">Profile</p>
            <h3 className="mt-2 text-2xl font-semibold text-warm">Harshit Singh</h3>
            <p className="mt-2 leading-7 text-warm/66">
              I enjoy working where AI models, clean interfaces, and real user needs meet. My work
              is centered on building useful tools, experimenting with generative systems, and
              making technical ideas feel approachable.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-sm font-medium text-warm/78">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
