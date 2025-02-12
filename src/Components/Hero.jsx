import React from "react";
import shopping from "../Constant/Allimages"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Timeless fashion that inspires confidence and adventure</h1>
        <p>"Our apparel is designed with precision and style, blending comfort with elegance."</p>
      
      </div>
      <div className="hero-image">
        <img src={shopping} alt="shopping" />
      </div>
    </section>
  );
};

export default Hero;
