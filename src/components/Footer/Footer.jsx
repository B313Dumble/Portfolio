import React from "react";
import "./Footer.css";

const Footer = () => {
  const sites = [
    {
      name: "Movies",
      url: "https://site1.com",
      image: "img/portfolio-05.jpg",
    },
    {
      name: "Shoping",
      url: "https://site2.com",
      image: "img/portfolio-04.jpg",
    },
    {
      name: "Meme Generation",
      url: "https://site3.com",
      image: "img/portfolio-06.jpg",
    },
    {
      name: "Notes",
      url: "https://site4.com",
      image: "img/portfolio-08.jpg",
    },
    {
      name: "Modes",
      url: "https://site5.com",
      image: "img/portfolio-02.jpg",
    },
  ];

  return (
    <footer className="footer">
      <h1 className="website-title">My Websites </h1>
      <div className="footer-content">
        {sites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <div className="site-info">
              <img src={site.image} alt={site.name} className="site-image" />
              <span className="site-name">{site.name}</span>
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
