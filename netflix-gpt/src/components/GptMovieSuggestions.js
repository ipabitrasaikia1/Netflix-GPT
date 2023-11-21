import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { movieNames, gptMovies } = useSelector((store) => store.gpt);
  console.log(movieNames,gptMovies)
  if (!movieNames || !gptMovies) return null;
  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
    <div>
    {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={gptMovies[index]}/>)}
    </div>

  </div>;
}

export default GptMovieSuggestions;
