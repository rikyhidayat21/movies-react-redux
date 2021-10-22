import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail, retrieveAsyncMovieDetail, removeMovieDetail } from '../../features/movie/movieSlice'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBSpinner } from 'mdb-react-ui-kit'

export default function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const movieDetail = useSelector(getMovieDetail)
  console.log(movieDetail, '<== movie detail')

  useEffect(() => {
    dispatch(retrieveAsyncMovieDetail(imdbID))
    return () => {
      dispatch(removeMovieDetail())
    }
  }, [dispatch, imdbID])
  return (
    <MDBContainer className="mt-3">
      {Object.keys(movieDetail).length === 0 ? (
        <MDBSpinner grow className="text-center">
          <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
      ) : (

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
                <MDBCardText>
                  <small className='text-muted'>Year    : {movieDetail.Year}</small><br />
                  <small className='text-muted'>Country : {movieDetail.Country}</small><br />
                  {/* <small className='text-muted'>Writer: {movieDetail.Writer}</small><hr /> */}

                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

      )}
    </MDBContainer>
  )
}
