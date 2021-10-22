import React, { useEffect, useState } from 'react'
import {
  MDBContainer, MDBBtn, MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit'
import MovieList from '../movie/MovieList'
import { useDispatch } from 'react-redux'
import { retrieveAsyncMovies } from '../../features/movie/movieSlice'


export default function Home() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState("Harry")

  useEffect(() => {
    dispatch(retrieveAsyncMovies())
  }, [dispatch])




  return (
    <>
      <MDBContainer>
        <div>
          <form>
            <h1>Search</h1>
            <MDBInputGroup className='mb-3'>
              <MDBInputGroupElement placeholder="Search Movies" type='text' />
              <MDBBtn outline>Search</MDBBtn>
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
