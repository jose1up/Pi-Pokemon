import React from "react";
import { Link } from "react-router-dom";

export default function CardPokemon({ id, name, img, types }) {
  return (
    <div>
      <Link to={`/Pokemons/${id}`}>
        <img src={img} alt={`imagen del pokemon ${name}`} />
        <h3>{name}</h3>
        <p>{types[1] ? types[0] + " / " + types[1] : types[0]}</p>
      </Link>
    </div>
  );
}
