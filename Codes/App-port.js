import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App-port.css';
import Header from './header-portfolio';
import Contact from './contact-portfolio';
import SocialLinks from './SocialLinks';
import AboutMe from './AboutMe';
import Projects from './Project';
import {Area} from './Areaofinterest'; // Adjust the import

function App1() {
  return (
    <Router>
      <div className="portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<h2>Home page</h2>} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/social-links" element={<SocialLinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Area" element={<Area />} /> {/* Corrected */}
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
