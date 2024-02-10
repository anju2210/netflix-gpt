import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import genAI from "../utils/geminiAI";
import Spinner from "./Spinner";

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log("TMDB", json.results);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query : " +
      searchText.current.value +
      ". Only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Frozen, Lost In Space, Avatar, Welcome, Jawaan";

    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response.text();

    const gptMovies = response.split(",");

    console.log("gpt Movies", gptMovies);

    //For each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    setIsLoading(false);
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 rounded-lg text-white"
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
