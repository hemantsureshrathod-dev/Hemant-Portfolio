"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Users,
  Briefcase,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Share2,
} from "lucide-react";

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="h-3.5 w-3.5" />
            <span>Community & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond Code
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Student leadership, community organizing, and collaborative engineering initiatives.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {item.role}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-code">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.organization}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  {item.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Initiatives & Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-3 text-xs text-slate-400 font-mono-code">
                <HeartHandshake className="h-4 w-4 text-indigo-400" />
                <span>Initiative • Teamwork • Leadership</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
