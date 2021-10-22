import React from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer>

          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem active>
              <Link to={'/'}>
                Movie App
              </Link>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}
