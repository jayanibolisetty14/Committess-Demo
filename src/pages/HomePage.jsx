import React from 'react';
import { ChevronRight, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src=""C:\Users\jayan\OneDrive\Documents\college.jpeg"" 
            alt="Vignan's Nirula Engineering College" 
            className="hero-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="hero-overlay">
            <div className="container">
              <h1 className="hero-title">Non-Statutory Committees</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Committees List Section */}
      <section className="committees-section py-5">
        <div className="container">
          {categories.map((category) => (
            <div key={category.id} className="category-block mb-5">
              <h2 className="category-title mb-4">{category.title}</h2>
              <div className="committees-grid">
                {category.committees.map((committee) => (
                  <Link 
                    to={`/committee/${committee.id}`} 
                    key={committee.id} 
                    className="committee-item"
                  >
                    <ArrowRightCircle className="icon-red" size={24} />
                    <span>{committee.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        .hero-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          bottom: 20px;
          left: 0;
          background-color: rgba(0, 74, 153, 0.9);
          color: white;
          padding: 15px 40px;
          border-radius: 0 50px 50px 0;
          display: inline-block;
        }
        .hero-title {
          font-size: 2.2rem;
          margin: 0;
          color: white;
        }
        .committees-section {
          padding: 60px 0;
          background-color: #fff;
        }
        .category-title {
          font-size: 1.8rem;
          color: var(--primary-dark);
          border-left: 6px solid var(--primary-color);
          padding-left: 15px;
          margin-bottom: 30px;
          background: #f8f9fa;
          padding-top: 5px;
          padding-bottom: 5px;
        }
        .committees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          gap: 15px 40px;
        }
        .committee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.05rem;
          color: #333;
          padding: 8px 0;
          transition: transform 0.2s ease;
        }
        .committee-item:hover {
          transform: translateX(5px);
          color: var(--primary-color);
        }
        .icon-red {
          color: var(--secondary-color);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .committees-grid {
            grid-template-columns: 1fr;
          }
          .hero-overlay {
            padding: 10px 20px;
          }
          .hero-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
