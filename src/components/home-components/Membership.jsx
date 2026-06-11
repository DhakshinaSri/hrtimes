import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Building2, ArrowUpRight } from "lucide-react";
import Logo from "@/assets/logoishai.png";

const MembershipSection = () => {
  const tiers = [
    {
      title: "Student / Job Seeker",
      subtitle: "Membership",
      icon: GraduationCap,
      desc: "For aspiring innovators and researchers – gain access to mentorship, training, and global exposure.",
      colorClass: "from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/40 text-emerald-700 bg-emerald-500/5",
      accentLine: "bg-emerald-500",
    },
    {
      title: "Professional Membership",
      subtitle: "(Lifetime)",
      icon: Briefcase,
      desc: "Designed for working professionals – expand your network, collaborate on projects, and stay updated with the latest advancements.",
      colorClass: "from-amber-500/10 to-amber-500/5 hover:border-amber-500/40 text-amber-700 bg-amber-500/5",
      accentLine: "bg-amber-500",
    },
    {
      title: "Institutional Membership",
      subtitle: "Partnership",
      icon: Building2,
      desc: "For colleges, universities, hospitals, and research organizations – partner with ISHAI to establish Centers of Excellence, student chapters, and industry-driven programs.",
      colorClass: "from-teal-500/10 to-teal-500/5 hover:border-teal-500/40 text-teal-700 bg-teal-500/5",
      accentLine: "bg-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32 px-6">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== HEADER GRID ==================== */}
        <div className="grid lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-20 mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Join Our Global Ecosystem
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Become a Member <br />
              with <span className="text-teal-600 font-extrabold relative inline-block">ISHAI</span>
            </h2>
            
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase border-l-2 border-amber-500 pl-4">
              International Society for Healthcare & AI Innovation
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl pt-2">
              Join our growing community of institutions, professionals, and students. Membership provides opportunities to connect, collaborate, and grow together. Whether you represent an institution, work in industry, or are a student/job seeker, our platform helps you network, share knowledge, and unlock career opportunities.
            </p>
            
            <p className="text-sm font-medium text-gray-400 italic">
              Select your role below to get started and complete your membership application. Together, we can build a strong and supportive professional network.
            </p>
          </div>

          {/* Badge Showcase Area using Imported Asset */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group p-4">
              <img 
                src={Logo} 
                alt="ISHAI Logo Badge" 
                className="w-48 h-48 md:w-66 md:h-66 object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ==================== TIERS TILES GRID ==================== */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Accent Border Highlight top edge */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${tier.accentLine}`} />
                
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${tier.colorClass} transition-colors duration-300 shadow-sm`}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      {tier.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mt-1 uppercase tracking-wider">
                      {tier.subtitle}
                    </p>
                  </div>

                  <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between group-hover:text-gray-900 text-gray-400 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
                    Apply For Role
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-gray-900 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={16} className="transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default MembershipSection;