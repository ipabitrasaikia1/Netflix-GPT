import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold" >{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="">
        <button className="bg-white text-black  py-1 md:py-4 px-2 md:px-12 mt-2 md:mt-0 text-xl rounded-md hover:bg-opacity-80"> ▶Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
