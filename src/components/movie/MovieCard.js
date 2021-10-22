import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


export default function MovieCard({ movie }) {
  return (
    <>
      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src={movie.Poster} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{movie.Title}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}
