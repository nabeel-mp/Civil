import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaTrash, FaUsersSlash, FaSpinner, FaPlus, FaBuilding } from 'react-icons/fa';

const ManageClients = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const fetchClients = async () => {
    try {
      const res = await fetch('/api/clients');
      const data = await res.json();
      setClients(data);
    } catch (err) {
      toast.error("Failed to load clients");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchClients(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setAdding(true);
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name })
      });
      if(res.ok) {
        toast.success('Partner added successfully!');
        setName('');
        fetchClients();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Failed to add partner');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this partner?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      toast.success('Partner removed');
      fetchClients();
    } catch (err) {
      toast.error('Failed to remove partner');
    }
  };

  return (
    // Fixed Scrolling & Width applied here
    <div className="max-w-6xl mx-auto space-y-12 relative z-10 w-full pb-24 px-4 md:px-0 font-sans">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-[1px] bg-amber-500"></span>
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Partner Directory</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Manage Clients</h1>
        <p className="text-slate-500 mt-3 font-light text-lg">Add or remove trusted corporate partners and clients.</p>
      </motion.div>

      {/* Add Form Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="relative w-full group max-w-3xl"
      >
        {/* Offset Wireframe Accent */}
        <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 pointer-events-none z-0"></div>
        
        <div className="relative bg-white p-8 md:p-10 border border-gray-100 shadow-sm z-10">
          <div className="flex items-center gap-3 mb-8">
            <FaPlus className="text-amber-500" />
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Register New Partner</h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="w-full flex-1 space-y-2">
              <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Client Name</label>
              <input 
                type="text" 
                placeholder="e.g. BuildCorp Inc." 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                className="w-full px-5 py-4 rounded-none border border-gray-200 bg-slate-50 text-slate-900 focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={adding} 
              className="group/btn relative w-full sm:w-auto overflow-hidden border border-slate-900 px-10 py-4 h-[58px] text-slate-900 uppercase tracking-[0.2em] text-[10px] font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 w-full h-full bg-slate-900 origin-bottom scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors duration-500">
                {adding ? <FaSpinner className="animate-spin text-lg" /> : "Add Partner"}
              </span>
            </button>
          </form>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="py-6 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Active Partners</span>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      {/* Grid of Clients */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-4xl text-amber-500" />
        </div>
      ) : clients.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-gray-200 border-dashed p-20 flex flex-col items-center justify-center text-center shadow-sm">
           <div className="bg-slate-50 text-slate-300 p-6 rounded-full mb-6">
              <FaUsersSlash className="text-5xl" />
           </div>
           <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight">No Partners Found</h3>
           <p className="text-slate-500 max-w-md font-light">Your client list is currently empty. Add your first trusted partner using the form above.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.05, duration: 0.4 }} 
              key={client._id} 
              className="group relative bg-white p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-between"
            >
              {/* Left Side: Monogram & Name */}
              <div className="flex items-center gap-5 overflow-hidden">
                <div className="w-12 h-12 shrink-0 bg-slate-50 border border-gray-100 text-amber-500 flex items-center justify-center font-serif text-xl italic group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500">
                  {client.name.charAt(0).toUpperCase()}
                </div>
                <div className="truncate">
                  <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Partner
                  </p>
                  <h4 className="font-bold text-slate-900 tracking-tight truncate pr-4 transition-transform duration-300 group-hover:-translate-y-1">
                    {client.name}
                  </h4>
                </div>
              </div>

              {/* Right Side: Delete Action */}
              <button 
                onClick={() => handleDelete(client._id)} 
                className="shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300" 
                title="Remove Partner"
              >
                <FaTrash className="text-sm" />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageClients;