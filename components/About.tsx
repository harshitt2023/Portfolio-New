"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

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
            Research taste. Product velocity.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-warm/68">
            I&apos;m an AI/ML engineer who loves turning cutting-edge research into real products.
            From training LLMs to shipping full-stack apps — I build things that think.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glass overflow-hidden rounded-lg shadow-glow">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-warm/42">harshit@portfolio:~</span>
          </div>
          <div className="space-y-4 p-5 font-mono text-sm leading-7 text-warm/72">
            <p><span className="text-cyan">$</span> whoami</p>
            <p className="text-warm">Harshit Singh · AI/ML Engineer</p>
            <p><span className="text-cyan">$</span> focus --now</p>
            <p className="text-violet">RLHF · SFT · LLM Evaluation · Gemini AI</p>
            <p><span className="text-cyan">$</span> ship --with</p>
            <p className="text-warm/80">Next.js · PostgreSQL · REST APIs · Python</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
