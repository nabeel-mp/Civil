import { useState, useEffect } from 'react';

const ManageWorks = () => {
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', image: '' });

  const fetchWorks = async () => {
    const res = await fetch('/api/works');
    const data = await res.json();
    setWorks(data);
  };

  useEffect(() => { fetchWorks(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    await fetch('/api/works', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(form)
    });
    setForm({ title: '', category: '', image: '' });
    fetchWorks();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    const token = localStorage.getItem('adminToken');
    await fetch(`/api/works/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchWorks();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Works</h1>
        <p className="text-slate-500 mt-2">Add or remove projects from your portfolio.</p>
      </div>

      {/* Add Form */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-4">Add New Project</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="text" placeholder="Project Title (e.g. Skyline Tower)" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50" />
          <input type="text" placeholder="Category (e.g. Commercial)" value={form.category} onChange={e => setForm({...form, category: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50" />
          <input type="url" placeholder="Image URL (Unsplash, etc)" value={form.image} onChange={e => setForm({...form, image: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50" />
          <button type="submit" className="md:col-span-3 bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">Add Project</button>
        </form>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map(work => (
          <div key={work._id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-900">{work.title}</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{work.category}</p>
              </div>
              <button onClick={() => handleDelete(work._id)} className="text-red-500 text-sm font-bold hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageWorks;