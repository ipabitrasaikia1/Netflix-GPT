import React from "react";

function ShimmerComponent() {
  return (
    <div className="flex flex-col md:flex-row justify-between flex-wrap gap-3 mt-4 p-10  bg-gradient-to-b from-black w-11/12 m-auto rounded-xl">
      <div className="md:md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
      <div className="md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
      <div className="md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
      <div className="md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
      <div className="md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
      <div className="md:w-[15%] h-56 bg-gradient-to-r from-black via-red-500 to-red-900 text-white rounded-md animate-pulse"></div>
    </div>
  );
}

export default ShimmerComponent;
