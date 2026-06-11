import React from "react";
import {
  Briefcase,
  GraduationCap,
  Users,
  BookOpen,
  Cpu,
  Trophy,
  Building2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const WhatHrTimesCovers = () => {
  const topics = [
    {
      icon: <Briefcase size={24} />,
      title: "Career Guidance & Industry Trends",
      points: [
        "Career pathways across industries",
        "Sector-specific growth opportunities",
        "Industry transformation and future job roles",
        "Workplace expectations and professional trends",
      ],
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Internship & Placement Opportunities",
      points: [
        "Internship programs",
        "Placement readiness initiatives",
        "Employability enhancement activities",
        "Industry-linked opportunities for students",
      ],
    },
    {
      icon: <Users size={24} />,
      title: "HR & Recruitment Insights",
      points: [
        "Hiring trends and recruitment practices",
        "HR processes and workplace culture",
        "Employer expectations from freshers",
        "Professional etiquette and corporate readiness",
      ],
    },
    {
      icon: <BookOpen size={24} />,
      title: "Skill Development & Upskilling Programs",
      points: [
        "Technical and non-technical skill enhancement",
        "Certification opportunities",
        "Domain-based learning programs",
        "Career-oriented training initiatives",
      ],
    },
    {
      icon: <Cpu size={24} />,
      title: "Latest Technologies & Emerging Domains",
      points: [
        "Technology-driven career opportunities",
        "Digital transformation across industries",
        "Artificial Intelligence, automation & analytics",
        "Future-focused employment opportunities",
      ],
    },
    {
      icon: <Trophy size={24} />,
      title: "Student Success Stories",
      points: [
        "Students achieving career milestones",
        "Successful placements and internships",
        "Skill-based achievements",
        "Growth journeys and experiences",
      ],
    },
    {
      icon: <Building2 size={24} />,
      title: "Corporate Training & Employability Content",
      points: [
        "Workplace readiness",
        "Communication and professional skills",
        "Career preparedness",
        "Industry expectations and practical knowledge",
      ],
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Community Welfare Initiatives",
      points: [
        "Social impact programs",
        "Educational awareness campaigns",
        "Youth empowerment initiatives",
        "Skill and livelihood development activities",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* ================= LEFT STICKY INTRO ================= */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="inline-block text-[#FD6D02] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                What HR TIMES Covers
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Knowledge That
                <span className="block text-[#FD6D02]">
                  Empowers Careers
                </span>
              </h2>

              <div className="w-20 h-1 bg-[#FD6D02] rounded-full mt-6"></div>

              <p className="mt-8 text-gray-600 leading-relaxed text-lg">
                HR TIMES provides carefully curated and educationally
                relevant content covering a wide range of student,
                career, and employability-related topics.
              </p>

              <p className="mt-6 text-gray-500 leading-relaxed">
                From career guidance and internships to emerging
                technologies, HR insights, skill development, and
                community initiatives, the platform helps students
                and aspiring professionals stay informed and future-ready.
              </p>

              <div className="mt-10 flex items-center gap-3 text-[#FD6D02] font-semibold">
                <span>Explore Topics</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SCROLLABLE CONTENT ================= */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#FD6D02] hover:shadow-2xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02] group-hover:bg-[#FD6D02] group-hover:text-white transition-all duration-300">
                      {topic.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {topic.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FD6D02] mt-2 flex-shrink-0"></div>

                        <p className="text-gray-600 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Final Card */}
              <div className="bg-gradient-to-r from-[#FD6D02] to-[#ff8c32] rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Education & Career Awareness Articles
                </h3>

                <p className="leading-relaxed text-white/90">
                  Practical and informative articles that help students
                  explore career opportunities, make informed educational
                  choices, and understand changing employment landscapes.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    Explore Career Opportunities
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    Make Better Educational Choices
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    Understand Future Employment Trends
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= END RIGHT CONTENT ================= */}
        </div>
      </div>
    </section>
  );
};

export default WhatHrTimesCovers;