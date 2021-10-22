import React, { useEffect, useState } from 'react'
import {
  MDBContainer, MDBBtn, MDBInputGroup,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit'
import MovieList from '../movie/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveAsyncMovies, getMovies } from '../../features/movie/movieSlice'


export default function Home() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")

  const handleChange = (text) => {
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
          <h1 className="text-center mt-3 mb-3">Find your favorite Movies</h1>
          <div style={{ width: "70%", margin: "auto" }}>

            <form onSubmit={onSubmit}>
              <MDBInputGroup className='mb-3'>
                <MDBInputGroupElement placeholder="Search Movies" type='text' onChange={(e) => handleChange(e.target.value)} />
                <MDBBtn outline type="submit">Search</MDBBtn>
              </MDBInputGroup>
            </form>
          </div>
        </div>

        <div>
          <MovieList />
        </div>
      </MDBContainer>
    </>
  )
}
