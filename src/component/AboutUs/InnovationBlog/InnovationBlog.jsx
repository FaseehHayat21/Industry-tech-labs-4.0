import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InnovationBlog.css';
import aiOrganization from '../../../assets/ScalingAI.png';
import ecommerce3D from '../../../assets/ModellingEffect.png';

const InnovationBlog = () => {
  const navigate = useNavigate();
  
  const blogs = [
    { 
      title: 'How to Scale AI in Your Organization', 
      image: aiOrganization,
      id: 'scaling-ai'
    },
    { 
      title: '3D Modelings Effects on the E-commerce Industry', 
      image: ecommerce3D,
      id: '3d-modeling-ecommerce'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : blogs.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < blogs.length - 1 ? prevIndex + 1 : 0));
  };

  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const visibleBlogs = blogs.slice(currentIndex, currentIndex + 2);

  return (
    <section className="founders-section">
      <div className="banner">
        <h1>Innovation Blog</h1>
      </div>
      {/*  */}
      <div className="course-slider">
        <h2>Insights <span>for You</span></h2>
        <p>Stay informed and inspired!</p>
        <div className="slider-container">
          <button className="nav-button left" onClick={handlePrev}>&lt;</button>
          <div className="course-cards" style={{ justifyContent: visibleBlogs.length === 2 ? 'center' : 'flex-start' }}>
            {visibleBlogs.map((blog, index) => (
              <div 
                className="course-card cursor-pointer hover:shadow-lg transition-shadow"
                key={index}
                onClick={() => handleCardClick(blog.id)}
              >
                <div className="course-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="course-type">Blog</div>
                </div>
                <div className="course-details">
                  <h3>{blog.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-button right" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default InnovationBlog;