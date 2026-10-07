"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { FileDown, Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a10] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-1">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Code2 className="h-4 w-4" />
              </span>
              <span>
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              B.Tech Artificial Intelligence & Data Science • Sanjay Ghodawat University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] hover:text-white hover:border-indigo-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] hover:text-white hover:border-indigo-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4 text-sky-400" />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] hover:text-white hover:border-indigo-500/40 transition-colors"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileDown className="h-4 w-4 text-indigo-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.06] hover:text-white hover:border-indigo-500/40 transition-colors ml-2"
              aria-label="Scroll to top of page"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© 2026 Hemant Suresh Rathod. All rights reserved.</p>
          <p className="font-mono-code text-slate-400">
            Truthful, defensible engineering portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
