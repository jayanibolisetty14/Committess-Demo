import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommitteeDetailPage from './pages/CommitteeDetailPage';
import { ChevronDown } from 'lucide-react';

const Header = () => (
  <header>
    <div className="container">
      <nav className="nav-container">
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer py-5">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Enroll with us</h4>
          <ul>
            <li>How to apply</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About us</h4>
          <ul>
            <li>About REC</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Grow with us</h4>
          <ul>
            <li>Placements</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Innovation and Startup Policies</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in touch with us</h4>
          <ul>
            <li>info@raghuenggcollege.in</li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: var(--primary-color);
        color: white;
        padding: 50px 0;
        margin-top: 50px;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
      }
      .footer-col h4 {
        color: white;
        margin-bottom: 20px;
        font-size: 1.1rem;
        border-bottom: 2px solid rgba(255,255,255,0.2);
        display: inline-block;
        padding-bottom: 5px;
      }
      .footer-col ul li {
        margin-bottom: 10px;
        font-size: 0.9rem;
        opacity: 0.8;
      }
    `}</style>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/committee/:id" element={<CommitteeDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
