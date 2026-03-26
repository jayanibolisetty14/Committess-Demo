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
      </div>
    </Router>
  );
}

export default App;

