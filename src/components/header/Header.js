import React from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer>

          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem active>
              <MDBNavbarLink aria-current='page' href='#'>
                Movie App
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}
