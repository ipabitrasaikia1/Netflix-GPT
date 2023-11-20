import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
function GptSearchBar() {
  const userLang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-md">
        <input
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[userLang].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-2 px-4  m-4 bg-red-700 rounded-md text-white">
          {lang[userLang].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
