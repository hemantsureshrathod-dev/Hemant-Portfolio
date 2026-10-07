"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "@/components/icons/SocialIcons";
import {
  ExternalLink,
  BookOpen,
  FolderGit2,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>Verified Repositories & Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Practical software systems, multi-agent AI architectures, and responsive full-stack applications.
            </p>
          </div>

          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-950/30 group"
            >
              {/* Card Top Banner / Micro Header */}
              <div className="p-6 border-b border-white/[0.06] bg-slate-950/40 flex items-center justify-between">
                <span
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: `${project.accentColor}18`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  {project.category}
                </span>

                <span className="text-[11px] font-mono-code text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-400/90 font-medium mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5">
                      {project.keyHighlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[11px] font-mono-code px-1.5 py-0.5 rounded text-slate-400">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] px-3 py-2 rounded-xl transition-colors border border-white/[0.08]"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                      <span>Case Study</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/[0.06]"
                        aria-label={`GitHub Repository for ${project.title}`}
                        title="GitHub Repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
                          aria-label={`Live Demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <span>Live</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
