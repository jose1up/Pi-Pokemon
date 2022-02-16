import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";
import logo from "../image/pokemon-logo.gif";
import pokemon from "../image/15c.gif";

export const LandingPage = () => {
  return (
    <div className={s.containerLanding}>
      <Link to={"/Home"}>
        <div>
          <p>
            <img className={s.logo} src={logo} alt="logo" />
          </p>
          <p>
            <img className={s.pokemon} src={pokemon} alt="pokemon"></img>
          </p>
          <p>
            <button className={s.button}>ingresar</button>
          </p>
        </div>
      </Link>
    </div>
  );
};
