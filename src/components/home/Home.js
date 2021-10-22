import React, { useEffect, useState } from 'react'
import {
  MDBContainer, MDBBtn, MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit'
import MovieList from '../movie/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveAsyncMovies, getMovies } from '../../features/movie/movieSlice'


export default function Home() {
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)

  // const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  // const [suggestion, setSuggestion] = useState([])

  const handleChange = (text) => {
    // let matches = []
    // if (text.length > 0) {
    //   matches = movies.Search.filter(movie => {
    //     console.log(movie, '<== movie')
    //     const regex = new RegExp(`${search}`, "gi")
    //     return movie.Title.match(regex)

    //   })
    // }
    // console.log('matchess', matches)
    // console.log(text, '<== text')
    // setSuggestion(matches)
    setSearch(text)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(retrieveAsyncMovies(search))
  }



  return (
    <>
      <MDBContainer>
        <div>
          <form onSubmit={onSubmit}>
            <h1 className="text-center mt-3 mb-3">Find your favorite Movies</h1>
            <MDBInputGroup className='mb-3'>
              <MDBInputGroupElement placeholder="Search Movies" type='text' onChange={(e) => handleChange(e.target.value)} />
              <MDBBtn outline type="submit">Search</MDBBtn>
            </MDBInputGroup>
          </form>
        </div>

        <div>
          <MovieList />
        </div>
      </MDBContainer>
    </>
  )
}
