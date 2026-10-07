"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import {
  ArrowDown,
  FileDown,
  Sparkles,
  Layers,
  Cpu,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  const { personal, education, statistics } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-mesh-radial"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-slate-200 text-xs font-medium backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono-code text-[11px]">Summer & Ongoing</span>
            </div>

            {/* Short Identity Tag */}
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="h-4 w-4" />
              <span>{personal.identityLine}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Building ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                working products.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {personal.supportingCopy}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/[0.12] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="h-4 w-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.08] font-medium text-sm transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.08] font-medium text-sm transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4 text-sky-400" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Education Micro-Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 px-3 py-2 rounded-lg border border-white/[0.05]">
              <GraduationCap className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>
                <strong className="text-slate-200 font-medium">{education.degree}</strong> •{" "}
                {education.university} (CGPA {education.cgpa})
              </span>
            </div>
          </div>

          {/* Right Profile Column with Authentic Image & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-indigo-500/30 via-slate-700/20 to-cyan-500/30 shadow-2xl shadow-indigo-950/50">
                {/* Photo container */}
                <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-900 border border-white/[0.08]">
                  <Image
                    src={personal.photoUrl}
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle inner dark vignette for seamless integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/[0.08]">
                    <p className="text-white font-semibold text-sm leading-tight">{personal.name}</p>
                    <p className="text-xs text-slate-400 leading-normal mt-0.5">
                      B.Tech AI & Data Science • {education.university}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Chip 1: AI Agent Workflows */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/90 border border-indigo-500/30 shadow-xl backdrop-blur-md rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-20">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-tight">LangGraph & GenAI</p>
                  <p className="text-[10px] text-slate-400 font-mono-code leading-tight">Multi-Agent Systems</p>
                </div>
              </div>

              {/* Floating Chip 2: Verified CGPA */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-slate-900/90 border border-emerald-500/30 shadow-xl backdrop-blur-md rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-20">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-tight">CGPA: 9.40 / 10</p>
                  <p className="text-[10px] text-slate-400 leading-tight">Sanjay Ghodawat Univ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Statistics Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-code tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
