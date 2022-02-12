import React from "react";

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
    <div>
      <img src={img} alt={`imgane de pokemon${name}`} />
      <p>{id}</p>
      <p>name:{name}</p>
      <p>{types[1] ? types[0] + " / " + types[1] : types[0]} </p>
      <p> life: {life}</p>
      <p>strength: {strength}</p>
      <p>defense:{defense}</p>
      <p>speed:{speed}</p>
      <p>height: {height * 10} cm</p>
      <p>weight:{weight / 10} kg</p>
    </div>
  );
}
