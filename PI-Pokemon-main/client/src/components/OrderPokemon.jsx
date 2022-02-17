import React from "react";
import { useDispatch } from "react-redux";
import { orderPokemon } from "../redux/actions";
import s from "./OrderPokemon.module.css"

export default function () {
  const dispatch = useDispatch();
  function onSelectsChange(e) {
    dispatch(orderPokemon(e.target.value));
  }
  return (
    <div>
      <select className={s.contenedor} name="select" onChange={onSelectsChange}>
        <option>Sort</option>
        <option value="all">all</option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
        <option value="strengthDes">Max Fuerza</option>
        <option value="strengthAsc">Min Fuerza</option>
      </select>
    </div>
  );
}
