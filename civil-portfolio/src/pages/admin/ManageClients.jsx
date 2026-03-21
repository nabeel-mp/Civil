import { useState, useEffect } from 'react';

const ManageClients = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');

  const fetchClients = async () => {
    const res = await fetch('/api/clients');
    const data = await res.json();
    setClients(data);
  };

  useEffect(() => { fetchClients(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ name })
    });
    setName('');
    fetchClients();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this client?')) return;
    const token = localStorage.getItem('adminToken');
    await fetch(`/api/clients/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchClients();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Clients</h1>
        <p className="text-slate-500 mt-2">Add or remove trusted partners.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input type="text" placeholder="Client Name (e.g. BuildCorp Inc.)" value={name} onChange={e => setName(e.target.value)} required className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-slate-50" />
          <button type="submit" className="bg-amber-500 text-slate-900 font-bold px-8 rounded-lg hover:bg-amber-400 transition-colors">Add Client</button>
        </form>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        {clients.map((client, index) => (
          <div key={client._id} className={`p-5 flex justify-between items-center ${index !== clients.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <span className="font-bold text-slate-700">{client.name}</span>
            <button onClick={() => handleDelete(client._id)} className="text-red-500 text-sm font-bold hover:underline">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClients;