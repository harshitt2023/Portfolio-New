"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3 shadow-glow">
        <a href="#home" className="font-mono text-sm tracking-[0.2em] text-warm">
          HS
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 text-sm text-warm/68 transition hover:text-cyan"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-warm/20 transition group-hover:bg-cyan group-hover:shadow-glow" />
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="mailto:harshits0421@gmail.com"
            aria-label="Email Harshit"
            className="rounded-full border border-white/10 p-2 text-warm/70 transition hover:border-cyan/60 hover:text-cyan hover:shadow-glow"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/harshitt2023"
            aria-label="Harshit on GitHub"
            className="rounded-full border border-white/10 p-2 text-warm/70 transition hover:border-cyan/60 hover:text-cyan hover:shadow-glow"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit2821/"
            aria-label="Harshit on LinkedIn"
            className="rounded-full border border-white/10 p-2 text-warm/70 transition hover:border-violet/70 hover:text-violet hover:shadow-violet"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
