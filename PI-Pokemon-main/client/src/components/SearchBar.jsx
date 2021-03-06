import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findPokemon } from "../redux/actions";
import s from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("el campo de busqueda esta vacio");
      return false;
    }
    dispatch(findPokemon(name));
    setName("");
    e.target.reset()

    ;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={handleInputChange}
          placeholder="Search pokemon..."
        />
        <button className={s.btn} type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
}
