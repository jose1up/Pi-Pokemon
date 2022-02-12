import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../image/pngegg.png";
import { cleanDetail } from "../redux/actions";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const dispatch = useDispatch();

  function handleClean() {
    dispatch(cleanDetail());
  }
  return (
    <header>
      <Link to="/Home">
        <img className={style.logo} src={logo} alt="Logo pokemon" />
      </Link>
      <Link to="/Home">
        <span onClick={handleClean}>Home</span>
      </Link>
      <Link to="/CreatePokemon">
        <span>Create Pokemon </span>
      </Link>
    </header>
  );
};
