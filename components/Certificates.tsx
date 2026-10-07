"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Certificate } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";
import {
  Award,
  ExternalLink,
  Eye,
  Calendar,
  Building,
  ShieldCheck,
} from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Verifiable Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certificates & Credentials
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Authentic participation documents from global hackathons, regional buildathons, and university sprints.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono-code bg-slate-900/60 px-3.5 py-1.5 rounded-xl border border-white/[0.06] flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>5 Verified Credentials Available</span>
          </div>
        </div>

        {/* Certificate Cards: 3-col Desktop, 2-col Tablet, 1-col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-950/30 group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-white/[0.06]">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Certificate</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-950/80 text-indigo-300 border border-white/[0.1] backdrop-blur-md">
                    {cert.credentialType}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code mb-2">
                    <Calendar className="h-3 w-3 text-slate-500" />
                    <span>{cert.issueDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1.5 font-medium">
                    <Building className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{cert.organization}</span>
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Preview</span>
                  </button>

                  <a
                    href={cert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors font-mono-code"
                    aria-label={`Verify ${cert.title} on Google Drive`}
                  >
                    <span>Drive</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
