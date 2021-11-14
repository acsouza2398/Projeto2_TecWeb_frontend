import {useState} from "react";
import axios from "axios";

import "./index.css";

export default function Formulario(props){
    const [titleFilm, setTitle] = useState("");

    const titleChanged = (event) =>{
        setTitle(event.target.value);
    }
    const CreateFilm = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/films/", {title:titleFilm})
            .then((response) => {
                setTitle("");
                props.onSubmitFormulario();
            });
    }

    return (
        <form className="form-card" onSubmit={CreateFilm}>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Nome do Filme"
            value={titleFilm}
            onChange={titleChanged}
            />
            <button className="btn" type="submit">Adicionar</button>
        </form>
    );
}