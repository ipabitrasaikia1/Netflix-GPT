import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popupVideo:null,
        popupVideoId:null,
        popupVideoData:null,
        trailerVideo: null,
        nowPlayingMovies : null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        },
        
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopupVideo: (state, action) => {
            state.popupVideo = action.payload
        }, 
        removePopupVideo: (state, action) => {
            state.popupVideo = null
            state.popupVideoId = null
            state.popupVideoData = null
        },
        addPopupVideoId: (state, action) => {
            state.popupVideoId = action.payload
        },
        addPopupVideoData: (state, action) => {
            state.popupVideoData = action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addTrailerVideo, addPopupVideo, removePopupVideo, addPopupVideoId, addPopupVideoData} = moviesSlice.actions
export default moviesSlice.reducer