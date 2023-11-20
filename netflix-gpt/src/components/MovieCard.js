import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";
function MovieCard({poster_path}) {
  return (
    <div className='w-64 pr-4 '>
        <img className='rounded-md' src={IMG_CDN_URL+poster_path} alt="Movie-card" />
    </div>
  )
}

export default MovieCard