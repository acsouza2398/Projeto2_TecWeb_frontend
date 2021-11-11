import { useEffect, useState } from "react";
import "./App.css";
import Film from "./components/films";
import axios from "axios";

function App() {
  const [films, setFilms] = useState([]); // Remova o array de notes que existia na versão anterior

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/films/")
      .then((res) => setFilms(res.data));
  }, []);

  console.log(films);
  return (
    <div className="App">
      {films.map((film) => (
        <Film key={`film__${film.id}`} title={film.title}>
          {film.content}
        </Film>
      ))}
    </div>
  );
}

export default App;