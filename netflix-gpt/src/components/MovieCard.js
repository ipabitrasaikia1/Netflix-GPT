import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";
import { useState } from 'react';
import PopUp from './PopUp';
function MovieCard({poster_path}) {
    
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  if(!poster_path) return null
  return (
    <div className='w-52 md:w-64 pr-4 '>
        <img className='rounded-md' src={IMG_CDN_URL+poster_path} alt="Movie-card" onClick={() => setOpenPopup(true)} />
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
  )
}

export default MovieCard