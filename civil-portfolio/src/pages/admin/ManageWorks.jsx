import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaTrash, FaFolderOpen, FaSpinner } from 'react-icons/fa';

const ManageWorks = () => {
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', image: '' });
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const fetchWorks = async () => {
    try {
      const res = await fetch('/api/works');
      const data = await res.json();
      setWorks(data);
    } catch (err) {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWorks(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdding(true);
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch('/api/works', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        toast.success('Project added successfully!');
        setForm({ title: '', category: '', image: '' });
        fetchWorks();
      } else throw new Error();
    } catch (err) {
      toast.error('Failed to add project');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      await fetch(`/api/works/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      toast.success('Project deleted');
      fetchWorks();
    } catch (err) {
      toast.error('Failed to delete project');
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Works</h1>
        <p className="text-slate-500 mt-2">Add or remove projects from your portfolio.</p>
      </motion.div>

      {/* Add Form */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-6">Add New Project</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="text" placeholder="Project Title (e.g. Skyline Tower)" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
          <input type="text" placeholder="Category (e.g. Commercial)" value={form.category} onChange={e => setForm({...form, category: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
          <input type="url" placeholder="Image URL (Unsplash, etc)" value={form.image} onChange={e => setForm({...form, image: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
          <button type="submit" disabled={adding} className="md:col-span-3 flex justify-center items-center gap-2 bg-slate-900 text-white font-bold py-3.5 rounded-lg hover:bg-amber-500 transition-colors disabled:opacity-70">
            {adding ? <FaSpinner className="animate-spin text-xl" /> : "Publish Project"}
          </button>
        </form>
      </motion.div>

      {/* List State Handling */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-4xl text-amber-500" />
        </div>
      ) : works.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl border border-gray-100 border-dashed p-20 flex flex-col items-center justify-center text-center shadow-sm">
           <div className="bg-slate-50 text-slate-300 p-6 rounded-full mb-4">
              <FaFolderOpen className="text-5xl" />
           </div>
           <h3 className="text-xl font-black text-slate-800 mb-2">No Projects Found</h3>
           <p className="text-slate-500 max-w-sm">You haven't uploaded any works yet. Use the form above to add your first portfolio piece.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} key={work._id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
              </div>
              <div className="p-5 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 truncate pr-4">{work.title}</h4>
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1">{work.category}</p>
                </div>
                <button onClick={() => handleDelete(work._id)} className="bg-red-50 text-red-500 p-3 rounded-lg hover:bg-red-500 hover:text-white transition-colors" title="Delete">
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageWorks;