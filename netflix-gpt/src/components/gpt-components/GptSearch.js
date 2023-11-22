import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import ShimmerComponent from './ShimmerComponent'
import { BG_IMG } from '../../utils/constants'
import { useSelector } from 'react-redux'

function GptSearch() {
  const loading =  useSelector(store => store.gpt.searchLoading)
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
        {loading? <ShimmerComponent/> : <GptMovieSuggestions/>}
    </div>

    </>
    
  )
}

export default GptSearch