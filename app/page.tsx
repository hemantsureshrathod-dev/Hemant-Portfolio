import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080c14] text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Education Section */}
        <About />

        {/* 3. Featured Projects & Case Studies */}
        <Projects />

        {/* 4. Technical Skills & Tools */}
        <Skills />

        {/* 5. Hackathons & Milestones */}
        <Achievements />

        {/* 6. Verified Certificates & Lightbox Gallery */}
        <Certificates />

        {/* 7. Beyond Code: Leadership & Community */}
        <Leadership />

        {/* 8. Contact & Opportunities */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
