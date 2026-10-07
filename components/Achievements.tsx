"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Trophy,
  ExternalLink,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Achievements() {
  const { hackathons } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="h-3.5 w-3.5" />
            <span>Competitive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hackathons & Milestones
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Verified competitive buildathon and hackathon participation demonstrating rapid prototyping and collaborative problem solving.
          </p>
        </div>

        {/* Milestones Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-mono-code font-semibold rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                    <Calendar className="h-3 w-3 text-slate-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mt-1">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Card Footer with Verification link */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Verified Credential</span>
                </span>

                <a
                  href={item.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors p-1"
                  aria-label={`View certificate for ${item.title}`}
                >
                  <span>Verification</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
