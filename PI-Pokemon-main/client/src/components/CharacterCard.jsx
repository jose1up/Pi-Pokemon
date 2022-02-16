import React from "react";
import s from "./CharacterCard.module.css";

export default function CharacterCard({
  id,
  name,
  types,
  img,
  life,
  strength,
  defense,
  speed,
  height,
  weight,
}) {
  return (
    <div className={s.contenedor}>
      <img className={s.img} src={img} alt={`imgane de pokemon${name}`} />
      <div className={s.div}>
        <h3>{name}</h3>
        <p>#{id}</p>
        <p> types : {types[1] ? types[0] + "  " + types[1] : types[0]} </p>
        {/* <p> life: {life}</p> */}
        <p className={s.Plife}>
          <label htmlFor="life"> life </label>
          <input
            className={s.inputlife}
            type="range"
            id="life"
            name="life"
            min="0"
            max="400"
            step="1"
            value={life}
          ></input>
          <output htmlFor="life">{life}</output>
        </p>
        {/* <p>strength: {strength}</p> */}
        <p>
          <label htmlFor="strength"> strength </label>
          <input
            type="range"
            id="strength"
            name="strength"
            min="0"
            max="400"
            step="1"
            value={strength}
          ></input>
          <output htmlFor="strength">{strength}</output>
        </p>
        {/* <p>defense:{defense}</p> */}
        <p>
          <label htmlFor="defense"> defense </label>
          <input
            type="range"
            id="defense"
            name="defense"
            min="0"
            max="400"
            step="1"
            value={defense}
          ></input>
          <output htmlFor="strength">{defense}</output>
        </p>

        {/* <p>speed:{speed}</p> */}

        <p>
          <label htmlFor="speed"> speed </label>
          <input
            type="range"
            id="speed"
            name="speed"
            min="0"
            max="400"
            step="1"
            value={speed}
          ></input>
          <output htmlFor="strength">{speed}</output>
        </p>
        <p>height: {height * 10} cm</p>
        <p>weight:{weight / 10} kg</p>
      </div>
    </div>
  );
}
