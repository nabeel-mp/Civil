import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error("Error fetching clients:", err));
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <div className="flex items-center gap-6 mb-6">
            <span className="w-12 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Partners</span>
            <span className="w-12 h-[1px] bg-amber-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Trusted By <br className="md:hidden" />
            <span className="font-serif font-light italic text-amber-500 px-2">Industry</span> Leaders
          </h2>
        </div>

        {/* Seamless Architectural Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-slate-200">
          {clients.map((client, index) => (
            <motion.div 
              key={client._id || index} // FIX: Used database _id for the React key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative px-6 py-16 bg-white border-r border-b border-slate-200 flex items-center justify-center text-center overflow-hidden"
            >
              {/* Elegant Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              
              {/* Subtle background shift on hover */}
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>

              {/* Client Text / Logo */}
              <span className="relative z-10 font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-[0.15em] text-xs sm:text-sm transition-colors duration-500">
                {client.name} {/* FIX: Extracting the 'name' property from the database object */}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;