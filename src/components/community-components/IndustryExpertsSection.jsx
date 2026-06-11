import React from "react";
import {
  UserCheck,
  Briefcase,
  Building2,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const IndustryExpertsSection = () => {
  const features = [
    {
      number: "01",
      icon: <UserCheck size={24} />,
      title: "Expert Career Guidance",
      description: "Learn directly from experienced professionals sharing valuable insights.",
    },
    {
      number: "02",
      icon: <Building2 size={24} />,
      title: "Industry Expectations",
      description: "Understand exactly what top employers look for in fresh talent.",
    },
    {
      number: "03",
      icon: <Briefcase size={24} />,
      title: "Workplace Knowledge",
      description: "Gain critical exposure to real-world workplace practices and culture.",
    },
    {
      number: "04",
      icon: <TrendingUp size={24} />,
      title: "Growth Strategies",
      description: "Discover practical approaches for long-term career advancement.",
    },
    {
      number: "05",
      icon: <Lightbulb size={24} />,
      title: "Skill Recommendations",
      description: "Develop the right technical and professional skills for future success.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-gray-50 text-[#FD6D02] text-xs font-bold uppercase tracking-[0.25em]">
              Learning Through Industry Experts
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
              Industry
              <span className="text-[#FD6D02]">
                {" "}Knowledge
              </span>
              <br />
              For Future Professionals
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-lg text-gray-500 leading-relaxed">
              HR TIMES brings practical insights and guidance from
              experienced industry professionals, helping students
              and job seekers understand workplace realities,
              career growth opportunities, and evolving industry
              expectations.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group border border-gray-200 rounded-[24px] p-6 min-h-[240px] flex flex-col justify-between hover:border-[#FD6D02] hover:shadow-xl transition-all duration-300"
            >
              {/* Content Wrapper (Brings text to front) */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02] group-hover:bg-[#FD6D02] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Large Background Number (Placed behind text) */}
              <span className="absolute -bottom-4 -right-2 text-[80px] font-extrabold text-gray-100/80 select-none z-0 pointer-events-none transition-colors group-hover:text-gray-200/50">
                {item.number}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-gradient-to-r from-[#FD6D02]/10 to-orange-50 border border-[#FD6D02]/20 rounded-3xl p-8 md:p-10">
          <p className="text-center text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
            This ensures that the information shared through HR TIMES remains
            <span className="font-semibold text-[#FD6D02]">
              {" "}practical, relevant, updated, and aligned with industry requirements
            </span>
            , enabling students and job seekers to make informed decisions
            about their careers and professional development.
          </p>
        </div>

      </div>
    </section>
  );
};

export default IndustryExpertsSection;