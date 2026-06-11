import React from "react";
import {
  GraduationCap,
  TrendingUp,
  Handshake,
  BookOpen,
  Users,
  HeartHandshake,
} from "lucide-react";

const ImpactSection = () => {
  const institutionFeatures = [
    {
      icon: <GraduationCap size={22} />,
      title: "Student Employability",
      description:
        "Enhancing employability outcomes through industry-relevant awareness and guidance.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Industry Expectations",
      description:
        "Helping institutions keep students informed about workplace realities and market demands.",
    },
    {
      icon: <Handshake size={22} />,
      title: "Academia & Industry",
      description:
        "Bridging the gap between academic learning and evolving industry trends.",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Skill Development",
      description:
        "Promoting practical learning, professional growth, and future-ready skills.",
    },
  ];

  const communityFeatures = [
    "Youth empowerment initiatives",
    "Career awareness programs",
    "Livelihood & employability enhancement",
    "Social development through knowledge sharing",
  ];

  return (
    <section className="bg-[#111827] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="text-[#FD6D02] uppercase tracking-widest font-semibold text-sm">
            Social Impact & Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Empowering Institutions.
            <br />
            Transforming Communities.
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            HR TIMES serves as a value-added knowledge platform that supports
            educational institutions while contributing to broader community
            welfare through career awareness, skill development, and
            employability-focused initiatives.
          </p>

          {/* Institution Cards */}
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {institutionFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-[#1F2937] border border-gray-700 rounded-lg overflow-hidden"
              >
                <div className="flex items-center gap-4 bg-white p-4">
                  <div className="w-12 h-12 rounded-full bg-[#FD6D02] flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <div className="p-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative">
          <div className="border-4 border-white p-6 bg-[#1F2937] rounded-lg">
            
            <div className="bg-gradient-to-br from-[#FD6D02]/20 to-transparent rounded-lg p-8">
              
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-[#FD6D02] flex items-center justify-center">
                  <HeartHandshake size={42} className="text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white text-center mt-6">
                Promote Community Welfare
              </h3>

              <p className="text-gray-300 text-center mt-4">
                Supporting positive social change through knowledge-sharing,
                career awareness, and employability enhancement initiatives.
              </p>

              <div className="mt-8 space-y-4">
                {communityFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/10 rounded-md p-4 flex items-center gap-3"
                  >
                    <Users
                      size={18}
                      className="text-[#FD6D02] flex-shrink-0"
                    />

                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-[#FD6D02]/10 border border-[#FD6D02]/30 rounded-lg">
                <p className="text-gray-200 leading-relaxed text-center">
                  The initiative strongly believes that access to the right
                  information can positively transform careers, opportunities,
                  and lives.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;