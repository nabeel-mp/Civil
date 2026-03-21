import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Router>
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="pt-20"><About /></div>} />
            <Route path="/works" element={<div className="pt-20"><Works /></div>} />
            <Route path="/clients" element={<div className="pt-20"><Clients /></div>} />
            <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;