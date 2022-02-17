import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonTypes, getTipes } from "../redux/actions";
import s from "./FilterPokemon.module.css"

export default function FilterPokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getTipes());
  }, []);
  const handleFilterType = (e) => {
    dispatch(filterPokemonTypes(e.target.value));
  };

  return (
    <div>
      <select className={s.contenerdor} onChange={(e) => handleFilterType(e)}>
        <option value="all">Types</option>
        {types.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}
