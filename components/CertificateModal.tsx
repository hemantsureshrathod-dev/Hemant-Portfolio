"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Certificate } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  FileText,
  Calendar,
  Building,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0b101c] border border-white/[0.12] shadow-2xl p-6 sm:p-8 text-left text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close certificate lightbox"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-white/[0.08] z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Top Metadata */}
        <div className="border-b border-white/[0.08] pb-5 mb-5 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {certificate.credentialType}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-mono-code">
              <Calendar className="h-3 w-3" />
              <span>{certificate.issueDate}</span>
            </span>
          </div>

          <h2 id="modal-cert-title" className="text-xl sm:text-2xl font-extrabold text-white">
            {certificate.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 mt-1">
            <Building className="h-3.5 w-3.5 text-slate-500" />
            <span>{certificate.organization}</span>
          </p>
        </div>

        {/* High-Res Certificate Viewer */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-white/[0.08] mb-6 flex items-center justify-center shadow-inner">
          <Image
            src={certificate.imageSrc}
            alt={certificate.title}
            fill
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-contain"
            priority
          />
        </div>

        {/* Description & Disclaimers */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {certificate.description}
          </p>

          {/* Disclaimer if present */}
          {certificate.disclaimer && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
              <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Official Note:</strong> {certificate.disclaimer}
              </span>
            </div>
          )}

          {/* Verification Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono-code">
              <ShieldCheck className="h-4 w-4" />
              <span>Authentic Credential Verified</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={certificate.pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/[0.08] transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-indigo-400" />
                <span>View PDF Document</span>
              </a>

              <a
                href={certificate.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Verify on Google Drive</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
