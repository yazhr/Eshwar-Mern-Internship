import './header-portfolio.css';
import { Link } from 'react-router-dom';
 // If the image is in the src folder

function Header() {
  return (
    <header className="header">
      <h1 className="title">Yazhini R</h1>
      <p className="subtitle">AI/ML Enthusiast | Aspiring Software Engineer | Tech Innovator</p>
      <p className="bio">
        I'm a second-year Artificial Intelligence and Machine Learning undergraduate at 
        Sri Eshwar College of Engineering. Passionate about solving real-world problems 
        through technology and data-driven insights.
      </p>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/Area">Area of Interest</Link></li>
          <li><Link to="/social-links">Social Links</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
