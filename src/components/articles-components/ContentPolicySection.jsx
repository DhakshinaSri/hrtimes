import React from "react";
import {
  ShieldCheck,
  FileText,
  Copyright,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const ContentPolicySection = () => {
  const policies = [
    {
      icon: <FileText size={24} />,
      title: "Original & Human-Curated",
      description:
        "Every article, insight, and resource is carefully curated to ensure originality and authenticity.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Educational & Awareness",
      description:
        "Content is designed to educate, inform, and create awareness among students and job seekers.",
    },
    {
      icon: <Copyright size={24} />,
      title: "Copyright-Compliant",
      description:
        "All information is responsibly developed and shared in accordance with ethical and copyright standards.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Industry-Relevant",
      description:
        "Content remains aligned with current industry trends, employability requirements, and career opportunities.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Practical & Useful",
      description:
        "The information shared is meaningful, actionable, and beneficial for long-term professional growth.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Split Container */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Intro Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-[#FD6D02] uppercase tracking-[0.25em] text-sm font-semibold">
              Content Policy
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Quality Content
              <br />
              For Career Growth
            </h2>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              HR TIMES follows a strong commitment to quality,
              originality, and ethical information sharing,
              ensuring that every piece of content delivers
              value to students and aspiring professionals.
            </p>
          </div>

          {/* Right Cards Column (2 Rows Layout) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#FD6D02]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FD6D02]/10 text-[#FD6D02] flex items-center justify-center group-hover:bg-[#FD6D02] group-hover:text-white transition-all duration-300">
                    {policy.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900 leading-tight">
                    {policy.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-20">
          <div className="bg-[#FD6D02]/5 border border-[#FD6D02]/20 rounded-3xl p-8 md:p-10">
            <p className="text-center text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The objective is to ensure that students and job seekers
              receive
              <span className="font-semibold text-[#FD6D02]">
                {" "}reliable, meaningful, and career-enhancing content
              </span>
              {" "}that supports informed decision-making,
              employability, and long-term professional growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentPolicySection;