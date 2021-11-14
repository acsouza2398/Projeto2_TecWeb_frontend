import Film from "../../components/films";
import Formulario from "../../components/Formulario";
import "./index.css";

export default function PaginaPrincipal(props) {
  return (
    <main className="container">
      <Formulario onSubmitFormulario={props.loadData}/>
      <div className="card-container">
        {props.filmList.map((film) => (
          <Film
            key={`film__${film.id}`}
            title={film.title}
            img = {film.img}
            id={film.id}
            reloadData={props.loadData}
            >
            <div className="sinopse"> Sinopse:</div> {film.content}
          </Film>
        ))}
      </div>
    </main>
  );
}