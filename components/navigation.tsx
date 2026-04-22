"use client";

import { Github } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#companies", label: "Companies" },
  { href: "#achievements", label: "Achievements" },
  { href: "#hobbies", label: "Hobbies" },
];

function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8.5 9.5c.828 0 1.5.895 1.5 2s-.672 2-1.5 2S7 12.605 7 11.5s.672-2 1.5-2zm7 0c.828 0 1.5.895 1.5 2s-.672 2-1.5 2-1.5-.895-1.5-2 .672-2 1.5-2zm-7.75 6.5c1.25 2 3.5 3 4.25 3s3-1 4.25-3c.25-.4-.25-.75-.5-.5-1.25 1.25-2.75 1.75-3.75 1.75S9.75 17.25 8.5 16c-.25-.25-.75.1-.5.5z" />
    </svg>
  );
}

function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.586 2.014h-15.17c-1.327 0-2.403 1.08-2.403 2.412v15.148c0 1.332 1.076 2.412 2.403 2.412h15.17c1.327 0 2.403-1.08 2.403-2.412V4.426c0-1.332-1.076-2.412-2.403-2.412zM9.853 17.638h-2.98V8.52h2.98v9.118zm7.24 0h-2.98v-3.19c0-1.33-.93-1.77-1.26-1.77-.33 0-1.4.22-1.4 1.77v3.19h-2.98v-9.118h2.98v1.33c.44-.67 1.33-1.33 2.66-1.33 1.33 0 2.98.67 2.98 3.55v5.568z" />
    </svg>
  );
}

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-lg font-bold text-zinc-100 tracking-tight">
            EH
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              aria-label="HuggingFace"
            >
              <HuggingFaceIcon className="w-5 h-5" />
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              aria-label="ResearchGate"
            >
              <ResearchGateIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
