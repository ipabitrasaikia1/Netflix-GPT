import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  if(!movies) return 
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl font-medium py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies.map((movie) => <MovieCard key={movie.id} poster_path={movie?.poster_path} /> )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
