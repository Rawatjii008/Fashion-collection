import React from "react";
import {AboutImg} from "../Constant/Allimages"

import '../Style/About.css'
const About = () => {
  return (
    <section className="about" id="abo">
      <div className="about-image">
        <img src={AboutImg} alt="Smartwatch" />
      </div>
      <div className="about-content">
        <h2>About Our Fashion Collection</h2>
        <p>
        Our latest fashion collection combines style, innovation, and comfort. Designed with premium fabrics and smart tailoring, it adapts effortlessly to your everyday needs.
        </p>
        <p>
        Stay ahead with breathable materials, versatile designs, and a perfect balance of elegance and functionality. Elevate your wardrobe with fashion that blends sophistication and convenience.
        </p>
      </div>
    </section>
  );
};

export default About;
