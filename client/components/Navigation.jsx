import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'


function Navigation (props) {

  return (
    <>

<Navbar className="me-auto" bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Alayne and Aaron</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <NavDropdown title="Events" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Current Events</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Past Events</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Reviews</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Navigation