import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./gpt-components/GptSearch";
import PopUp from "./PopUp";
import { useDispatch, useSelector } from "react-redux";
import { removePopupVideo } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const { showGptSearch } = useSelector((store) => store.gpt);
  const popupVideoId = useSelector((store) => store.movies.popupVideoId);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const HandleRemovePopUp = () => {
    dispatch(removePopupVideo());
    // setOpenPopup(false);
  };

  return (
    <div>
     {popupVideoId && <PopUp openPopUp={popupVideoId} closePopUp={HandleRemovePopUp} />} 
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
