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
    // Lenis wraps the app for premium smooth scrolling
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Router>
        <div className="bg-neutral-950 text-gray-200 min-h-screen font-sans selection:bg-gray-700">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;