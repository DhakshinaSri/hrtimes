import React from "react";
import {
  Briefcase,
  Building2,
  TrendingUp,
  BookOpen,
  Users,
} from "lucide-react";
import whyHrImg from "@/assets/whyhrimg.jpg";

const WhyHrTimesSection = () => {
  const reasons = [
    {
      icon: <Briefcase size={32} />,
      title: "Career Opportunities",
      description:
        "Creating awareness about diverse career opportunities across industries and emerging sectors.",
    },
    {
      icon: <Building2 size={32} />,
      title: "Industry Expectations",
      description:
        "Helping students understand workplace requirements, professional standards, and employer expectations.",
      featured: true,
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Upskilling & Learning",
      description:
        "Encouraging continuous learning, skill enhancement, and future-ready professional development.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Meaningful Content",
      description:
        "Sharing educational, career-oriented, and industry-relevant content that adds practical value.",
    },
    {
      icon: <Users size={32} />,
      title: "Growth & Development",
      description:
        "Connecting individuals with opportunities that support personal and professional growth.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-600 to-slate-600"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FD6D02]/20 text-[#FD6D02] text-sm font-semibold uppercase tracking-wider">
            Why HR TIMES Was Initiated
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Helping Students Become
            <br />
            Future-Ready Professionals
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            A significant number of students and job seekers struggle due to a
            lack of exposure to industry knowledge, career awareness, and
            employability guidance. HR TIMES was established to bridge this gap
            and prepare individuals for professional success.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Left Column */}
          <div className="space-y-6">
            {reasons.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02] mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-center mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-center mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Featured Card */}
          <div className="bg-[#FD6D02] rounded-3xl overflow-hidden shadow-2xl transform lg:scale-105">
            <div className="p-8 text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <Building2 size={40} />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Bridging the Gap
              </h3>

              <p className="mt-4 leading-relaxed">
                HR TIMES was created to bridge the gap between academic learning
                and real-world career preparation by making career awareness and
                professional guidance more accessible.
              </p>
            </div>

            <div className="bg-white p-8">
  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
    <img
      src={whyHrImg}
      alt="Why HR Times"
      className="w-full h-full object-cover"
    />
  </div>
</div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {reasons.slice(2, 5).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02] mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-center mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-center mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-14 text-center">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-white text-lg leading-relaxed">
              The initiative is focused on helping students become
              <span className="text-[#FD6D02] font-semibold">
                {" "}future-ready professionals
              </span>
              {" "}through awareness, guidance, learning opportunities, and
              access to meaningful career resources.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyHrTimesSection;