import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../../utils/constants'
function GptSearch() {
  return (
    <><div className="fixed -z-10">
    <img 
    className='h-screen md:h-auto object-cover'
      src={BG_IMG}
      alt="background-img"
    />
   </div>
   <div >
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>

    </>
    
  )
}

export default GptSearch