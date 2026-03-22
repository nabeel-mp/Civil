import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaTrash, FaFolderOpen, FaSpinner, FaUpload, FaPlus } from 'react-icons/fa';

const ManageWorks = () => {
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', image: null });
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

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image) {
      toast.error("Please select an image file.");
      return;
    }

    setAdding(true);
    const token = localStorage.getItem('adminToken');

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('category', form.category);
    formData.append('image', form.image); 

    try {
      const res = await fetch('/api/works', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData 
      });

      if (res.ok) {
        toast.success('Project added successfully!');
        setForm({ title: '', category: '', image: null });
        e.target.reset(); 
        fetchWorks();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Failed to add project');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
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
    // Fixed Scrolling: Added pb-24, removed h-screen, ensured w-full and proper padding
    <div className="max-w-6xl mx-auto space-y-12 relative z-10 w-full pb-24 px-4 md:px-0 font-sans">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-[1px] bg-amber-500"></span>
          <span className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase">Portfolio Manager</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Manage Works</h1>
        <p className="text-slate-500 mt-3 font-light text-lg">Add, organize, and remove projects from your public portfolio.</p>
      </motion.div>

      {/* Add Form Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="relative w-full group"
      >
        {/* Offset Wireframe Accent */}
        <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 pointer-events-none z-0"></div>
        
        <div className="relative bg-white p-8 md:p-10 border border-gray-100 shadow-sm z-10">
          <div className="flex items-center gap-3 mb-8">
            <FaPlus className="text-amber-500" />
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Publish New Project</h3>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Input fields styled beautifully */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Project Title</label>
              <input 
                type="text" 
                placeholder="e.g. Skyline Tower" 
                value={form.title} 
                onChange={e => setForm({...form, title: e.target.value})} 
                required 
                className="w-full px-5 py-4 rounded-none border border-gray-200 bg-slate-50 text-slate-900 focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Category</label>
              <input 
                type="text" 
                placeholder="e.g. Commercial" 
                value={form.category} 
                onChange={e => setForm({...form, category: e.target.value})} 
                required 
                className="w-full px-5 py-4 rounded-none border border-gray-200 bg-slate-50 text-slate-900 focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Project Image</label>
              <div className="relative w-full h-[58px] border border-gray-200 bg-slate-50 flex items-center px-4 hover:border-amber-500 transition-colors cursor-pointer overflow-hidden focus-within:ring-1 focus-within:ring-amber-500">
                <FaUpload className="text-amber-500 mr-3 shrink-0" />
                <span className="text-sm text-slate-500 truncate flex-1 font-medium">
                  {form.image ? form.image.name : "Choose an image..."}
                </span>
                {/* Invisible native file input spanning the whole custom div */}
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange} 
                  required 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={adding} 
              className="group/btn relative w-full overflow-hidden border border-slate-900 mt-4 md:col-span-3 px-8 py-5 text-slate-900 uppercase tracking-[0.2em] text-[10px] font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 w-full h-full bg-slate-900 origin-bottom scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-white transition-colors duration-500">
                {adding ? <><FaSpinner className="animate-spin text-lg" /> Uploading...</> : "Publish Project"}
              </span>
            </button>
          </form>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="py-6 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Published Works</span>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      {/* Grid of Projects */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-4xl text-amber-500" />
        </div>
      ) : works.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-gray-200 border-dashed p-20 flex flex-col items-center justify-center text-center shadow-sm">
           <div className="bg-slate-50 text-slate-300 p-6 rounded-full mb-6">
              <FaFolderOpen className="text-5xl" />
           </div>
           <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight">No Projects Found</h3>
           <p className="text-slate-500 max-w-md font-light">Your portfolio is currently empty. Use the form above to add your first piece of work to the gallery.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.05, duration: 0.5 }} 
              key={work._id} 
              className="group relative bg-white overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                  {work.category}
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6 border-t border-gray-100">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-2">{work.title}</h4>
                
                <button 
                  onClick={() => handleDelete(work._id)} 
                  className="flex items-center justify-center gap-2 w-full bg-red-50 text-red-600 p-3 hover:bg-red-600 hover:text-white transition-colors duration-300 text-[10px] uppercase tracking-widest font-bold"
                >
                  <FaTrash className="text-sm" /> Remove Project
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