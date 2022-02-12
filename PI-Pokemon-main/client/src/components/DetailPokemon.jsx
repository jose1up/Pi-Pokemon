import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail } from "../redux/actions";
import CharacterCard from "./CharacterCard";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

export default function DetailPokemon(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);

  const detail = useSelector((state) => state.detail);

  return (
    <div>
      <NavBar />
      {detail &&
        detail.map((p) => {
          return (
            <CharacterCard
              key={p.id}
              id={p.id}
              name={p.name}
              types={p.types.map(p=>p.name)|| p.types} 
              img={
                p.img
                  ? p.img
                  : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              }
              life={p.life}
              strength={p.strength}
              defense={p.defense}
              speed={p.speed}
              height={p.height}
              weight={p.weight}
            />
          );
        })}
    </div>
  );
}
