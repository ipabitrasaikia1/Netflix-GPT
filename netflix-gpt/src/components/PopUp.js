import React from "react";
import { useSelector } from "react-redux";

const PopUp = ({ openPopUp, closePopUp }) => {
  const popupVideo = useSelector((store) => store.movies.popupVideo);
  const popupVideoData = useSelector((store) => store.movies.popupVideoData);
  if (!popupVideo) return null;
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="z-50 fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <p className="font-semibold py-3 text-center text-2xl text-black">
            {popupVideoData.title}
            <button className="bg-yellow-800 text-white p-1 ml-4 rounded-lg">
              Imdb {popupVideoData.vote_average}
            </button>
          </p>

          <iframe
            className="w-full aspect-video "
            src={
              "https://www.youtube.com/embed/" +
              popupVideo.key +
              "?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <button className="mt-4 p-1 font-semibold bg-yellow-800 text-white rounded-lg">
           Language : {popupVideoData.original_language}
          </button>

          <div className="mt-9 italic text-left text-white bg-black p-4 rounded-lg">
          <button className="-mt-9 -ml-8 absolute p-1 font-semibold bg-yellow-800 text-white rounded-l-md">Overview</button>
            {popupVideoData.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
