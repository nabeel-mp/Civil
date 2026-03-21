import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers } from 'react-icons/fa';

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
        setStats({ works: worksData.length, clients: clientsData.length });
      } catch (error) {
        console.error('Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-12 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Overview</h1>
        <p className="text-slate-500 mt-2 font-medium">Welcome back to your command center.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <StatCard title="Total Projects" count={stats.works} icon={<FaBuilding />} loading={loading} />
        <StatCard title="Trusted Partners" count={stats.clients} icon={<FaUsers />} loading={loading} />
      </div>
    </div>
  );
};

const StatCard = ({ title, count, icon, loading }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-amber-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 z-0"></div>
    
    <div className="relative z-10">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">{title}</h3>
      {loading ? (
        <div className="h-10 w-16 bg-slate-200 animate-pulse rounded mt-2"></div>
      ) : (
        <p className="text-5xl font-black text-slate-900 group-hover:text-white transition-colors">{count}</p>
      )}
    </div>
    <div className="text-4xl text-amber-500 opacity-20 group-hover:opacity-100 group-hover:text-white transition-all z-10 transform group-hover:scale-110">
      {icon}
    </div>
  </motion.div>
);

export default Dashboard;