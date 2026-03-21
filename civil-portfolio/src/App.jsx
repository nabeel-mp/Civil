import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

// Import Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import ManageWorks from './pages/admin/ManageWorks';
import ManageClients from './pages/admin/ManageClients';
import Login from './pages/admin/Login';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Router>
        {/* Hide default Navbar if route starts with /admin */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>

        <div className="bg-slate-50 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-900">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="pt-20"><About /></div>} />
            <Route path="/works" element={<div className="pt-20"><Works /></div>} />
            <Route path="/clients" element={<div className="pt-20"><Clients /></div>} />
            <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              {/* These render inside the <Outlet /> in AdminLayout */}
              <Route path="works" element={<ManageWorks />} />
              <Route path="clients" element={<ManageClients />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;