import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

  const sendUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
        <Button className="pink-button">
            Contact
        </Button> 
        <Button className="pink-button">
            Social Media
        </Button>
        <Row>
          <Col>
            <Container>
              <p className="text-muted mt-2">&copy; Made with love by Courtney Rose Brown 2022</p>
            </Container>
          </Col>
        </Row>

    </Container>
  )
}

export default Footer