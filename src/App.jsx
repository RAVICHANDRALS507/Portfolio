import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css'

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Education />
    <Certification />
    <Contact />
    <Footer />
  </div>
);

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
