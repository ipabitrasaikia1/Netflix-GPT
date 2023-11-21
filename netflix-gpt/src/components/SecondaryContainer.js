import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movies?.popularMovies)
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies)
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies)
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-80 pl-0 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer