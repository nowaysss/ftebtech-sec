"use client";

import { useEffect, useState } from "react";
import "../../styles/components/Hero/HeroSection.scss";
import headphone from "../../assets/images/headphone.png";
import laptop from "../../assets/images/Microsoft365.png";
import mouse from "../../assets/images/mouse.png";
import watch from "../../assets/images/watch.png";
import keyboard from "../../assets/images/keyboard.png";
import devopsImage from "../../assets/images/ProductLogos/dev.png";
import azureImage from "../../assets/images/ProductLogos/azure.png";
import awsImage from "../../assets/images/ProductLogos/aws.png";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const firstAnimationDone = localStorage.getItem("firstAnimationDone");

    if (!firstAnimationDone) {
      // Trigger animation after component mounts
      const timer = setTimeout(() => {
        setImagesLoaded(true);
        localStorage.setItem("firstAnimationDone", "true");
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // Skip animation, set loaded immediately
      setImagesLoaded(true);
    }
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
