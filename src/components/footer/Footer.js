import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: 'light' }} className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Created with love by {' '}
        <a className='text-dark' href='https://rikyhidayat.tech/'>
          Riky Hidayat
        </a>
      </div>
    </MDBFooter>
  )
}
