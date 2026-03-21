import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHardHat } from 'react-icons/fa';

const NavLink = ({ to, children, isHome }) => (
  <Link 
    to={to} 
    className={`relative group px-1 py-2 overflow-hidden ${isHome ? 'text-gray-200' : 'text-slate-600'}`}
  >
    <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-500">
      {children}
    </span>
    {/* Elegant animated underline */}
    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-500 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // Using a custom cubic-bezier for a very premium, buttery smooth drop-in
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isHome 
          ? 'bg-gradient-to-b from-slate-900/80 to-transparent py-6' // cleaner home look without a harsh border
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand / Logo Setup */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className={`p-2.5 rounded-xl transition-all duration-500 ease-out ${isHome ? 'bg-amber-500/10' : 'bg-slate-100 group-hover:bg-amber-500'}`}>
            <FaHardHat className={`text-xl transition-colors duration-500 ${isHome ? 'text-amber-400' : 'text-slate-400 group-hover:text-white'}`} />
          </div>
          
          {/* Using font-serif for an architectural/editorial feel */}
          <span className={`text-2xl font-serif tracking-tight ${isHome ? 'text-white' : 'text-slate-900'}`}>
            Dream<span className="text-amber-500 italic">Space</span>.
          </span>
        </Link>

        {/* Links - Highly tracked uppercase for an editorial look */}
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase">
          <NavLink to="/" isHome={isHome}>Home</NavLink>
          <NavLink to="/about" isHome={isHome}>About</NavLink>
          <NavLink to="/works" isHome={isHome}>Works</NavLink>
          <NavLink to="/clients" isHome={isHome}>Clients</NavLink>
          <NavLink to="/contact" isHome={isHome}>Contact</NavLink>
        </div>
        
        {/* Mobile Menu Button (Optional visual addition) */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group p-2">
          <span className={`w-6 h-[2px] block transition-colors ${isHome ? 'bg-white' : 'bg-slate-900'}`}></span>
          <span className={`w-4 h-[2px] block transition-all group-hover:w-6 ${isHome ? 'bg-white' : 'bg-slate-900'}`}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;