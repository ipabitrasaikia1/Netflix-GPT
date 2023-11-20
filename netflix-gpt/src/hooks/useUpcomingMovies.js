import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/upcoming";
      let data = await fetch(url, API_OPTIONS);
      let json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
        getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useUpcomingMovies;