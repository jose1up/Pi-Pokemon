import React from "react";
import { NavBar } from "./NavBar";
import OrderPokemon from "./OrderPokemon";
import Pokemons from "./Pokemons";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import FilterPokemon from "./FilterPokemon";
import FilterPokemoCrate from "./FilterPokemoCrate";
import s from "./Home.module.css";
export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={s.div}>
        <OrderPokemon />
        <FilterPokemoCrate />
        <FilterPokemon />
        <SearchBar />
      </div>
      <div>
        <Paginado />

        <div>
          <Pokemons />
        </div>
      </div>
    </div>
  );
};
