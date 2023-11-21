import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, addMovieNames } from "../utils/gptSlice";
function GptSearchBar() {
  const dispatch = useDispatch()
  const searchText = useRef(null);
  const userLang = useSelector((store) => store.config.lang);
  
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    // Make openAI API call to get result of movies
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". only give me name of 5 movies, comma seperated like the example result given ahead. Example result : Gadar, sholey, Don, Dhoom, Gabbar";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //Error handle
      alert("No result found");
    }
    
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    dispatch(addMovieNames(gptMovies))
    // Since searchMovieTMDB is asyncronous so it will take some time. It will not give the results immidiatly instead it will give us promise objects
    const promiseArray = gptMovies.map( movie => searchMovieTMDB(movie))
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addGptMovieResult(tmdbResults))

  };

  return (
    <div className="pt-[40%] md:pt-[8%] flex justify-center">
      <form
        className=" bg-black w-11/12 md:w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[userLang].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-2 md:px-4  m-4 bg-red-700 rounded-md text-white"
          onClick={handleGptSearch}
        >
          {lang[userLang].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
