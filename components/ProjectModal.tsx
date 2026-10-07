"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/icons/SocialIcons";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  Wrench,
  Trophy,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b101c] border border-white/[0.12] shadow-2xl p-6 sm:p-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-white/[0.08]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="border-b border-white/[0.08] pb-6 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accentColor}20`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
              }}
            >
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono-code rounded-full bg-slate-800 text-slate-300 border border-white/[0.06]">
              {project.badge}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-white/[0.1] transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit Live App</span>
              </a>
            )}
          </div>
        </div>

        {/* Case Study Sections */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* 1. Problem & Idea */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-rose-400 font-bold mb-2 text-xs uppercase tracking-wider">
                <AlertCircle className="h-4 w-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2 text-xs uppercase tracking-wider">
                <Lightbulb className="h-4 w-4" />
                <span>The Core Idea</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.idea}
              </p>
            </div>
          </div>

          {/* 2. What I Built */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-white/[0.08]">
            <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2 text-xs uppercase tracking-wider">
              <Cpu className="h-4 w-4" />
              <span>What I Built</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.caseStudy.whatIBuilt}
            </p>
          </div>

          {/* 3. Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Key Features & Functional Highlights</span>
            </h4>
            <ul className="space-y-2">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/30 p-2.5 rounded-lg border border-white/[0.04]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-sky-400" />
              <span>Technologies & Libraries Used</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono-code rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Challenges & Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-orange-400 font-bold mb-2 text-xs uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>Technical Challenges</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                {project.caseStudy.challenges.map((ch, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {ch}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 text-xs uppercase tracking-wider">
                <Trophy className="h-4 w-4" />
                <span>Outcome & Impact</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
