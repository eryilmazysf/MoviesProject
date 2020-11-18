import { useContext } from "react";
import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";
import { MovieContext } from "../../Movie";

export const CardList = (/*{ movieList, baseImageUrl }*/) => {
  const { movieList, baseImageUrl } = useContext(MovieContext);
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          id={movie.id}
          key={index}
          title={movie.title}
          imgSrc={
            movie.poster_path
              ? baseImageUrl + movie.poster_path
              : "https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-cinema-movie-blockbuster-poster-image_221750.jpg"
          }
          youtube={
            "https://api.themoviedb.org/3/movie/" +
            movie.id +
            "/videos?api_key=38e32fcf23591c10099c8dbec80a0217&language=en-US"
          }
        />
      ))}
    </StyledCardList>
  );
};
