import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail, retrieveAsyncMovieDetail } from '../../features/movie/movieSlice'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'

export default function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const movieDetail = useSelector(getMovieDetail)
  console.log(movieDetail, '<== movie detail')

  useEffect(() => {
    dispatch(retrieveAsyncMovieDetail(imdbID))
  }, [dispatch, imdbID])
  return (
    <MDBContainer className="mt-3">
      <MDBCard style={{ maxWidth: '100%' }} className="rounded shadow mb-3">
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={movieDetail.Poster} alt={movieDetail.Title} fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>{movieDetail.Title}</MDBCardTitle>
              <MDBCardText>
                {movieDetail.Plot}
              </MDBCardText>
              <hr />
              <MDBCardText>
                <small className='text-muted'>Year    : {movieDetail.Year}</small><hr />
                <small className='text-muted'>Country : {movieDetail.Country}</small><hr />
                {/* <small className='text-muted'>Writer: {movieDetail.Writer}</small><hr /> */}

              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  )
}
