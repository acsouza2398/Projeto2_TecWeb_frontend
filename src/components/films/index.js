import axios from "axios";
import "./index.css";

export default function Film(props) {
  const deleteFilm = () => {
    //deleta nota
    //para isso funcionar você deve implementar a ação de deletar no Django REST
    //Note que o comando abaixo envia uma requisição com o verbo DELETE
    axios
      .delete(`https://whispering-crag-34320.herokuapp.com/api/films/${props.id}`)
      .then((res) => {window.location.reload(); props.reloadData()});
      
  };
  
  return (
      <div className="card">
        <h3 className="card-title">{props.title}</h3>
        <img className='Poster' src={props.img}  alt="" />
        <div className="card-content">
          {props.children}</div>
        <div className="rating" type='hidden'>{props.rating}</div>
        <button onClick={deleteFilm} className="btn_change">Deletar</button>
      </div>
    );
  }

