import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../image/pngegg.png";
import { cleanALlPokemon, cleanDetail, getAllPokemons } from "../redux/actions";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const dispatch = useDispatch();

  function handleClean() {
    dispatch(cleanDetail());
    dispatch(cleanALlPokemon());
    dispatch(getAllPokemons());
  }
  return (
    <header className={style.header}>
      <Link to="/Home">
        <span className={style.home} onClick={handleClean}>
          Home
        </span>
      </Link>
      <Link to="/Home">
        <img className={style.logo} src={logo} alt="Logo pokemon" />
      </Link>
      <Link to="/CreatePokemon">
        <span className={style.createPokemon}>Create Pokemon </span>
      </Link>
    </header>
  );
};
