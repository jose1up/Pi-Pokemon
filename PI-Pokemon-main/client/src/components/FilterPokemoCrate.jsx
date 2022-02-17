import React from "react";
import { useDispatch } from "react-redux";
import { filterCreate } from "../redux/actions";
import s from "./FilterPokemoCrate.module.css"


export default function FilterPokemoCrate() {
  const dispatch = useDispatch();
  const handleFilterCreate = (e) => {
    dispatch(filterCreate(e.target.value));
  };

  return (
    <div>
      <select className={s.contenedor} onChange={(e) => handleFilterCreate(e)}>
        <option>Filter ... </option>
        <option value="all">all</option>
        <option value="Created">Created</option>
        <option value="API">API</option>
      </select>
    </div>
  );
}
