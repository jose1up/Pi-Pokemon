import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import CardPokemon from "./CardPokemon";
import PaginaDeCarga from "./PaginaDeCarga";
import Paginado from "./Paginado";
import s from "./Pokemons.module.css";

export default function Pokemons() {
  const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);
  React.useEffect(() => {
    dispatch(getAllPokemons()).then(() => setCarga(false));
  }, []); // me traigo la acion que deseo dispachar de mi acction
  const allPokemons = useSelector((state) => state.allPokemons); // me traigo el estado global de reducer

  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(12);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currenCharacters = allPokemons.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  if (carga) {
    return <PaginaDeCarga />;
  }

  return (
    <div>
      <Paginado
        charactersPerPage={charactersPerPage}
        allPokemons={allPokemons.length}
        paginado={paginado}
      />
      <div className={s.div}>
        {currenCharacters &&
          currenCharacters.map((p) => {
            return (
              <CardPokemon
                key={p.id}
                name={p.name}
                img={
                  p.img
                    ? p.img
                    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                }
                types={p.types.map((p) => (p.name ? p.name : p))}
                id={p.id}
              />
            );
          })}
      </div>
    </div>
  );
}
