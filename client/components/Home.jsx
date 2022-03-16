import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function Home() {

  return (
    <>
      <Container className="py-5">
      <Row className="d-flex align-items-center">
      <Col>
            <Image className="alayne-home"
              src="./photos/alayne_hero_image.jpeg"
              fluid="true"
              rounded="true"
              />
          </Col>
          <Col className="p-5" md={6}>
          <header className="mt-4 header">
          <h1 className="landing-hero">Alayne Dick</h1>
            <h5>
            Te Whanganui-a-Tara based poet, stand up, improviser, actor, writer, musician and podcaster
            </h5>
        </header>
        
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home