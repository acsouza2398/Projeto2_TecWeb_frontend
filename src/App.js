import { useEffect, useState } from "react";
import "./App.css";
import Film from "./components/films";
import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from "./components/PaginaPrincipal";
import PaginaTop10 from "./components/PaginaTop10";

function App() {
  const [films, setFilms] = useState([]); // Remova o array de notes que existia na versão anterior

  const loadData = () => {
    axios
      .get("http://localhost:8000/api/films/")
      .then((res) => setFilms(res.data));
  }

  useEffect(() => {
    loadData();
  }, []);


  console.log(films);
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PaginaPrincipal filmList={films} loadData={loadData}/>}/>
            <Route exact path='/top' element={<PaginaTop10 filmList={films} loadData={loadData}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;