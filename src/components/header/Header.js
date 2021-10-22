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
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Movie App
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}
