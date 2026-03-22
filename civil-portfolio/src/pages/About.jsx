import { motion } from 'framer-motion';
import { FaHardHat, FaBuilding, FaDraftingCompass, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: "250+", label: "Projects Completed", icon: <FaBuilding /> },
    { number: "16+", label: "Years Experience", icon: <FaHardHat /> },
    { number: "45", label: "Industry Awards", icon: <FaDraftingCompass /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaHandshake /> }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center bg-slate-50 relative overflow-hidden">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-[0.03]">
        <div className="w-[120%] h-[1px] bg-slate-900 rotate-12 absolute"></div>
        <div className="w-[120%] h-[1px] bg-slate-900 -rotate-12 absolute"></div>
      </div>

      {/* Editorial Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 space-y-8 relative z-10"
      >
        <div className="space-y-6">
          {/* Minimalist Line Label */}
          <div className="flex items-center gap-6">
            <span className="w-16 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
              The Firm
            </span>
          </div>
          
          {/* Mixed Typography Heading */}
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05]">
            Engineering <br />
            <span className="font-serif font-light italic text-amber-500 pr-2">
              Excellence
            </span>
            Since 2010.
          </h2>
        </div>
        
        <div className="pl-6 border-l border-amber-500/30 space-y-6">
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            At DreamSpace, we merge structural integrity with architectural beauty. With over a decade of experience in civil engineering, we specialize in commercial, residential, and urban infrastructure projects that stand the test of time.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Every project is a commitment to safety, innovation, and sustainable design. We don't just build structures; we engineer spaces that inspire the generations to come.
          </p>
        </div>
      </motion.div>

      {/* Architectural Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full relative z-10"
      >
        {/* Seamless Blueprint-style Grid */}
        <div className="grid grid-cols-2 border-t border-l border-slate-200 bg-white">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative p-10 border-r border-b border-slate-200 flex flex-col items-center justify-center text-center overflow-hidden bg-white"
            >
              {/* Hover Fill Effect */}
              <div className="absolute inset-0 bg-amber-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
              
              {/* Content (Z-10 to stay above hover effect) */}
              <div className="relative z-10 flex flex-col items-center transition-colors duration-500 group-hover:text-white">
                <div className="text-amber-500 text-3xl mb-5 transition-colors duration-500 group-hover:text-white">
                  {stat.icon}
                </div>
                <span className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 transition-colors duration-500 group-hover:text-white">
                  {stat.number}
                </span>
                <span className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white/90">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Frame Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>
      </motion.div>

    </section>
  );
};

export default About;