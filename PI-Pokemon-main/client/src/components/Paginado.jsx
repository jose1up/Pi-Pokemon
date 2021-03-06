import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({ charactersPerPage, allPokemons, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allPokemons / charactersPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul className={style.ul}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div className={style.div} key={number}>
              <button className={style.span} onClick={() => paginado(number)}>{number}</button>
            </div>
          ))}
      </ul>
    </nav>
  );
}
