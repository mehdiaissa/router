import { useState } from "react";
import "./App.css";
import Addmovie from "./Component/Addmovie";
import MovieList from "./Component/MovieList";
import Navbarm from "./Component/Navbarm";
import { MovieData } from "./Component/MovieData";
import Description from "./Component/Description";
import { Route, Routes } from "react-router-dom";

function App() {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const [movies, setMovies] = useState(MovieData);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={[
            <Navbarm
              nameSearch={nameSearch}
              setNameSearch={setNameSearch}
              rateSearch={rateSearch}
              setRateSearch={setRateSearch}
            />,
            <MovieList
              movies={movies}
              nameSearch={nameSearch}
              rateSearch={rateSearch}
            />,
            <Addmovie movies={movies} setMovies={setMovies} />
          ]}
        />
        <Route
          exact
          path="/description/:name"
          element={<Description movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
