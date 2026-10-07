"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  Cpu,
  Globe,
  Database,
  Wrench,
  Check,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "AI & GenAI":
        return <Cpu className="h-4 w-4 text-indigo-400" />;
      case "Programming Languages":
        return <Code className="h-4 w-4 text-sky-400" />;
      case "Frontend Development":
        return <Globe className="h-4 w-4 text-emerald-400" />;
      case "Backend & Databases":
        return <Database className="h-4 w-4 text-violet-400" />;
      case "Tools & DevOps":
        return <Wrench className="h-4 w-4 text-amber-400" />;
      default:
        return <Sparkles className="h-4 w-4 text-indigo-400" />;
    }
  };

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tooling
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            A practical, defensible toolkit built through continuous project engineering and hackathons.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.06]">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.name
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {getCategoryIcon(cat.name)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-slate-950 border border-white/[0.08]">
                    {getCategoryIcon(cat.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-normal">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-colors ${
                        skill.highlight
                          ? "bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 font-medium"
                          : "bg-slate-950/70 border border-white/[0.06] text-slate-300"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      )}
                      <span>{skill.name}</span>
                      {skill.context && (
                        <span className="text-[10px] text-slate-400 font-mono-code ml-1">
                          ({skill.context})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-500 font-mono-code">
                <span>{cat.skills.length} competencies</span>
                <span className="text-indigo-400/80">Project Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
