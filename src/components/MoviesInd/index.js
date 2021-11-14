import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { useParams } from "react-router-dom";

export default function MoviesInd(props) {
  let { films } = useParams();

  const deleteFilm = () => {
    //deleta nota
    //para isso funcionar você deve implementar a ação de deletar no Django REST
    //Note que o comando abaixo envia uma requisição com o verbo DELETE
    axios
      .delete(`https://sheltered-woodland-32459.herokuapp.com/api/films/${props.id}`)
      .then((res) => props.reloadData());
  };

  console.log("esse é o filme ", props);
  console.log(films)

  return (
      <div className="card">
        <h3 className="card-title">{props.title}</h3>
        <img className='Poster' src={props.img} alt=""/>
        <div className="rating" >{props.rating}</div>
        <button onClick= {() => deleteFilm} className="btn_change">Deletar</button>
      </div>
    );
  }

