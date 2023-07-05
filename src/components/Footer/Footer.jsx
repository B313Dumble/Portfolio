import React from "react";
import "./Footer.css";

const Footer = () => {
  const sites = [
    {
      name: "Movies",
      url: "https://mellifluous-puffpuff-ecfc50.netlify.app/",
      image: "img/portfolio-05.jpg",
    },
    {
      name: "Shoping",
      url: "https://maisuradze-crwn-clothing.netlify.app/",
      image: "img/portfolio-04.jpg",
    },
    {
      name: "Meme Generation",
      url: "https://animated-tulumba-1186ff.netlify.app/",
      image: "img/portfolio-06.jpg",
    },
    {
      name: "Notes",
      url: "https://astounding-moonbeam-c27570.netlify.app/",
      image: "img/portfolio-08.jpg",
    },
    {
      name: "Modes",
      url: "https://heroic-longma-a8a30e.netlify.app/",
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
