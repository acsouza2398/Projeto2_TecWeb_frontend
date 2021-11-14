import Film from "../../components/films";
import "./index.css";

export default function PaginaTop10(props) {
  return (
      <div className="card-container">
        {props.filmList
          .sort((a, b) => b['rating'] - a['rating'])
          .slice(0,10)
          .map((film) => (
          <Film
            key={`film__${film.id}`}
            title={film.title}
            img = {film.img}
            id={film.id}
            reloadData={props.loadData}
            >
            <div className="sinopse"> Nota do filme:</div> {film['rating']}
          </Film>
        ))}
      </div>
  );
}