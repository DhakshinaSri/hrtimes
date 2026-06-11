import React from "react";
import {
  Users,
  Briefcase,
  GraduationCap,
  BookOpen,
  Building2,
  Lightbulb,
} from "lucide-react";

const CommitmentSection = () => {
  const commitments = [
    {
      icon: <Briefcase size={24} />,
      title: "Employability Awareness",
      description:
        "Supporting students and job seekers through employability-focused guidance and skill awareness.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Career Decisions",
      description:
        "Promoting informed career planning and better professional decision-making.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Continuous Learning",
      description:
        "Encouraging lifelong learning, upskilling, and professional development.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Academia & Industry",
      description:
        "Bridging the gap between academic education and industry expectations.",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Youth Empowerment",
      description:
        "Empowering young professionals through knowledge, awareness, and opportunities.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block text-[#FD6D02] font-semibold uppercase tracking-[0.2em] text-sm mb-5">
              Our Commitment
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Community First.
              <br />
              Student Focused.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
              HR TIMES operates with a community-first and student-centric
              approach, ensuring that students and job seekers receive
              authentic, meaningful, and beneficial information that supports
              their career development and long-term success.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-20 bg-[#FD6D02] rounded-full"></div>
              <span className="text-[#FD6D02] font-medium">
                Creating Positive Social Impact
              </span>
            </div>
          </div>

          {/* Right Featured Card */}
          <div>
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 h-full">
              <div className="w-24 h-24 rounded-full bg-[#FD6D02]/10 flex items-center justify-center">
                <Users size={42} className="text-[#FD6D02]" />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                Knowledge That Creates Impact
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Our focus remains on creating a positive social impact rather
                than commercial gain. Every initiative, article, insight, and
                opportunity shared through HR TIMES is designed to empower
                students, job seekers, and communities with practical and
                career-focused knowledge.
              </p>

              <div className="mt-8 bg-[#FD6D02]/5 border border-[#FD6D02]/20 rounded-2xl p-5">
                <p className="text-[#FD6D02] font-medium">
                  Community-First • Career-Focused • Future-Ready
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16">

          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-6 border border-gray-100 hover:border-[#FD6D02]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CommitmentSection;