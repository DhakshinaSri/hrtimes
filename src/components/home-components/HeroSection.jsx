import React from 'react';
import backgroundImage from '@/assets/heroimg.jpg'; 

const HrTimesSection = () => {
  return (
    <section className="relative min-h-screen text-slate-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans flex items-center">
      
      {/* ================= BACKGROUND IMAGE & OVERLAY ================= */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ 
          // 2. Use the imported variable inside the template literal
          backgroundImage: `url(${backgroundImage})` 
        }}
      />
      {/* Tint Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full w-full relative z-10">
        
        {/* ================= HERO HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold tracking-widest text-[#FD6D02] uppercase bg-[#FD6D02]/10 px-4 py-1.5 rounded-full mb-4">
            A Newsletter Initiative by ISHAI
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#538bda] mb-4 italic">
            HR <span className="text-[#FD6D02]">TIMES</span>
          </h1>

          {/* ================= TAGLINE ================= */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm sm:text-base font-semibold tracking-wide text-gray-300 mb-6 uppercase">
            <span>Empowering Careers</span>
            <span className="text-[#FD6D02] hidden sm:inline">•</span>
            <span>Enriching Communities</span>
            <span className="text-[#FD6D02] hidden sm:inline">•</span>
            <span>Creating Opportunities</span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            HR TIMES is a purpose-driven social impact newsletter initiative by ISHAI, established with the vision of empowering students, job seekers, educational institutions, and communities through meaningful knowledge-sharing, employability awareness, career guidance, and professional development opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HrTimesSection;