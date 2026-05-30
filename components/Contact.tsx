"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeUp, stagger } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="font-mono text-sm uppercase tracking-[0.24em] text-cyan">
          Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-4 font-mono text-4xl font-bold text-warm sm:text-6xl"
        >
          Let&apos;s Build Something
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:harshits0421@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-warm px-6 py-3 font-mono text-sm font-bold text-void transition hover:-translate-y-0.5 hover:bg-cyan hover:shadow-glow"
          >
            <Mail size={17} />
            harshits0421@gmail.com
          </a>
          <a
            href="https://github.com/harshitt2023"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-warm/70 transition hover:border-cyan hover:text-cyan hover:shadow-glow"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit2821/"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-warm/70 transition hover:border-violet hover:text-violet hover:shadow-violet"
          >
            <Linkedin size={19} />
          </a>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-14 font-mono text-xs text-warm/35">
          Harshit Singh · AI/ML Engineer · Generative AI
        </motion.p>
      </motion.div>
    </section>
  );
}
