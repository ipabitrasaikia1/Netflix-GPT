import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)
    const getPopularMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular";
      let data = await fetch(url, API_OPTIONS);
      let json = await data.json();
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(() => {
      !popularMovies && getPopularMovies();
    }, []);
}

export default usePopularMovies;