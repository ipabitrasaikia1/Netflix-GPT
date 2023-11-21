import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'
function GptSearch() {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="background-img"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch