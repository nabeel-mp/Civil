import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaTrash, FaUsersSlash, FaSpinner } from 'react-icons/fa';

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
      } else throw new Error();
    } catch (err) {
      toast.error('Failed to add partner');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this partner?')) return;
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
    <div className="max-w-4xl mx-auto space-y-10 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Partners</h1>
        <p className="text-slate-500 mt-2">Add or remove trusted corporate clients.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-6">Add New Partner</h3>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input type="text" placeholder="Client Name (e.g. BuildCorp Inc.)" value={name} onChange={e => setName(e.target.value)} required className="flex-1 px-4 py-3.5 rounded-lg border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
          <button type="submit" disabled={adding} className="flex justify-center items-center gap-2 bg-slate-900 text-white font-bold px-10 py-3.5 rounded-lg hover:bg-amber-500 transition-colors disabled:opacity-70">
            {adding ? <FaSpinner className="animate-spin text-xl" /> : "Add"}
          </button>
        </form>
      </motion.div>

      {/* List State Handling */}
      {loading ? (
         <div className="flex justify-center items-center py-20">
           <FaSpinner className="animate-spin text-4xl text-amber-500" />
         </div>
      ) : clients.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl border border-gray-100 border-dashed p-20 flex flex-col items-center justify-center text-center shadow-sm">
           <div className="bg-slate-50 text-slate-300 p-6 rounded-full mb-4">
              <FaUsersSlash className="text-5xl" />
           </div>
           <h3 className="text-xl font-black text-slate-800 mb-2">No Partners Found</h3>
           <p className="text-slate-500 max-w-sm">Your client list is empty. Add your first trusted partner using the form above.</p>
        </motion.div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {clients.map((client, index) => (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} key={client._id} className={`p-6 flex justify-between items-center group transition-colors hover:bg-slate-50 ${index !== clients.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-lg">
                    {client.name.charAt(0)}
                 </div>
                 <span className="font-bold text-slate-700 tracking-wide">{client.name}</span>
              </div>
              <button onClick={() => handleDelete(client._id)} className="opacity-0 group-hover:opacity-100 bg-red-50 text-red-500 p-2.5 rounded hover:bg-red-500 hover:text-white transition-all" title="Remove">
                <FaTrash />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageClients;