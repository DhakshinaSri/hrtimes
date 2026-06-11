import React from "react";
import {
  TrendingUp,
  Briefcase,
  RefreshCw,
  FileText,
  Building2,
} from "lucide-react";

const JobSeekersSection = () => {
  const features = [
    {
      icon: <TrendingUp size={20} />,
      title: "Employment Trends & Hiring Insights",
      description:
        "Stay updated with current job market trends, hiring patterns, and emerging opportunities.",
    },
    {
      icon: <Briefcase size={20} />,
      title: "Recruitment & HR Updates",
      description:
        "Access valuable recruitment news, HR practices, and industry-related developments.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Career Transition Guidance",
      description:
        "Receive support and guidance for career changes, growth opportunities, and professional advancement.",
    },
    {
      icon: <FileText size={20} />,
      title: "Resume & Interview Preparation",
      description:
        "Improve awareness of resume building, interview readiness, and professional presentation.",
    },
    {
      icon: <Building2 size={20} />,
      title: "Industry Expectations",
      description:
        "Understand workplace expectations, professional standards, and employer requirements.",
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-t-5 border-[#FD6D02]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-wider text-[#FD6D02] font-semibold text-sm">
            Empower Job Seekers
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Helping Professionals
            <br />
            Advance Their Careers
          </h2>

          <div className="w-40 h-1 bg-[#FD6D02] mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            HR TIMES supports job seekers by providing relevant career insights,
            industry updates, and practical guidance to help them stay informed,
            confident, and prepared for professional success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-5 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02]">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-[#FD6D02]/5 border border-[#FD6D02]/20 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The objective is to help job seekers stay informed, strengthen
              their professional readiness, and improve their career prospects
              in an evolving employment landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekersSection;