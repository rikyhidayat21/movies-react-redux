import React, { useEffect, useState } from 'react'
import {
  MDBContainer, MDBBtn, MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit'
import MovieList from '../movie/MovieList'
import axios from '../../config/axios'
import { API_KEY } from '../../config/apiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movie/movieSlice'


export default function Home() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState("Harry")

  useEffect(() => {
    retrieveMovies()
  }, [])

  const retrieveMovies = async () => {
    try {
      const { data } = await axios.get(`?apiKey=${API_KEY}&s=${search}`)
      dispatch(addMovies(data))
    } catch (err) {
      console.log(err, '<== err')
    }
  }


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
