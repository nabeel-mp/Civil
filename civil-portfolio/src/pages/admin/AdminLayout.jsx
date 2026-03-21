import { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBuilding, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navClass = (path) => `flex items-center gap-3 px-6 py-3 font-bold transition-all ${location.pathname === path ? 'bg-amber-500 text-slate-900' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`;

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-black tracking-tight">Dream<span className="text-amber-500">Space</span></h2>
          <p className="text-xs text-slate-400 tracking-widest uppercase mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-2">
          <Link to="/admin/works" className={navClass('/admin/works')}><FaBuilding /> Manage Works</Link>
          <Link to="/admin/clients" className={navClass('/admin/clients')}><FaUsers /> Manage Clients</Link>
        </nav>
        <button onClick={handleLogout} className="p-6 flex items-center gap-3 text-slate-400 hover:text-red-400 font-bold transition-colors border-t border-slate-800">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;