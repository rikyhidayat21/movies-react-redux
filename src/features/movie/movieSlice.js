import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../config/axios'
import { API_KEY } from '../../config/apiKey'

export const retrieveAsyncMovies = createAsyncThunk('movies/retrieveAsyncMovies', async () => {
  try {

    const search = "Harry"
    const { data } = await axios.get(`?apiKey=${API_KEY}&s=${search}`)
    return data

  } catch (error) {
    console.log(error)
  }
})

export const retrieveAsyncMovieDetail = createAsyncThunk('movies/retrieveAsyncMovieDetail', async (imdbID) => {
  try {

    const { data } = await axios.get(`?apiKey=${API_KEY}&i=${imdbID}&Plot=full`)
    return data

  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  movies: {},
  movieByImdbID: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload
    }
  },
  extraReducers: {
    [retrieveAsyncMovies.pending]: () => {
      console.log('Pending')
    },
    [retrieveAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("retrieve success")
      return { ...state, movies: payload }
    },
    [retrieveAsyncMovies.rejected]: () => {
      console.log('Rejected')
    },
    [retrieveAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      console.log('retrieve success')
      return { ...state, movieByImdbID: payload }
    }
  }
})

export const { addMovies } = movieSlice.actions

export const getMovies = state => state.movies.movies
export const getMovieDetail = state => state.movies.movieByImdbID

export default movieSlice.reducer