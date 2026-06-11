import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' (shows both), 'platform', 'ecosystem'
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  // Mouse tilt logic for 3D Parallax Card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates from card center (-1 to 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Limit rotation to max 12 degrees
    setCoords({ x: x * 24, y: -y * 24 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Interactive Particle System using HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const colors = ['rgba(43, 116, 219, 0.4)', 'rgba(253, 109, 2, 0.4)']; // 2B74DB & FD6D02 with alpha

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw a subtle wireframe structural grid in background
      ctx.strokeStyle = 'rgba(43, 116, 219, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw interactive connections
      ctx.shadowBlur = 0; // Reset shadow for lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(43, 116, 219, ${0.1 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle Tab filter toggling
  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab('all'); // Click again to toggle back to both
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative overflow-x-hidden flex flex-col justify-between selection:bg-[#2B74DB]/10">
      
      {/* Decorative Custom Embedded CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 6s ease-in-out infinite;
        }
        .perspective-lg {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}} />


      {/* Main Section Content Wrapper */}
      <section className="flex-grow py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center w-full z-10 relative">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#2B74DB]/5 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FD6D02]/5 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-pulse-soft" style={{ animationDelay: '3s' }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Context, Title, and Tab Controller */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD6D02] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FD6D02]"></span>
                </span>
                <span className="text-[#2B74DB]">OUR STRATEGIC FOCUS</span>
              </div>

              {/* Title with distinct styling */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
                Vision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B74DB] to-[#FD6D02]">
                  of HR TIMES
                </span>
              </h1>
              
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#2B74DB] to-[#FD6D02] mt-6 rounded-full" />
            </div>

            {/* Interactive Filters to explore chunks of the vision text */}
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => handleTabClick('platform')}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    activeTab === 'platform'
                      ? 'bg-white border-[#2B74DB] text-[#2B74DB] shadow-lg shadow-blue-500/10 translate-x-1'
                      : 'bg-slate-50/50 hover:bg-slate-50 border-slate-100 text-slate-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">The Social & Skills Catalyst</span>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick('ecosystem')}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    activeTab === 'ecosystem'
                      ? 'bg-white border-[#FD6D02] text-[#FD6D02] shadow-lg shadow-orange-500/10 translate-x-1'
                      : 'bg-slate-50/50 hover:bg-slate-50 border-slate-100 text-slate-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">Trust & Employability</span>
                  </div>

                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Immersive 3D Parallax Visual Display Area */}
          <div className="lg:col-span-7 flex items-center justify-center relative perspective-lg min-h-[500px] lg:min-h-[550px]">
            
            {/* Interactive Canvas Grid (hosts ambient particles) */}
            <div className="absolute inset-0 bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-100 shadow-inner z-0">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* 3D Core Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              style={{
                transform: `rotateY(${coords.x}deg) rotateX(${coords.y}deg)`,
                transition: isHovered ? 'none' : 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              className="w-full max-w-lg p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100/50 z-10 preserve-3d cursor-pointer flex flex-col justify-between relative group"
            >
              {/* Highlight corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2B74DB] rounded-tl-2xl transition-all group-hover:scale-110" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FD6D02] rounded-br-2xl transition-all group-hover:scale-110" />

              {/* Main Content Area in 3D Card */}
              <div className="space-y-6 flex-grow preserve-3d">
                
                {/* Paragraph 1: Platform Vision */}
                {(activeTab === 'all' || activeTab === 'platform') && (
                  <div 
                    style={{ 
                      transform: 'translateZ(50px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }} 
                    className={`relative bg-white p-5 rounded-xl border transition-all hover:shadow-md ${
                      activeTab === 'platform' ? 'border-[#2B74DB] ring-1 ring-[#2B74DB]/20 shadow-md scale-[1.02]' : 'border-slate-100 shadow-sm'
                    }`}
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#2B74DB] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      01
                    </div>
                    <div className="pl-4">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-[#2B74DB] block mb-2">The Platform</span>
                      <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
                        To create a knowledge-driven and socially responsible platform that empowers students, job seekers, and communities by providing career-oriented information, skill awareness, and professional insights that contribute to long-term personal and professional growth.
                      </p>
                    </div>
                  </div>
                )}

                {/* Paragraph 2: Ecosystem Vision */}
                {(activeTab === 'all' || activeTab === 'ecosystem') && (
                  <div 
                    style={{ 
                      transform: 'translateZ(50px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }} 
                    className={`relative bg-white p-5 rounded-xl border transition-all hover:shadow-md ${
                      activeTab === 'ecosystem' ? 'border-[#FD6D02] ring-1 ring-[#FD6D02]/20 shadow-md scale-[1.02]' : 'border-slate-100 shadow-sm'
                    }`}
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FD6D02] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      02
                    </div>
                    <div className="pl-4">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-[#FD6D02] block mb-2">The Ecosystem</span>
                      <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
                        HR TIMES envisions becoming a trusted learning and awareness ecosystem that supports individuals in making informed educational and career decisions while fostering employability and social development.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic floating element: Orb Blue */}
            <div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-tr from-[#2B74DB] to-blue-400 rounded-xl shadow-lg -z-10 animate-float-slow opacity-85 hidden sm:block" 
              style={{ 
                transform: 'translateZ(60px)',
                animationDuration: '6s'
              }}
            />

            {/* Dynamic floating element: Orb Orange */}
            <div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-[#FD6D02] to-orange-400 rounded-full shadow-lg -z-10 animate-float-slow opacity-85 hidden sm:block" 
              style={{ 
                transform: 'translateZ(80px)',
                animationDuration: '10s' 
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}