import React from "react";
import hero from "../../images/main.jpg";

const Hero = () => {
  return (
    <div>
      <section
        style={{
          float: "left",
          width: "25%",
          boxShadow: "10px 10px 0 rgba(60, 69, 67, .6)",
        }}
        className="left"
      >
        <img src={hero} alt="hero" />
      </section>
    </div>
  );
};

export default Hero;
