import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./lower-center-deck.css";

// 🎯 Manually curated list of projects
const myProjects = [
  {
    title: "Secure PWA",
    description: "Flutter + AES/RSA encryption, Riverpod, WebView Bridge.",
    url: "https://github.com/el-dog/secure-pwa"
  },
  {
    title: "School Manager",
    description: "Spring Boot + JWT + MapStruct + Swagger.",
    url: "https://github.com/el-dog/school-manager"
  },
  {
    title: "Face Auth Vault",
    description: "Offline IoT Media Vault with biometric + face auth.",
    url: "https://github.com/el-dog/face-auth-vault"
  },
  {
    title: "Flutter Dashboard",
    description: "Responsive shell with role-based access control.",
    url: "https://github.com/el-dog/flutter-dashboard"
  },
  // Add more projects here
];

export default function LowerCenterDeck() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
