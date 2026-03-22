import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBuilding, FaUsers, FaSignOutAlt, FaChartPie, FaBars, FaTimes, FaHardHat } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Authentication Check
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Close mobile menu automatically when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navClass = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-4 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden ${
      isActive 
        ? 'text-slate-900 bg-amber-500' 
        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-900'
    }`;
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* Toast Notification Provider (Customized to match theme) */}
      <Toaster position="top-right" toastOptions={{
        style: { 
          background: '#0f172a', 
          color: '#fff', 
          padding: '16px', 
          borderRadius: '0px', 
          border: '1px solid rgba(245,158,11,0.3)' 
        },
        success: { iconTheme: { primary: '#f59e0b', secondary: '#0f172a' } }
      }} />

      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950 border-b border-white/10 flex items-center justify-between px-6 z-40">
        <Link to="/admin" className="flex items-center gap-2">
          <FaHardHat className="text-amber-500 text-lg" />
          <span className="text-lg font-serif tracking-tight text-white">
            Dream<span className="text-amber-500 italic">Space</span>.
          </span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-amber-500 text-2xl p-2 -mr-2 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay Background */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation (Desktop Persistent, Mobile Drawer) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-white flex flex-col border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Header */}
        <div className="p-8 border-b border-white/10 hidden md:block">
          <Link to="/" className="inline-flex items-center gap-3 group/logo cursor-pointer mb-2">
            <div className="bg-amber-500/10 p-2 rounded transition-colors group-hover/logo:bg-amber-500">
              <FaHardHat className="text-amber-500 group-hover/logo:text-slate-900 transition-colors" />
            </div>
            <span className="text-2xl font-serif tracking-tight text-white">
              Dream<span className="text-amber-500 italic">Space</span>.
            </span>
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <span className="w-8 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 text-[9px] font-bold tracking-[0.3em] uppercase">Command Center</span>
          </div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 py-8 flex flex-col gap-2 overflow-y-auto mt-16 md:mt-0">
          <Link to="/admin" className={navClass('/admin')}>
            <FaChartPie className="text-lg z-10" /> 
            <span className="z-10">Dashboard</span>
            {location.pathname !== '/admin' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>}
          </Link>
          
          <Link to="/admin/works" className={navClass('/admin/works')}>
            <FaBuilding className="text-lg z-10" /> 
            <span className="z-10">Manage Works</span>
            {location.pathname !== '/admin/works' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>}
          </Link>
          
          <Link to="/admin/clients" className={navClass('/admin/clients')}>
            <FaUsers className="text-lg z-10" /> 
            <span className="z-10">Manage Partners</span>
            {location.pathname !== '/admin/clients' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>}
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-white/10 bg-slate-900/30">
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-4 w-full px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all rounded border border-transparent hover:border-red-500/30"
          >
            <FaSignOutAlt className="text-lg" /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative w-full pt-16 md:pt-0">
        
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10 fixed"></div>
        
        {/* Top gradient shadow for depth */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none hidden md:block"></div>

        {/* Page Content injected here via React Router */}
        <div className="p-6 md:p-12 lg:p-16 min-h-full">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;