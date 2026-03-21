import { motion, useScroll, useTransform } from 'framer-motion';
import bgImage from '../assets/images/construction-bg.jpg'; 
import profileImage from '../assets/images/rahman.png';  
import About from './About';
import Works from './Works';
import Clients from './Clients';
import Contact from './Contact';

const Home = () => {
  const { scrollYProgress } = useScroll();
  // Slightly reduced parallax distance for smoother rendering
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <main className="w-full relative selection:bg-amber-500 selection:text-white bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        
        {/* OPTIMIZATION: Keep heavy blending overlays STATIC so they don't repaint on scroll */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Deep architectural overlay */}
          <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply"></div>
          {/* Subtle noise/texture overlay for a premium print feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* OPTIMIZATION: Only animate the raw image layer, using hardware acceleration */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none will-change-transform"
          style={{ y: bgY }}
        >
          <img 
            src={bgImage} 
            alt="Construction Background" 
            className="w-full h-[120%] object-cover grayscale opacity-70 -mt-[10%]" // Scale up slightly to prevent edges showing during parallax
            loading="eager"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Editorial Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-left pt-12 lg:pt-0"
          >
            {/* Minimalist Line Label */}
            <div className="flex items-center gap-6 mb-8">
              <span className="w-16 h-[1px] bg-amber-500"></span>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
                Structural Engineering
              </span>
            </div>
            
            {/* Mixed Typography Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              Building The <br />
              <span className="font-serif font-light italic text-amber-500 pr-4">
                Future
              </span> 
              Today.
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg mb-12 leading-relaxed font-light border-l border-white/20 pl-6">
              We specialize in transforming visionary blueprints into rock-solid realities. Excellence in commercial, residential, and urban infrastructure.
            </p>
            
            {/* Ghost Button with Magnetic Feel */}
            <button className="group relative overflow-hidden border border-white/30 px-10 py-4 text-white uppercase tracking-[0.2em] text-xs font-bold transition-all hover:border-amber-500">
              <span className="absolute inset-0 w-full h-full bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              <span className="relative z-10 flex items-center gap-4 group-hover:text-slate-900 transition-colors duration-500">
                Discover Our Work 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>
          </motion.div>

          {/* Architectural Profile Setup */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            {/* Premium Layered Composition */}
            <div className="relative w-full max-w-[400px] lg:ml-auto mt-16 lg:mt-0">
              
              {/* Abstract Architectural Backdrop Elements */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-amber-500/40 z-0"></div>
              <div className="absolute top-12 -right-12 w-32 h-32 bg-amber-500 z-0 shadow-lg shadow-amber-500/20"></div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 border border-white/20 z-0"></div>

              {/* OPTIMIZATION: Added will-change-transform to infinite animations */}
              {/* Main Image Container */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full aspect-[3/4] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-800 will-change-transform"
              >
                <img 
                  src={profileImage} 
                  alt="Lead Civil Engineer" 
                  className="w-full h-full object-cover object-top" 
                  loading="eager"
                />
                
                {/* Minimalist Inner Border for a framed look */}
                <div className="absolute inset-3 border border-white/10 pointer-events-none"></div>
              </motion.div>

              {/* Floating Glass Nameplate */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-6 md:-left-16 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl will-change-transform"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-[2px] bg-amber-500"></span>
                  <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Est. 2014</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-1">
                  AbduRahiman<span className="text-amber-500">.</span>
                </h3>
                <p className="text-gray-300 text-xs font-bold tracking-[0.2em] uppercase">Chief Civil Engineer & Founder</p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none hidden md:flex"
        >
          <span className="text-white text-[9px] tracking-[0.4em] uppercase font-bold opacity-50">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-amber-500"
            />
          </div>
        </motion.div>
      </section>

      {/* PAGE SECTIONS */}
      <div className="relative z-20 bg-slate-50">
        <About />
        <Works />
        <Clients />
        <Contact />
      </div>
      
    </main>
  );
};

export default Home;