import React from "react";

const PurposeSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            <span className="inline-block w-4 h-4 rounded-full bg-[#E67E22] mr-3 align-middle -mt-1"></span>
            <span className="text-[#E67E22]">Transforming Career </span>
            <span>Awareness</span>
          </h2>

          <p className="mt-6 text-base text-gray-800 leading-relaxed max-w-4xl text-left sm:text-justify">
            In today’s rapidly evolving employment landscape, students and
            aspiring professionals often face challenges in understanding
            industry expectations, emerging opportunities, required skill sets,
            and career pathways. HR TIMES was initiated to address this gap by
            creating a reliable, informative, and accessible knowledge platform
            that helps individuals prepare themselves for future career success.
          </p>
        </div>

        {/* Content Card */}
        <div className="relative max-w-5xl mx-auto mt-20 sm:mt-16">
          
          {/* Floating Label */}
          <div className="absolute -top-6 left-4 right-4 sm:left-8 sm:right-auto">
            <span className="block sm:inline-block bg-[#E67E22] text-white font-semibold px-4 sm:px-6 py-3 text-base sm:text-lg shadow-md text-center">
              Bridging Education and Employment
            </span>
          </div>

          {/* Box */}
          <div className="border-2 border-black rounded-3xl bg-transparent p-6 sm:p-8 md:p-12 pt-14 sm:pt-14">
            <p className="text-base text-gray-900 leading-relaxed text-left sm:text-justify">
              Designed as a completely non-profit initiative, HR TIMES is
              committed to supporting the student and job seeker ecosystem by
              sharing practical, industry-oriented, authentic, and educational
              content aimed at improving employability, awareness, and
              professional readiness.
            </p>

            <p className="mt-6 text-base text-gray-900 leading-relaxed text-left sm:text-justify">
              The initiative works with a larger purpose of bridging the gap
              between education and employment, helping young talent better
              understand workplace realities, industry trends, and skill
              enhancement opportunities required to succeed in an increasingly
              competitive world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;