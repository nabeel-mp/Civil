import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaUsers, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({ works: 0, clients: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [worksRes, clientsRes] = await Promise.all([
          fetch('/api/works'), fetch('/api/clients')
        ]);
        const worksData = await worksRes.json();
        const clientsData = await clientsRes.json();
        
        // Handle array length safely
        setStats({ 
          works: worksData?.length || 0, 
          clients: clientsData?.length || 0 
        });
      } catch (error) {
        console.error('Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-12 relative z-10 w-full pb-20 px-4 md:px-0 font-sans">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Control Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Overview</h1>
          <p className="text-slate-500 mt-3 font-light text-lg">Welcome back to the DreamSpace admin portal.</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6">
        <StatCard 
          title="Total Projects" 
          count={stats.works} 
          icon={<FaFolderOpen />} 
          loading={loading} 
          delay={0.1}
          link="/admin/works"
          linkText="Manage Works"
        />
        <StatCard 
          title="Trusted Partners" 
          count={stats.clients} 
          icon={<FaUsers />} 
          loading={loading} 
          delay={0.2}
          link="/admin/clients"
          linkText="Manage Clients"
        />
      </div>
      
    </div>
  );
};

const StatCard = ({ title, count, icon, loading, delay, link, linkText }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full group"
  >
    {/* Offset Wireframe Accent (Architectural Theme) */}
    <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5 pointer-events-none z-0"></div>
    
    {/* Main Content Card */}
    <div className="relative bg-white border border-gray-100 p-8 md:p-12 flex flex-col justify-between h-full z-10 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
      
      {/* Card Header (Icon & Title) */}
      <div className="flex justify-between items-start mb-10">
        <div className="bg-slate-50 border border-gray-100 p-5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors duration-500 rounded-xl shadow-sm group-hover:shadow-md">
          <div className="text-3xl">
            {icon}
          </div>
        </div>
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right max-w-[120px] leading-relaxed group-hover:text-slate-600 transition-colors duration-500">
          {title}
        </h3>
      </div>

      {/* Metric Display */}
      <div>
        {loading ? (
          <div className="h-20 w-32 bg-slate-100 animate-pulse rounded-lg mb-2"></div>
        ) : (
          <div className="flex items-baseline gap-2 mb-2">
            <motion.p 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              {count}
            </motion.p>
            <span className="text-amber-500 font-black text-2xl md:text-3xl">+</span>
          </div>
        )}
      </div>

      {/* Action Link (Footer) */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link 
          to={link} 
          className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-amber-500 transition-colors duration-300 group/link"
        >
          {linkText}
          <FaArrowRight className="text-amber-500 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  </motion.div>
);

export default Dashboard;