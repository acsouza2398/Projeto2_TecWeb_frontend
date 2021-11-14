import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import PaginaPrincipal from "./components/PaginaPrincipal";
import PaginaTop10 from "./components/PaginaTop10";
import MoviesInd from "./components/MoviesInd";

function App() {
  const [films, setFilms] = useState([]); // Remova o array de notes que existia na versão anterior
  
  const loadData = () => {
    axios
      .get("https://whispering-crag-34320.herokuapp.com/api/films/")
      .then((res) => setFilms(res.data));
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="Main">
      <div className="appbar">
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3163/3163508.png" alt=""/>
        <p className="subtitle">Movies and Series</p>
        <a href="/">
          <button className="btn">
            Add Movies
          </button>
        </a>
        <a href="/top">
          <button className="btn">
            Top 10
          </button>
        </a>
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PaginaPrincipal filmList={films} />}/>
            <Route exact path='/top' element={<PaginaTop10 filmList={films} />}/>
            <Route exact path='/:film_id' element={<MoviesInd film={films}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;