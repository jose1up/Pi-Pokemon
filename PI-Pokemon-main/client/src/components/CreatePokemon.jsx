import React from "react";
import { getTipes } from "../redux/actions";
import { postPokemon } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./CreatePokemon.module.css";

function validate(pokemon) {
  let URL = /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/;
  let regex = /^(?![ .]+$)[a-zA-Z .]*$/gm;

  let errors = {};
  if (!pokemon.name) {
    errors.name = "(*)Se requiere un nombre";
  }
  if (!pokemon.img) {
    errors.img = "Debes agregar una imagen url o se agregara una por defecto";
  } else if (!URL.test(pokemon.img)) {
    errors.img = "la imagen tiene que ser una url ";
  }
  if (!regex.test(pokemon.name)) {
    errors.name = "(*)el nombre no debe tener caracteres especiale ni nuemeros";
  }

  return errors;
}

export default function CreatePokemon() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const types = useSelector((state) => state.types);
  const [pokemon, setpokemon] = useState({
    name: "",
    img: "",
    types: [],
    life: 0,
    strength: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getTipes());
  }, []);

  function handleSelect(e) {
    e.preventDefault();
    if (!pokemon.types.includes(e.target.value)) {
      setpokemon({
        ...pokemon,
        types: [...pokemon.types, e.target.value],
      });
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setpokemon({
      ...pokemon,
      types: pokemon.types.filter((a) => a !== e.target.name),
    });
  }

  function onInputChange(e) {
    e.preventDefault();
    setpokemon({
      ...pokemon,
      [e.target.name]: e.target.value.toLowerCase(),
    });
    setErrors(
      validate({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(pokemon));
    alert("personaje creado");
    setpokemon({
      name: "",
      img: "",
      types: [],
      life: 0,
      strength: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
    navigate("/Home");
  }

  return (
    <div className={s.conteiner}>
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.label}>Nombre</label>
        <input
          className={s.input}
          id="name"
          name="name"
          type="text"
          value={pokemon.name}
          onChange={onInputChange}
        ></input>
        {errors.name && <p className={s.errorsName}> {errors.name}</p>}
        <label className={s.label}>Imagen </label>
        <input
          className={s.input}
          onChange={onInputChange}
          name="img"
          type="text"
          value={pokemon.img}
        />
        {errors.img && <p className={s.errorsImg}> {errors.img}</p>}
        <label className={s.label}>Fuerza </label>
        <input
          className={s.input}
          onChange={onInputChange}
          name="strength"
          type="number"
          min="0"
          value={pokemon.strength}
        />
        <label className={s.label}>Defensa </label>
        <input
          className={s.input}
          onChange={onInputChange}
          name="defense"
          type="number"
          min="0"
          value={pokemon.defense}
        />
        <label className={s.label}>Velocidad </label>
        <input
          className={s.input}
          onChange={onInputChange}
          name="speed"
          type="number"
          min="0"
          value={pokemon.speed}
        />
        <label className={s.label}>Vida </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          min="0"
          value={pokemon.life}
          className={s.input}
        />
        <label className={s.label}>Altura </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          min="0"
          value={pokemon.height}
          className={s.input}
        />
        <label className={s.label}>Peso </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          min="0"
          value={pokemon.weight}
          className={s.input}
        />
        <div>
          <select className={s.select} onChange={handleSelect}>
            {types.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <div>
            {pokemon.types.map((e) => (
              <div className={s.types} key={e}>
                {e}
                <button className={s.typesBtn} name={e} onClick={(e) => handleDelete(e)}>
                  X
                </button>
              </div>
            ))}
          </div>

          <div className={s.conteinerButton}>
            <Link to="/home">
              <button type="submit" className={s.btnAtras}>Atrás</button>
            </Link>
            <button type="submit"  className={s.btnCrear}>Crear</button>
          </div>
        </div>
      </form>{" "}
    </div>
  );
}
