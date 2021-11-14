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
            .post("https://whispering-crag-34320.herokuapp.com/api/films/", {title:titleFilm})
            .then((response) => {
                setTitle("");
                window.location.reload();
                props.onSubmitFormulario();
            });
    }

    return (
        <form className="form-card" onSubmit={CreateFilm}>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Name of Movie"
            value={titleFilm}
            onChange={titleChanged}
            />
            <button className="btn" type="submit">Add</button>
        </form>
    );
}