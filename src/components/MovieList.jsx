import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Check if movies is null or undefined
  if (!movies) {
    return (
      <div className="movie-list">
        <div className="movie-list-header">
          <h1>{title}</h1>
        </div>
        <div className="movie-list-content">
          <p>No movies available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 bg-black w-full h-full">
      <h1 className="flex font-semibold text-3xl px-10 py-3 text-white">
        {title}
      </h1>
      <div className="w-full flex overflow-x-scroll overflow-y-auto rounded-md"></div>
      <div className="w-full flex rounded-md">
        <div className="flex gap-3 rounded-md">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
