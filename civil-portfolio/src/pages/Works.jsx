import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Works = ({ limit }) => {
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/works')
      .then(res => res.json())
      .then(data => setWorks(data))
      .catch(err => console.error("Error fetching works:", err));
  }, []);

  const displayedWorks = limit ? works.slice(0, limit) : works;

  return (
    <section className="py-32 px-6 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <span className="w-16 h-[1px] bg-amber-500"></span>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05]">
              Featured <br />
              <span className="font-serif font-light italic text-amber-500 pr-2">Projects</span>
            </h2>
          </div>
          
          {/* Ghost Button */}
          {limit && (
            <button 
              onClick={() => navigate('/works')}
              className="group relative overflow-hidden border border-slate-900 px-8 py-4 text-slate-900 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:border-amber-500"
            >
              <span className="absolute inset-0 w-full h-full bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-500">
                View All Projects 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>
          )}
        </div>
        
        {/* Staggered Architectural Grid */}
       <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {displayedWorks.map((work, index) => {
            const isStaggered = index % 2 !== 0; 
            return (
              <motion.div
                key={work._id} // FIX: Changed work.id to work._id for MongoDB
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative cursor-pointer w-full ${isStaggered ? 'md:mt-32' : ''}`}
              >
                {/* Offset Wireframe Accent */}
                <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/30 -translate-x-4 -translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none z-0"></div>

                {/* Main Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900 z-10 shadow-xl">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  />
                  
                  {/* Inner Frame */}
                  <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
                </div>
                
                {/* Editorial Info Plate */}
                <div className="absolute bottom-0 left-0 bg-white p-8 w-[85%] z-20 transform origin-bottom-left translate-y-4 group-hover:translate-y-0 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.3em] block mb-3">
                    {work.category}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-500">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Works;