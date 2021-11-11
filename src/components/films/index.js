import React from "react";
import "./index.css";

export default function Film(props) {
    return (
        <div className="card">
          <h3 className="card-title">{props.title}</h3>
          <div className="card-content">{props.children}</div>
          <form method = "post" action = "http://localhost:8000/delete">
            <input name="film_id" value={props.id} />
            <button type="submit"class="btn_change">Deletar</button>
          </form>
        </div>
      );
    }