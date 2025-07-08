import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/lower-center-deck.css";
import {motion} from "framer-motion";


const myProjects = [
  {
    title: "School Management System",
    description: "Spring Boot + JWT + Role Based + OpenAPI.",
    url: "https://github.com/EL-dog/schoolManagement"
  },
  {
    title: "Custom Layout RecyclerView ",
    description: "Android RecyclerView with custom layouts.Java",
    url: "https://github.com/EL-dog/CustomLayoutRecyclerView"
  },
  {
    title: "Portfolio Website React",
    description: "My personal portfolio website built with React.",
    url: "https://github.com/EL-dog/portfolio_react"
  },
  {
    title: "Portfolio Website Flutter Web",
    description: "My personal portfolio website built with Flutter Web.",
    url: "https://github.com/EL-dog/MyPortfolio"
  },
  {
    title: "Admin Dashboard",
    description: "Admin dashboard with user management and analytics.",
    url: "https://github.com/EL-dog/AdmiDashboard"
  },
  
];

export default function LowerCenterDeck() {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <Slider {...settings}>
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
