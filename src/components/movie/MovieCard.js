import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function MovieCard({ movie }) {
  return (
    <>
      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src={movie.Poster} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{movie.Title}</MDBCardTitle>
          <MDBCardText>
            {movie.Year}
          </MDBCardText>
          <Link to={`/movie/${movie.imdbID}`}>
            <MDBBtn>Detail</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}
