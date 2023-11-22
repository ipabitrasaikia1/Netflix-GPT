import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchLoading: false,
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
        },
        toggleSearchLoading: (state, action) => {
            state.searchLoading = !state.searchLoading
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult, addMovieNames, toggleSearchLoading} = gptSlice.actions
export default gptSlice.reducer