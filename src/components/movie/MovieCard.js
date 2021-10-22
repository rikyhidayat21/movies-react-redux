import React, { useState } from 'react'
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function MovieCard({ movie }) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
      <MDBCard style={{ maxWidth: '22rem' }} className="hover-shadow">
        <MDBCardImage src={movie.Poster} position='top' alt='...' onClick={toggleShow} style={{ cursor: "pointer" }} />
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

      <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>

            <MDBModalBody>
              <MDBCardImage src={movie.Poster} position='top' alt={movie.Title} />
            </MDBModalBody>

            <MDBModalFooter>
              <Link to={`/movie/${movie.imdbID}`}>
                <MDBBtn>Detail</MDBBtn>
              </Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
