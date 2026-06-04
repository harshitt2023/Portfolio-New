"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "./motion";

const projects = [
  {
    name: "Pennywise",
    subtitle: "AI Powered Expense Tracker",
    stack: ["Next.js", "Gemini AI", "PostgreSQL"],
    description: "AI-driven financial insights with smart reporting and expense analytics",
    link: "https://pennywise3.vercel.app/sign-in?redirect_url=https%3A%2F%2Fpennywise3.vercel.app%2F"
  },
  {
    name: "MediNow",
    subtitle: "AI Health-tech Platform",
    stack: ["Next.js", "PostgreSQL", "Vonage API"],
    description: "Telemedicine platform with video consultations and appointment booking",
    link: "https://medinow-harshit.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.div variants={fadeUp} className="mb-8">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan">Projects</p>
          <h2 className="mt-4 font-mono text-3xl font-bold text-warm sm:text-4xl">
            Featured builds.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.01 }}
              className="glass glow-border min-h-[360px] rounded-lg bg-noise p-[1px] transition"
            >
              <div className="flex h-full flex-col rounded-lg bg-void/86 p-7">
                <div className="mb-16 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-sm text-cyan">{project.subtitle}</p>
                    <h3 className="mt-3 font-mono text-4xl font-bold text-warm">{project.name}</h3>
                  </div>
                  <span className="h-12 w-12 rounded-full border border-white/10 bg-white/[0.03]" />
                </div>

                <p className="max-w-md text-lg leading-8 text-warm/66">{project.description}</p>

                <div className="mt-auto pt-9">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-warm/66"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan/42 px-5 py-2.5 font-mono text-sm text-cyan transition hover:bg-cyan hover:text-void hover:shadow-glow"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
