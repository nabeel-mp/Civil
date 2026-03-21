import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import AbstractStructure from '../components/3d/AbstractStructure';
import bgImage from '../assets/images/construction-bg.jpg'; 
import profileImage from '../assets/images/profile.png';  
import About from './About';
import Works from './Works';
import Clients from './Clients';
import Contact from './Contact';

const Home = () => {
  return (
    // Changed to a standard wrapper so the page can actually scroll
    <main className="w-full bg-neutral-950 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Gradient to fade seamlessly into the sections below */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/80 to-neutral-950" />

        {/* 3D Canvas Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <AbstractStructure />
            <Environment preset="city" />
          </Canvas>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative"
          >
            {/* Ambient glow behind text */}
            <div className="absolute -inset-10 bg-neutral-800/20 blur-3xl rounded-full z-[-1]"></div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
              Engineering <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                Tomorrow's
              </span> <br/> 
              Horizons.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 font-light border-l-2 border-gray-600 pl-4">
              Expert civil engineering, structural design, and innovative spaces by DreamSpace.
            </p>
            
            {/* Upgraded Button */}
            <button className="group relative px-8 py-4 bg-transparent text-white font-semibold tracking-wide pointer-events-auto overflow-hidden">
              <span className="absolute inset-0 border border-white/30 rounded-full group-hover:border-white transition-colors duration-300"></span>
              <span className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Projects 
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-1 flex justify-center mt-16 md:mt-0 pointer-events-auto relative"
          >
            {/* Ambient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[450px] md:h-[450px] bg-gray-600/10 blur-[80px] rounded-full z-0"></div>

            {/* Floating animation for the image container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
            >
              <img 
                src={profileImage} 
                alt="Civil Engineer Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 ease-out" 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
        >
          <span className="text-gray-500 text-xs tracking-[0.2em] uppercase font-semibold">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>

      </section>

      {/* --- SUBSEQUENT SECTIONS --- */}
      {/* These will now scroll perfectly below the hero */}
      <About />
      <Works />
      <Clients />
      <Contact />
      
    </main>
  );
};

export default Home;