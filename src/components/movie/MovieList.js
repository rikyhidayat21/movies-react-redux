import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movie/movieSlice'
import MovieCard from './MovieCard'

export default function MovieList() {
  const movies = useSelector(getMovies)

  return (
    <>
      <div>

        <MDBRow className="align-items-center">
          {movies.Response === 'True' ? (movies.Search.map((movie, idx) => (
            <MDBCol key={idx} col="6" md="4" className='col-example mb-4 justify-content-center'>
              <MovieCard movie={movie} />
            </MDBCol>
          ))) : (
            <>
              null
            </>
          )}
        </MDBRow>

      </div>
    </>
  )
}
