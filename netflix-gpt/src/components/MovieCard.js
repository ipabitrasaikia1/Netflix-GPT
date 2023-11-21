import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopupVideoData, addPopupVideoId } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { addPopupVideo } from "../utils/moviesSlice";
function MovieCard({ poster_path, movieId, movie }) {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addPopupVideo(trailer));
  };
  const handleOpenPopup = async () => {
    dispatch(addPopupVideoId(movieId));
    dispatch(addPopupVideoData(movie))
    await getMovieVideos();
  };

  if (!poster_path) return null;
  return (
    <div className="w-52 md:w-64 pr-4 cursor-pointer">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + poster_path}
        alt="Movie-card"
        onClick={handleOpenPopup}
      />
    </div>
  );
}

export default MovieCard;
