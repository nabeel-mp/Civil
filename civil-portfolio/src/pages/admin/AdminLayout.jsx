import { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBuilding, FaUsers, FaSignOutAlt, FaChartPie } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

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

  const navClass = (path) => `flex items-center gap-3 px-6 py-3 font-bold transition-all ${location.pathname === path ? 'bg-amber-500 text-slate-900 border-r-4 border-slate-900' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`;

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Toast Notification Provider */}
      <Toaster position="top-right" toastOptions={{
        style: { background: '#0f172a', color: '#fff', padding: '16px', borderRadius: '12px' },
        success: { iconTheme: { primary: '#f59e0b', secondary: '#0f172a' } }
      }} />

      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 text-white flex flex-col border-r border-slate-800 shadow-2xl z-20">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-black tracking-tight">Dream<span className="text-amber-500">Space</span></h2>
          <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase mt-2 font-bold">Command Center</p>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-1">
          <Link to="/admin" className={navClass('/admin')}><FaChartPie /> Dashboard</Link>
          <Link to="/admin/works" className={navClass('/admin/works')}><FaBuilding /> Manage Works</Link>
          <Link to="/admin/clients" className={navClass('/admin/clients')}><FaUsers /> Manage Clients</Link>
        </nav>
        <button onClick={handleLogout} className="p-6 flex items-center gap-3 text-slate-400 hover:text-red-400 font-bold transition-colors border-t border-slate-800">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-10 bg-slate-50/50 relative">
        {/* Subtle background grid pattern for editorial feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"></div>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;