import React from 'react'
import imgnew from "../image/newImg.gif"
import s from "./PaginaDeCarga2.module.css"
export default function PaginaDeCarga2() {
  return (
    <div className={s.div} >
        <img className={s.img} src={imgnew} alt="" />
    </div>
  )
}
