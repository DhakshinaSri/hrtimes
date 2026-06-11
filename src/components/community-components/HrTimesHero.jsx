import React from "react";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  BookOpen,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const HrTimesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-20 px-6">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FD6D02]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD6D02]/10 text-[#FD6D02] font-semibold text-sm">
            Career Awareness • Industry Insights • Professional Growth
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering
            <span className="text-[#FD6D02]"> Future Professionals</span>
            <br />
            Through Knowledge
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            HR TIMES is a purpose-driven initiative that bridges the gap
            between education and employment by providing students and job
            seekers with career guidance, industry insights, employability
            awareness, and expert knowledge.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
  to="/communitywelfare"
  className="px-8 py-4 bg-[#FD6D02] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2 w-fit"
>
  Explore HR TIMES
  <ArrowRight size={18} />
</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-[#FD6D02]">100%</h3>
              <p className="text-gray-500 text-sm mt-1">
                Non-Profit Initiative
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FD6D02]">Career</h3>
              <p className="text-gray-500 text-sm mt-1">
                Focused Knowledge
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#FD6D02]">Industry</h3>
              <p className="text-gray-500 text-sm mt-1">
                Expert Insights
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative">

          {/* Main Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">

            <div className="space-y-6">

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-orange-50">
                <div className="w-14 h-14 rounded-xl bg-[#FD6D02] text-white flex items-center justify-center">
                  <Lightbulb size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Why HR TIMES Was Initiated
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Bridging the gap between academic learning and
                    real-world career readiness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 rounded-xl bg-[#FD6D02] text-white flex items-center justify-center">
                  <BookOpen size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    What HR TIMES Covers
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Career guidance, internships, employability,
                    technology trends, and professional development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 rounded-xl bg-[#FD6D02] text-white flex items-center justify-center">
                  <Briefcase size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Learning Through Industry Experts
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Practical insights and guidance directly from
                    experienced professionals.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-[#FD6D02] text-white px-5 py-3 rounded-2xl shadow-lg">
            Future Ready
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 px-5 py-3 rounded-2xl shadow-lg">
            Industry Aligned
          </div>

        </div>

      </div>
    </section>
  );
};

export default HrTimesHero;