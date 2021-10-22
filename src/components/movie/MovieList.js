import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movie/movieSlice'
import MovieCard from './MovieCard'

export default function MovieList() {
  const movies = useSelector(getMovies)
  // console.log(movies, '<=== movies')

  // check movies
  // let checkMovies = ""
  // checkMovies = movies.Response === "True" ? (
  //   movies.Search.map((movie, idx) => (
  //     <>
  //       <MDBRow>
  //         <MDBCol size='md' className='col-example'>
  //           <MovieCard key={idx} movie={movie} />
  //         </MDBCol>
  //       </MDBRow>
  //     </>
  //   ))
  // ) : (
  //   <div>
  //     {movies.Error}
  //   </div>
  // )
  return (
    <>
      <div>

        <MDBRow>
          {movies && movies.Search.map((movie, idx) => (
            <MDBCol key={idx} size='md' md="4" className='col-example mb-4'>
              <MovieCard movie={movie} />
            </MDBCol>
          ))}
        </MDBRow>

      </div>
    </>
  )
}
