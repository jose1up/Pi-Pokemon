import React from "react";
import imgen from "../image/CharizarVolando.gif"
import s from "./PaginaDeCarga.module.css";
export default function PaginaDeCarga() {
  return <div className={s.div}>
    <img className={s.img} src={imgen} alt="" />
  </div>;
}
