"use client";

import { Layers, Terminal, Cpu, Info, Instagram, Linkedin, User } from "lucide-react";

interface AboutDevelopersProps {
  onClose: () => void;
}

export default function AboutDevelopers({ onClose }: AboutDevelopersProps) {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-display">
      {/* Back button and Section header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-border pb-6 mb-8 md:mb-12">
        <div>
          <h1 className="font-semibold text-3xl md:text-4xl text-foreground tracking-tight">
            About
          </h1>
          <p className="text-xs text-muted mt-2 tracking-wide font-medium">
            Varit IQ · Education & Technology Synergy
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 md:mt-0 font-semibold text-sm px-5 py-2.5 bg-brutal-blue text-white rounded-full hover:bg-brutal-blue/90 active:scale-95 transition-all shadow-sm cursor-pointer self-start md:self-auto"
        >
          Back to Platform
        </button>
      </div>

      {/* Grid Layout */}
      <div className="space-y-10">
        
        {/* Panel 1: Platform Purpose */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brutal-blue/10 rounded-full flex items-center justify-center text-brutal-blue">
              <Info className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              Project Purpose
            </h3>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brutal-blue opacity-5 -mr-10 -mt-10 rounded-full" />
            <p className="text-sm text-foreground/80 leading-relaxed font-normal">
              Varit IQ transforms passive documents into interactive learning tools. Following modern Material Design guidelines—where clarity, accessibility, and intuitive information hierarchy are paramount—we showcase code architecture and logic reviews clearly. Stripping away unnecessary complexity provides a highly accessible, focused environment for conceptual mastery. Powered by Gemini, learners receive instant assessments, correct/incorrect reviews, and deep subjective critiques tailored exactly to their study materials.
            </p>
          </div>
        </div>

        {/* Panel 2: Architects Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brutal-yellow/15 rounded-full flex items-center justify-center text-brutal-yellow dark:text-yellow-400">
              <Terminal className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              Architects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ritesh Bisen Card */}
            <div className="border border-border bg-card p-6 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-brutal-blue/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-brutal-blue" />
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brutal-blue/10 rounded-full flex items-center justify-center text-brutal-blue shrink-0">
                    <User className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">Ritesh Bisen</h4>
                    <p className="text-xs text-muted font-medium mt-0.5">Founder & Chief Technology Officer</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  Leads core architecture, Gemini AI systems integration, and full-stack service design orchestration for Varit IQ.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/riteshhbisen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-border bg-accent-light/35 text-foreground hover:bg-brutal-red/10 hover:border-brutal-red/40 hover:text-brutal-red active:scale-95 transition-all text-xs font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-bisen-7b6bb7317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-border bg-accent-light/35 text-foreground hover:bg-brutal-blue/10 hover:border-brutal-blue/40 hover:text-brutal-blue active:scale-95 transition-all text-xs font-semibold"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Vatsalya Verma Card */}
            <div className="border border-border bg-card p-6 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-brutal-yellow/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-brutal-yellow" />
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brutal-yellow/15 rounded-full flex items-center justify-center text-brutal-yellow shrink-0">
                    <User className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">Vatsalya Verma</h4>
                    <p className="text-xs text-muted font-medium mt-0.5">Co-Founder & Chief Operating Officer</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  Drives business strategies, platform operations, and coordinates educational synergy for the growth of Varit IQ.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-border bg-accent-light/35 text-foreground hover:bg-brutal-red/10 hover:border-brutal-red/40 hover:text-brutal-red active:scale-95 transition-all text-xs font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-border bg-accent-light/35 text-foreground hover:bg-brutal-blue/10 hover:border-brutal-blue/40 hover:text-brutal-blue active:scale-95 transition-all text-xs font-semibold"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3: Technical Stack */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brutal-red/10 rounded-full flex items-center justify-center text-brutal-red">
              <Cpu className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              Technologies Used
            </h3>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8 rounded-3xl shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {[
                { name: "Next.js", desc: "React Framework", color: "bg-brutal-blue text-white" },
                { name: "FastAPI", desc: "High-Performance Python Web Framework", color: "bg-brutal-red text-white" },
                { name: "Gemini AI", desc: "Google Gemini 2.0 Flash Client Engine", color: "bg-brutal-yellow text-black" },
                { name: "TypeScript", desc: "Strict typed safety and scale runtime", color: "bg-accent-light text-foreground border border-border" },
                { name: "Tailwind CSS", desc: "Modern styling & components utility layout", color: "border border-border bg-card text-foreground" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="border border-border bg-background p-5 rounded-2xl hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-base text-foreground">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-muted mt-1.5 leading-snug">
                      {tech.desc}
                    </p>
                  </div>
                  <div className={`text-[10px] font-medium mt-4 px-2 py-0.5 border border-border rounded-full uppercase tracking-wider text-center ${tech.color}`}>
                    Core Service
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 4: Comparison Table */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brutal-blue/10 rounded-full flex items-center justify-center text-brutal-blue">
              <Layers className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              Varit IQ vs Typical Quiz Tools
            </h3>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8 rounded-3xl shadow-sm">
            <div className="overflow-x-auto w-full border border-border rounded-2xl">
              <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-accent-light/40 dark:bg-accent-light/10">
                    <th className="p-4 font-bold text-muted uppercase tracking-wider text-xs w-[30%]">Feature</th>
                    <th className="p-4 font-bold text-brutal-blue uppercase tracking-wider text-xs bg-brutal-blue/5 dark:bg-brutal-blue/10 w-[35%]">Varit IQ</th>
                    <th className="p-4 font-bold text-muted uppercase tracking-wider text-xs w-[35%]">Typical AI Quiz Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    {
                      feature: "AI-generated assessments",
                      varit: "Generate from your own study material",
                      typical: "Available",
                      varitHighlight: true,
                    },
                    {
                      feature: "Supported formats",
                      varit: "PDF, DOC, TXT, Images",
                      typical: "PDF only / Limited formats",
                    },
                    {
                      feature: "Question types",
                      varit: "MCQ + T/F + Subjective + Rapid Fire",
                      typical: "Mostly MCQs",
                    },
                    {
                      feature: "Difficulty control",
                      varit: "Easy • Medium • Hard",
                      typical: "Basic options",
                    },
                    {
                      feature: "Number of questions",
                      varit: "Fully customizable",
                      typical: "Limited customization",
                    },
                    {
                      feature: "Personalized assessments",
                      varit: "Based on your uploaded content",
                      typical: "Generic AI output",
                    },
                    {
                      feature: "Generation speed",
                      varit: "Usually under 10 seconds",
                      typical: "Similar",
                    },
                    {
                      feature: "Interface",
                      varit: "Minimal & distraction-free",
                      typical: "Feature-heavy / Mixed",
                    },
                    {
                      feature: "Manual effort",
                      varit: "Zero manual question writing",
                      typical: "Often requires editing",
                    },
                    {
                      feature: "Designed for",
                      varit: "Students & Educators",
                      typical: "General-purpose AI",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-accent-light/5 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.feature}</td>
                      <td className={`p-4 font-semibold text-foreground bg-brutal-blue/5 dark:bg-brutal-blue/10 ${row.varitHighlight ? "text-brutal-blue" : ""}`}>{row.varit}</td>
                      <td className="p-4 text-muted font-medium">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
