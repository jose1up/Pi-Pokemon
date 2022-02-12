import React from "react";
import { Link } from "react-router-dom";
import ImgLanding from "../image/pokemon-background-pictures-20.jpg";

export const LandingPage = () => {
  return (
    <div>
      <h1> Hola soy LandingPage</h1>{" "}
      <Link to={"/Home"}>
        {" "}
       <img src={ImgLanding} alt="Imagen de la Landing" /> 
      </Link>
      
    </div>
  );
};
