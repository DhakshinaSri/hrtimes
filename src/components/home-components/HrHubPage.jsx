import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  FileText,
  Mail,
  BookOpen,
  ShieldCheck,
  Award,
  UserCheck,
  Target,
  Copy,
  Check,
} from "lucide-react";

const HrHubPage = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "editor@hrtimes.in";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const contributors = [
    { name: "HR Professionals", icon: Users, desc: "Practitioners driving day-to-day workplace operations." },
    { name: "Talent Acquisition Specialists", icon: UserCheck, desc: "Experts managing recruitment and headhunting ecosystems." },
    { name: "HR Managers & Leaders", icon: Briefcase, desc: "Decision makers shaping company culture and workforce strategies." },
    { name: "L&D Professionals & Trainers", icon: Target, desc: "Enablers building talent capabilities and training frameworks." },
    { name: "Industry Experts & Consultants", icon: Award, desc: "External advisors providing specialized structural insights." },
    { name: "Academicians & Management", icon: GraduationCap, desc: "Scholars bridging theoretical frameworks with modern practice." },
  ];

  const topics = [
    "Talent Acquisition & Recruitment Trends",
    "Employee Engagement & Workplace Culture",
    "Learning & Development Practices",
    "HR Technology & AI in HR",
    "Performance Management",
    "Labour Laws & Statutory Compliance",
    "Leadership & Organizational Development",
    "Diversity, Equity & Inclusion",
    "Workplace Ethics & Employee Relations",
    "Career Growth & Future of Work",
  ];

  // Framer Motion staggered orchestration setup
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-white antialiased selection:bg-[#FD6D02]/30">

      {/* ================================= HERO ================================= */}
      <section className="relative overflow-hidden bg-[#111827] py-28 px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FD6D02]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FD6D02]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FD6D02]/10 border border-[#FD6D02]/20 text-[#FD6D02] text-sm font-semibold uppercase tracking-[0.2em]">
            HR Hub
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
            A Dedicated Corner
            <br />
            For
            <span className="text-[#FD6D02]">
              {" "}HR Professionals
            </span>
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
            Share knowledge, workplace experiences, HR insights, and thought
            leadership content that contributes to professional learning,
            collaboration, and community-driven growth.
          </p>
        </div>
      </section>

      {/* ================================= ABOUT ================================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-[#FD6D02] font-semibold uppercase tracking-[0.2em] text-sm">
              About HR Hub
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Share Your Expertise
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              HR Hub is a special section of HR TIMES created exclusively to
              encourage Human Resource professionals, trainers, academicians,
              consultants, and business leaders to share professional knowledge,
              workplace experiences, and industry perspectives.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Through HR Hub, HR TIMES aims to promote professional learning,
              knowledge exchange, and community-driven growth within the HR
              fraternity.
            </p>
          </div>

          <div className="bg-[#FD6D02]/5 border border-[#FD6D02]/20 rounded-3xl p-10">
            <FileText size={50} className="text-[#FD6D02]" />

            <h3 className="mt-6 text-3xl font-bold">
              Thought Leadership Platform
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Contribute meaningful write-ups, articles, case studies,
              workplace best practices, HR innovations, and professional
              experiences that can inspire and educate the wider HR community.
            </p>
          </div>

        </div>
      </section>

      {/* ================================= CONTRIBUTORS ================================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-28 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-10 mb-16">
            <div className="max-w-xl">
              <span className="text-[#FD6D02] text-xs font-bold tracking-widest uppercase bg-[#FD6D02]/10 px-3 py-1 rounded-md">
                Ecosystem Members
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-3">
                Who Can Contribute?
              </h2>
            </div>
            <p className="text-gray-500 text-lg md:max-w-md mt-4 md:mt-0">
              We welcome strategic perspectives and data-backed contributions from professionals working across the entire lifecycle of human resource ecosystems.
            </p>
          </div>

          {/* Staggered dynamic grid entry */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contributors.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#FD6D02] transition-colors duration-300" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-[#FD6D02]/10 group-hover:text-[#FD6D02] transition-colors duration-300">
                      <IconComponent size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#FD6D02] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================= TOPICS ================================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FD6D02] uppercase bg-[#FD6D02]/5 px-4 py-1.5 rounded-full border border-[#FD6D02]/10">
              Suggested Matrices
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Areas You Can Write About
            </h2>
            <div className="w-16 h-1 bg-[#FD6D02] mx-auto mt-6 rounded-full" />
          </div>

          {/* Staggered zoom-in list matrix */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#FD6D02]/40 hover:shadow-md transition-all duration-300 flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center font-mono font-bold text-sm text-gray-400 group-hover:bg-[#FD6D02] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-1.5 pt-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#FD6D02] transition-colors duration-200 leading-snug">
                    {topic}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================= SUBMISSION & INTERACTIVE CLIPBOARD ================================= */}
      <section className="bg-[#111827] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <Mail
            size={60}
            className="text-[#FD6D02] mx-auto"
          />

          <h2 className="mt-8 text-5xl font-bold text-white">
            Submit Your Write-Up
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            HR professionals are invited to submit original write-ups,
            articles, case studies, and professional insights for editorial
            review and publication consideration.
          </p>

          <div className="mt-10 bg-white rounded-3xl p-8 relative overflow-hidden">
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Submission Email
            </p>

            {/* Click to Copy Wrapper Box */}
            <button
              onClick={handleCopyEmail}
              className="mt-3 group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#FD6D02] hover:bg-[#FD6D02]/5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FD6D02] focus:ring-offset-2"
              title="Copy email to clipboard"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#FD6D02] tracking-tight">
                {emailAddress}
              </h3>
              <div className="text-gray-400 group-hover:text-[#FD6D02] transition-colors p-1 bg-gray-50 rounded-lg group-hover:bg-transparent">
                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              </div>

              {/* Tiny Toast feedback element */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 whitespace-nowrap z-20 pointer-events-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Copied to Clipboard!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <p className="mt-6 text-gray-600">
              Kindly include your full name, designation, organization name,
              and contact details while submitting your content.
            </p>
          </div>

        </div>
      </section>

      {/* ================================= EDITORIAL NOTE ================================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="border border-gray-200 rounded-3xl p-10">
            <div className="flex items-center gap-4">
              <ShieldCheck
                size={36}
                className="text-[#FD6D02]"
              />

              <h2 className="text-3xl font-bold">
                Editorial Note
              </h2>
            </div>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              HR TIMES encourages contributors to submit original,
              professional, and meaningful content. The editorial team
              reserves the right to review, edit, approve, or publish
              submissions based on content quality, relevance, suitability,
              and publication guidelines.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HrHubPage;