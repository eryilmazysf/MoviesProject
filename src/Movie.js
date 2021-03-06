import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import "./App.css";
import { SearchBox } from "./components/SearchBox";
import { CardList } from "./components/CardList";

const apiKey = "38e32fcf23591c10099c8dbec80a0217";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext = createContext();

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: searchKeyword ? searchKeyword : " ",
        },
      })
      .then((res) => setMovieList(res?.data?.results));
    //.catch()
    //.finally();
  }, [searchKeyword]);

  return (
    <div className="App">
      <MovieContext.Provider
        value={{ movieList, baseImageUrl, setSearchKeyword }}
      >
        <SearchBox
        /* setSearchKeyword={setSearchKeyword}*/
        />
        <CardList /* movieList={movieList} baseImageUrl={baseImageUrl}*/ />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
