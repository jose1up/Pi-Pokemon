import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetail } from "../redux/actions";
import CharacterCard from "./CharacterCard";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import PaginaDeCarga2 from "./PaginaDeCarga2";
import { useState } from "react";


export default function DetailPokemon(props) {
  const [carga, setCarga] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(id)).then(() => setCarga(false));
  }, []);

  const detail = useSelector((state) => state.detail);

  if (carga) {
    return <PaginaDeCarga2 />;
  }

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
              types={p.types.map((p) => (p.name ? p.name : p))}
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
