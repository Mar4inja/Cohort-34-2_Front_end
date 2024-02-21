import React from "react";
import hero from "../../images/main.jpg";
import { MainProps } from "./Main";


const Hero = () => {
  return (
    <div>
    <section className="float-start me-3 w-25" >
        <img className="w-100 " src={hero} alt="hero" />
      </section>
    </div>
  );
};

export default Hero;
