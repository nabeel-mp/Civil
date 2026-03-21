import { motion } from 'framer-motion';

// This array will eventually be replaced by a fetch() call to your backend
const DUMMY_WORKS = [
  { id: 1, title: "Skyline Tower", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Echo Bridge", category: "Infrastructure", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Zenith Complex", category: "Residential", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Apex Arena", category: "Public Space", image: "https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=1000&auto=format&fit=crop" },
];

const Works = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Selected Works</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {DUMMY_WORKS.map((work, index) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            {/* Image Container with Zoom effect on hover */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
            </div>
            
            {/* Overlay Title */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-gray-400 text-sm uppercase tracking-wider block mb-2">{work.category}</span>
              <h3 className="text-2xl font-bold text-white">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;