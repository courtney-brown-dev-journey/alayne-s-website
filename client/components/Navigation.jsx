import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'


function Navigation () {

  return (
    <>

<Navbar className="justify-content-center" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Alayne</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link">Meet the artist</Nav.Link>
        <Nav.Link href="#home">Upcoming events</Nav.Link>
        <NavDropdown title="Mahi" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">All shows</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Publications</NavDropdown.Item>
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