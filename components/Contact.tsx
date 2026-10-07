"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import {
  Mail,
  FileDown,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-mesh-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
              <Mail className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {contact.heading}
            </h2>

            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed max-w-lg">
              {contact.supportingCopy}
            </p>

            {/* Quick Metadata Badges */}
            <div className="mt-8 space-y-3 w-full max-w-md">
              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors font-mono-code"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors border border-white/[0.06]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono-code">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Open to Internships</span>
                </div>
              </div>
            </div>

            {/* Connect CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-sky-600/20"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm border border-white/[0.1] transition-all"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View GitHub Profile</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium text-xs sm:text-sm border border-white/[0.1] transition-all"
              >
                <FileDown className="h-4 w-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/[0.08] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Have an internship opportunity, project collaboration, or question? Send a note directly to my inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Your message client has been triggered. Looking forward to connecting!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Internship Opportunity / Multi-Agent Research"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the project, role, or conversation you'd like to have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
