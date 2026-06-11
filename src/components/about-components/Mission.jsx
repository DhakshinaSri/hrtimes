import React from "react";
import { GraduationCap, Briefcase, Laptop, Award, Building2 } from "lucide-react";

const MissionSection = () => {
  const missionPoints = [
    {
      icon: <Briefcase size={24} />,
      title: "Career Opportunities",
      description:
        "Explore opportunities across multiple industries and career domains.",
    },
    {
      icon: <Laptop size={24} />,
      title: "Future-Ready Skills",
      description:
        "Learn emerging technologies and in-demand skills for the future workforce.",
    },
    {
      icon: <Award size={24} />,
      title: "Growth Opportunities",
      description:
        "Discover internships, certifications, and placement opportunities.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Industry Readiness",
      description:
        "Understand workplace expectations, professional development, and employability.",
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="uppercase tracking-wider text-[#FD6D02] font-semibold text-sm">
            Our Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Empowering Students.
            <br />
            Building Careers.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-justify">
            The mission of HR TIMES is to establish an inclusive, accessible,
            and community-focused knowledge platform that supports students and
            aspiring professionals through continuous access to valuable
            information and career guidance.
          </p>

          <div className="mt-8 space-y-4">
            {missionPoints.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-gray-50 border border-gray-100 p-4 rounded-lg hover:shadow-md transition-all"
              >
                <div className="text-[#FD6D02] mt-1">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 bg-[#FD6D02] text-white px-8 py-3 font-semibold rounded-md hover:bg-[#e35f00] transition">
            Learn More
          </button>
        </div>

        {/* Right Card */}
        <div className="relative">
          
          {/* Ribbon Header */}
          <div className="absolute -top-4 left-6 bg-[#FD6D02] text-white px-8 py-3 font-semibold shadow-lg">
            Support Students
          </div>

          {/* Main Card */}
          <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-8 pt-16">
            
            <div className="flex justify-center mb-6">
              <div className="bg-[#FD6D02]/10 p-4 rounded-full">
                <GraduationCap
                  size={50}
                  className="text-[#FD6D02]"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              HR TIMES Helps Students Gain Awareness About
            </h3>

            <div className="space-y-3">
              {[
                "Career opportunities across multiple industries",
                "Emerging technologies & future-ready skills",
                "Internships, certifications & placements",
                "Professional development opportunities",
                "Industry expectations & workplace readiness",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-100 px-4 py-3 rounded-md text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-600 text-center leading-relaxed">
              HR TIMES helps students move beyond classroom learning by
              introducing practical knowledge and real-world career
              perspectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;