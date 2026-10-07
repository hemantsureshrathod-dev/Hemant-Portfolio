import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
        <Code2 className="h-8 w-8" />
      </div>

      <span className="px-3 py-1 text-xs font-mono-code font-semibold rounded-full bg-slate-900 border border-white/[0.08] text-indigo-400 mb-4">
        404 — Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
        Lost in the codebase?
      </h1>

      <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
        The route you are looking for does not exist or has been moved. Let&apos;s get you back to Hemant&apos;s portfolio.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/30"
      >
        <Home className="h-4 w-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
