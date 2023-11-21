import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    const getTopRatedMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/top_rated";
      let data = await fetch(url, API_OPTIONS);
      let json = await data.json();
      dispatch(addTopRatedMovies(json.results))
    };
  
    useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;