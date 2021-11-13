import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function Film(props) {
  const deleteNote = () => {
    //deleta nota
    //para isso funcionar você deve implementar a ação de deletar no Django REST
    //Note que o comando abaixo envia uma requisição com o verbo DELETE
    axios
      .delete(`http://localhost:8000/api/films/${props.id}`)
      .then((res) => props.reloadData());
  };
  return (
      <div className="card">
        <h3 className="card-title">{props.title}</h3>
        <img className='Poster' src={props.img} />
        <div className="card-content">{props.children}</div>
        <div className="rating" type='hidden'>{props.rating}</div>
        <button onClick={deleteNote} class="btn_change">Deletar</button>
      </div>
    );
  }

