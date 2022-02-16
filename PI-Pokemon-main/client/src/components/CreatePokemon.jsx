import React from "react";
import { getTipes } from "../redux/actions";
import { postPokemon } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function validate(pokemon) {
  let URL = /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/;
  let regex = /^(?![ .]+$)[a-zA-Z .]*$/gm;

  let errors = {};
  if (!pokemon.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!pokemon.img) {
    errors.img = "Debes agregar una imagen url o se agregara una por defecto";
  } else if (!URL.test(pokemon.img)) {
    errors.img = "la imagen tiene que ser una url ";
  }
  if (!regex.test(pokemon.name)) {
    errors.name = "el nombre no debe tener caracteres";
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
    <div>
      <form onSubmit={onSubmit}>
        <label>Nombre:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={pokemon.name}
          onChange={onInputChange}
        ></input>
        {errors.name && <p className="error"> {errors.name}</p>}
        <label>Imagen: </label>
        <input
          onChange={onInputChange}
          name="img"
          type="text"
          value={pokemon.img}
          className="input"
        />
        {errors.img && <p className="error"> {errors.img}</p>}
        <label>Fuerza: </label>
        <input
          onChange={onInputChange}
          name="strength"
          type="number"
          value={pokemon.strength}
          className="input"
        />
        <label>Defensa: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
          className="input"
        />
        <label>Velocidad: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
          className="input"
        />
        <label>Altura: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
          className="input"
        />
        <label>Vida: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
          className="input"
        />
        <label>Peso: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
          className="input"
        />
        <div className="types-s">
          <select onChange={handleSelect}>
            {types.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <Link to="/home">
          <button type="submit">Atrás</button>
        </Link>
        <button type="submit">Crear</button>
      </form>{" "}
      <div>
        {pokemon.types.map((e) => (
          <div key={e}>
            {e}
            <button name={e} onClick={(e) => handleDelete(e)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
