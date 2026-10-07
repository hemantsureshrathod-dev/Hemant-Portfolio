"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  Sparkles,
  Award,
  Terminal,
  Compass,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function About() {
  const { personal, education } = portfolioData;

  const coreFocusAreas = [
    {
      title: "Applied AI & Agentic Systems",
      desc: "Building multi-agent architectures (LangGraph, ChromaDB) with verifiable citations and zero hallucination constraints.",
    },
    {
      title: "Full-Stack Web Engineering",
      desc: "Developing end-to-end applications using React 19, Next.js, Node.js, and MongoDB with clean architecture.",
    },
    {
      title: "Hackathons & Rapid Execution",
      desc: "Transforming ambiguous problem statements into working, demo-ready prototypes within tight constraints.",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Background & Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Passionate second-year engineer dedicated to pragmatic software engineering and applied AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Story & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Engineering with purpose and curiosity</span>
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                <p>{personal.aboutP1}</p>
                <p>{personal.aboutP2}</p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">
                Where I Spend My Time
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {coreFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/30 border border-white/[0.06] hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      <span>{area.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Academic Credential Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-white/[0.1] shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">
                      Formal Education
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{education.location}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono-code font-semibold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {education.cgpa} CGPA
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-base leading-snug">
                    {education.degree}
                  </h4>
                  <p className="text-indigo-300 text-sm font-medium mt-0.5">
                    {education.university}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-white/[0.04] font-mono-code">
                  <span>Timeline: {education.year}</span>
                  <span className="text-slate-300">Graduation: {education.graduation}</span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Relevant Coursework & Focus</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {education.keyAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Student Positioning Note */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-3">
              <Sparkles className="h-4 w-4 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white font-medium">Early-Career Trajectory:</strong> Actively seeking engineering and AI internships where I can contribute to shipping real user-facing software while learning under experienced mentors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
