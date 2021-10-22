import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movie/movieSlice'

export default function MovieList() {
  const movies = useSelector(getMovies)
  console.log(movies, '<=== movies')
  return (
    <div>
      Movie list
    </div>
  )
}
