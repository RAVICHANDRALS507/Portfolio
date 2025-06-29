import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css'
import LeetCodeStats from './components/LeetCodeStats';
import GitHubStats from './components/GithubStats';
import BotpressChatbot from './components/BotpressChatbot';

const App = () => {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      
      <About />
      <GitHubStats />
      <Projects />
      <Education />
      
      <LeetCodeStats />
      <Certification />
      <Contact />
      <Footer />
      <BotpressChatbot />
    </div>
  );
};

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
