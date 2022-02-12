import React from "react";
import { NavBar } from "./NavBar";
import OrderPokemon from "./OrderPokemon";
import Pokemons from "./Pokemons";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import FilterPokemon from "./FilterPokemon";
import FilterPokemoCrate from "./FilterPokemoCrate";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <OrderPokemon />
      <FilterPokemoCrate />
      <FilterPokemon />
      <Paginado />

      <h3>soy home</h3>
      <Pokemons />
    </div>
  );
};
