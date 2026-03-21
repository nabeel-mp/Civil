import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHardHat, FaArrowRight, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin'); // Navigates to the Dashboard
      } else {
        setError(data.message || 'Authentication failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Server connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden font-sans">
      
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md z-10 group"
      >
        {/* Offset Wireframe Accent */}
        <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 pointer-events-none z-0"></div>

        {/* Main Content Container */}
        <div className="relative bg-slate-900 border border-white/10 p-10 md:p-12 z-10 shadow-2xl">
          
          {/* Header & Logo */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-4 mb-8 group/logo cursor-pointer">
              <div className="bg-amber-500/10 p-2.5 rounded-xl transition-all duration-500 group-hover/logo:bg-amber-500">
                <FaHardHat className="text-xl text-amber-400 group-hover/logo:text-slate-900 transition-colors duration-500" />
              </div>
              <span className="text-2xl font-serif tracking-tight text-white">
                Dream<span className="text-amber-500 italic">Space</span>.
              </span>
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Admin Portal</span>
              <span className="w-8 h-[1px] bg-amber-500"></span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">Welcome Back</h2>
          </div>

          {/* Error Message Display */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 text-sm font-medium"
            >
              <FaExclamationTriangle className="mt-0.5 flex-shrink-0 text-red-500" />
              <p>{error}</p>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="admin@dreamspace.com"
                className="w-full bg-slate-950 border border-white/10 px-5 py-4 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700" 
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Password
              </label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-white/10 px-5 py-4 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-700" 
              />
            </div>

            {/* Submit Button (Ghost Fill Style) */}
            <button 
              type="submit" 
              disabled={loading}
              className="group/btn relative w-full overflow-hidden border border-amber-500 mt-8 px-8 py-4 text-amber-500 uppercase tracking-[0.2em] text-[10px] font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 w-full h-full bg-amber-500 origin-bottom scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-4 group-hover/btn:text-slate-900 transition-colors duration-500">
                {loading ? (
                  <><FaSpinner className="animate-spin text-lg" /> Authenticating...</>
                ) : (
                  <>Sign In Securely <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" /></>
                )}
              </span>
            </button>
          </form>

        </div>
      </motion.div>
    </div>
  );
};

export default Login;