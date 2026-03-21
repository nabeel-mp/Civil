import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import AbstractStructure from '../components/3d/AbstractStructure';
import bgImage from '../assets/images/construction-bg.jpg'; 
import profileImage from '../assets/images/rahman.png';  
import About from './About';
import Works from './Works';
import Clients from './Clients';
import Contact from './Contact';

const Home = () => {
  // Track scroll to slightly fade/shift the background as the user moves down
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.05, 0.15]);

  return (
    <main className="w-full bg-[#F5F4F0] font-sans text-neutral-950 relative selection:bg-black selection:text-white">
      
      {/* --- GLOBAL 3D & IMAGE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Photographic Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply"
          style={{ backgroundImage: `url(${bgImage})`, opacity: bgOpacity }}
        />
        
        {/* 3D Canvas Layer */}
        <div className="absolute inset-0 z-10 opacity-60">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 2]} intensity={2} color="#ffffff" />
            <AbstractStructure />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>

      {/* --- SCROLLABLE CONTENT LAYER --- */}
      <div className="relative z-20">
        
        {/* HERO SECTION */}
        <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-0">
          
          {/* Text Section (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Custom smooth easing
            className="flex-1 lg:pr-12 z-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-black"></div>
              <span className="text-black uppercase tracking-[0.3em] text-sm font-bold">DreamSpace</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-black text-black mb-8 tracking-tighter leading-[0.9]">
              Build <br/> 
              Beyond <br/> 
              Limits.
            </h1>
            
            <p className="text-neutral-600 text-lg sm:text-xl max-w-lg mb-12 font-medium leading-relaxed">
              Masterful civil engineering and structural design. We don't just draft blueprints; we engineer the reality of tomorrow's spaces.
            </p>
            
            {/* High-Contrast Brutalist Button */}
            <button className="group relative px-10 py-5 bg-black text-white font-bold tracking-[0.1em] uppercase overflow-hidden pointer-events-auto">
              <span className="absolute inset-0 w-full h-full bg-neutral-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>
          </motion.div>

          {/* MASSIVE Profile Image Section (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center lg:justify-end mt-16 lg:mt-0 w-full z-20 pointer-events-auto"
          >
            {/* The Monumental Arch Shape */}
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-[3/4] rounded-t-[300px] rounded-b-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-white">
              
              {/* Image with sleek grayscale-to-color interaction */}
              <img 
                src={profileImage} 
                alt="Lead Civil Engineer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out" 
              />
              
              {/* Overlay gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </section>

        {/* Animated Scroll Indicator (Dark mode version) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
        >
          <span className="text-black text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
          <div className="w-[1px] h-16 bg-black/20 overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-black"
            />
          </div>
        </motion.div>

        {/* --- SUBSEQUENT SECTIONS --- */}
        <div className="bg-[#F5F4F0] relative z-20">
          <About />
          <Works />
          <Clients />
          <Contact />
        </div>
      </div>
      
    </main>
  );
};

export default Home;