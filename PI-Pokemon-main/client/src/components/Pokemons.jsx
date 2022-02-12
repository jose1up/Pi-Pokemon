import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import CardPokemon from "./CardPokemon";
import Paginado from "./Paginado";

export default function Pokemons() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllPokemons());
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

  return (
    <div>
      <Paginado
      charactersPerPage ={charactersPerPage}
      allPokemons = {allPokemons.length}
      paginado={paginado}


      />

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
  );
}
