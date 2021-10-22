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

const initialState = {
  movies: {}
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
    }
  }
})

export const { addMovies } = movieSlice.actions

export const getMovies = state => state.movies.movies

export default movieSlice.reducer