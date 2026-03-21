import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Works from './components/Works';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;