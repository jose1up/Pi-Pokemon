import React from "react";
import { useDispatch } from "react-redux";
import { orderPokemon } from "../redux/actions";

export default function () {
  const dispatch = useDispatch();
  function onSelectsChange(e) {
    dispatch(orderPokemon(e.target.value));
  }
  return (
    <div>
      <select name="select" onChange={onSelectsChange}>
        <option>Sort</option>
        <option value="all">all</option>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
        <option value="strengthDes">Max Fuerza</option>
        <option value="strengthAsc">Min Fuerza</option>
      </select>
    </div>
  );
}
