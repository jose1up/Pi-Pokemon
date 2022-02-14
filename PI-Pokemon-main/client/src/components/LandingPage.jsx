import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={s.containerLanding}>
      <Link to={"/Home"}>
        <button className={s.button}>ingresar</button>
      </Link>
    </div>
  );
};
