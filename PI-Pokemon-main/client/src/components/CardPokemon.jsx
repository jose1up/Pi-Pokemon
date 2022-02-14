import React from "react";
import { Link } from "react-router-dom";
import style from "./CardPokemon.module.css";

export default function CardPokemon({ id, name, img, types }) {
  return (
    <div className={style.div}>
      <div className={style.card}>
        <img
          className={style.img}
          src={img}
          alt={`imagen del pokemon ${name}`}
        />
        <h2 className={style.h3}>{name}</h2>
        <p className={style.p}>
          {types[1] ? types[0] + " / " + types[1] : types[0]}
        </p>
        <Link to={`/Pokemons/${id}`}>
          <button className={style.button}>Details</button>
        </Link>
      </div>
    </div>
  );
}
