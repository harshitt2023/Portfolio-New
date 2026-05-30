"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeUp, stagger } from "./motion";

const roles = ["LLM Engineer", "AI Builder", "Generative AI Dev", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const role = roles[roleIndex];
    let charIndex = 0;
    const typeTimer = window.setInterval(() => {
      setTyped(role.slice(0, charIndex + 1));
      charIndex += 1;
      if (charIndex === role.length) {
        window.clearInterval(typeTimer);
        window.setTimeout(() => {
          setRoleIndex((current) => (current + 1) % roles.length);
        }, 1200);
      }
    }, 62);

    return () => window.clearInterval(typeTimer);
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-mesh bg-[length:100%_100%,100%_100%,44px_44px,44px_44px] px-6 py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.24),#080c14_96%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan/70 shadow-glow"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${12 + ((index * 29) % 76)}%`
            }}
            animate={{ y: [-10, 14, -10], opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: index * 0.12 }}
          />
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div>
          <motion.p variants={fadeUp} className="mb-5 font-mono text-sm uppercase tracking-[0.28em] text-cyan">
            I build intelligent systems with AI
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-mono text-5xl font-bold leading-[1.02] text-warm sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">Harshit</span>
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-6 h-10 font-mono text-xl text-warm/78 sm:text-2xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-2 translate-y-1 bg-cyan" />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-8 text-warm/64">
            LLM Engineer · Generative AI · Full-Stack
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-mono text-sm font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-warm"
            >
              See My Work <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/16 px-6 py-3 font-mono text-sm font-bold text-warm transition hover:-translate-y-0.5 hover:border-violet hover:text-violet hover:shadow-violet"
            >
              Get In Touch <Mail size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative mx-auto aspect-square w-full max-w-[420px]">
          <div className="absolute inset-0 animate-pulseRing rounded-[34%] border border-cyan/50 bg-cyan/5" />
          <div className="absolute inset-6 rounded-[34%] p-[1px]">
            <motion.div
              className="absolute inset-0 rounded-[34%] bg-gradient-to-br from-cyan via-violet to-cyan"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[34%] bg-void">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent)] opacity-40" />
              <div className="absolute inset-x-0 top-0 z-20 h-24 animate-scan bg-gradient-to-b from-cyan/0 via-cyan/14 to-cyan/0" />
              {/* Replace src="/photo.png" with your image */}
              <Image
                src="/photo.png"
                alt="Harshit Singh"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-3 left-7 rounded-full border border-white/10 bg-void/80 px-4 py-2 font-mono text-xs text-cyan backdrop-blur">
            post-training // gen-ai
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 p-3 text-warm/60 transition hover:border-cyan hover:text-cyan"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
