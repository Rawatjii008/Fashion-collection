import React from 'react';
import '../Style/Feauter.css'

const FeaturesData = [
  {
    title: "Adaptive Style & Comfort",
    des: "Experience the perfect blend of fashion and functionality, with fabrics that adjust to your movement effortlessly."
  },
  {
    title: "Smart Fabric Technology",
    des: "Enjoy clothing designed for comfort and breathability, keeping you fresh and stylish all day long."
  },
  {
    title: "Effortless Elegance",
    des: "Transition seamlessly from casual to formal with versatile outfits that match any occasion."
  },
  {
    title: "Wireless Convenience",
    des: "Stay connected with fashion-forward designs that integrate hidden pockets for your essentials."
  }
];

const Feature = () => {
  return (
    <section className="services" id="ser">
    <div className="FeatureContainer">
      <h1 className='FeatureHeadline'>Unlimited Features</h1>
      <div className="FeatureGrid">
        {FeaturesData.map((feature, index) => (
          <div key={index} className="FeatureCard">
            <h3 className="FeatureTitle">{feature.title}</h3>
            <p className="FeatureDescription">{feature.des}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Feature;
