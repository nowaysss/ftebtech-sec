"use client";

import { useEffect, useState } from "react";
import "../../styles/components/Hero/HeroSection.scss";
import headphone from "../../assets/images/headphone.png";
import laptop from "../../assets/images/Microsoft365.png";
import mouse from "../../assets/images/mouse.png";
import watch from "../../assets/images/watch.png";
import keyboard from "../../assets/images/keyboard.png";
import devopsImage from "../../assets/images/32dbb8eb-31d7-4ca1-91d7-16534290b2d1.jpg";
import azureImage from "../../assets/images/e16e8483-9a58-4e49-8c0d-ef5857f48512.jpg";
import awsImage from "../../assets/images/4f8f8e0b-2d88-444e-b37f-43eeea3f4283.jpg";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setImagesLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="landing-page">
      <main>
        <div className="content">
          <h1 className="headingglogo">Future Technology Empowering Business </h1>
          <span className="subtitle">TECHNOLOGY AND SOFTWARE</span>
          <h2>
            Your All-in-One IT Partner for Software, Cloud, Hardware, and
            Beyond.
          </h2>
        </div>

        <div className="images-container">
          {/* Original Images */}
          <div
            className={`image-wrapper headphones ${
              imagesLoaded ? "loaded" : ""
            }`}
          >
            <img src={headphone} alt="Headphones" className="accessory-image" />
          </div>

          <div
            className={`image-wrapper laptop ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={laptop} alt="Laptop Mockup" className="laptop-image" />
          </div>

          <div
            className={`image-wrapper mouse ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={mouse} alt="Mouse" className="accessory-image" />
          </div>

          <div
            className={`image-wrapper watch ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={watch} alt="Watch" className="accessory-image" />
          </div>

          <div
            className={`image-wrapper keyboard ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={keyboard} alt="Keyboard" className="accessory-image" />
          </div>

          {/* New Images */}
          <div
            className={`image-wrapper devops ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={devopsImage} alt="DevOps Solutions" className="tech-image" />
          </div>

          <div
            className={`image-wrapper azure ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={azureImage} alt="Azure Services" className="tech-image" />
          </div>

          <div
            className={`image-wrapper aws ${imagesLoaded ? "loaded" : ""}`}
          >
            <img src={awsImage} alt="AWS Services" className="tech-image" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;