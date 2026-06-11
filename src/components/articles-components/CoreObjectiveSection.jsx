import React from "react";
import {
  Target,
  GraduationCap,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const CoreObjectiveSection = () => {
  return (
    <section className="bg-[#111827] py-24 px-6 overflow-hidden relative">
      
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#FD6D02]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FD6D02]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto">
          
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FD6D02]/10 border border-[#FD6D02]/20 text-[#FD6D02] text-sm font-semibold uppercase tracking-[0.2em]">
            Our Core Objective
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
            Building a Future
            <span className="block text-[#FD6D02]">
              Powered by Knowledge
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            The ultimate objective of HR TIMES is to create a strong ecosystem
            of career awareness, employability enhancement, and student
            empowerment, where knowledge becomes a tool for transformation
            and opportunity creation.
          </p>
        </div>

        {/* Objective Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          
          {/* Left Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02]">
              <GraduationCap size={30} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Student Empowerment
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Empowering students with the awareness, resources,
              opportunities, and confidence needed to make informed
              educational and career decisions.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-[#FD6D02]/10 flex items-center justify-center text-[#FD6D02]">
              <Briefcase size={30} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Employability Enhancement
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Helping students and job seekers become future-ready
              professionals through industry awareness, skill development,
              and practical career guidance.
            </p>
          </div>

        </div>

        {/* Center Vision Statement */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#FD6D02] to-[#ff8f2a] rounded-[40px] p-7 md:p-8 text-center">

            <h3 className="mt-8 text-3xl md:text-4xl font-bold text-white">
              Knowledge Creates Opportunity
            </h3>

            <p className="mt-8 max-w-4xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
              We believe that when students and job seekers are empowered
              with the right information, guidance, and awareness, they are
              better prepared to build successful careers and contribute
              meaningfully to society.
            </p>

          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-gray-300">
            <Lightbulb size={20} className="text-[#FD6D02]" />
            <span className="text-lg">
              Transforming Knowledge into Careers • Careers into Impact
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreObjectiveSection;