import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ==================== MAIN NAV LINKS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          
          {/* Brand Identity Pillar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-gray-900">
                HR <span className="text-[#FD6D02]">TIMES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
              Shaping workplace futures, empowering human resource professionals, and driving community-led organizational growth.
            </p>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hrhub" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  HR Hub
                </Link>
              </li>
              <li>
                <Link to="/partnerwithus" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us Structure */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              About Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Vision Statement
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FD6D02] text-gray-500 transition-colors block">
                  Empower Job Seekers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community Welfare Pillar */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              Community Welfare
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/communitywelfare" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Why HR TIMES Initiated
                </Link>
              </li>
              <li>
                <Link to="/communitywelfare" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  What We Cover
                </Link>
              </li>
              <li>
                <Link to="/communitywelfare" className="hover:text-[#FD6D02] text-gray-500 transition-colors block">
                  Industry Expert Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: News & Articles Matrix */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
              News & Articles
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/newsandarticles" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link to="/newsandarticles" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Content Policy
                </Link>
              </li>
              <li>
                <Link to="/newsandarticles" className="hover:text-[#FD6D02] text-gray-600 transition-colors block">
                  Our Core Objective
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ==================== HORIZONTAL CONTACT BAR (ABOVE DIVIDER) ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-8 border-t border-gray-200">
          <div className="flex items-start gap-3 text-sm">
            <MapPin size={18} className="text-[#FD6D02] shrink-0 mt-0.5" />
            <span className="text-gray-600 leading-tight">Address</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} className="text-[#FD6D02] shrink-0" />
            <a href="mailto:info@hrtimes.in" className="text-gray-600 hover:text-[#FD6D02] transition-colors break-all">info@hrtimes.in</a>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Phone size={18} className="text-[#FD6D02] shrink-0" />
            <a href="tel:+91 XXXXX XXXXX" className="text-gray-600 hover:text-[#FD6D02] transition-colors">+91 (11) 4567-8900</a>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Clock size={18} className="text-[#FD6D02] shrink-0 mt-0.5" />
            <div className="text-gray-600 leading-tight">
              <span className="font-semibold text-gray-800">Mon – Sat:</span> 09:00 AM – 6:00 PM IST
            </div>
          </div>
        </div>

        {/* ==================== SUB-FOOTER BANNER ==================== */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-400">
            &copy; {currentYear} HR TIMES. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;