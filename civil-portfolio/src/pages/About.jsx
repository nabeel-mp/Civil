import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Building the <br /> <span className="text-gray-500">Foundation of Tomorrow.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          At DreamSpace, we merge structural integrity with architectural beauty. With over a decade of experience in civil engineering, we specialize in commercial, residential, and urban infrastructure projects that stand the test of time.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Every project is a commitment to safety, innovation, and sustainable design. We don't just build structures; we engineer spaces that inspire.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 grid grid-cols-2 gap-6 w-full"
      >
        {[
          { number: "150+", label: "Projects Completed" },
          { number: "12", label: "Years Experience" },
          { number: "45", label: "Industry Awards" },
          { number: "100%", label: "Client Satisfaction" }
        ].map((stat, index) => (
          <div key={index} className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors">
            <span className="text-4xl font-bold text-white mb-2">{stat.number}</span>
            <span className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default About;