import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            state.gptMovies = action.payload
        },
        addMovieNames: (state, action) => {
            state.movieNames = action.payload
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult, addMovieNames} = gptSlice.actions
export default gptSlice.reducer