import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="flex w-full flex-col">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Action Playing"} movies={movies.nowPlayingMovies} />
      {/* // MovieList - Popular
      MovieList - Now Playing
      MovieList - Trending */}
    </div>
  );
};

export default SecondaryContainer;
