import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StyledMovieImage } from "./components/Card/Card.style";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "38e32fcf23591c10099c8dbec80a0217";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, [id]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{movieDetails?.original_title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <StyledMovieImage
          style={{
            width: 300,
            margin: 20,
          }}
          src={
            movieDetails?.poster_path
              ? baseImageUrl + movieDetails?.poster_path
              : "https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-cinema-movie-blockbuster-poster-image_221750.jpg"
          }
          alt={"Movie Poster"}
        />
        <p
          style={{
            fontWeight: "bolder",
            margin: 20,
            color: "#bf360c",
            width: 500,
          }}
        >
          {movieDetails?.overview}
        </p>
      </div>
    </div>
  );
}
