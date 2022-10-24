import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import './style.css';
export default function Home() {

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Side Bar</Col>
          <Col md={10} style={{ marginLeft: 'auto' }} >Container</Col>
        </Row>
      </Container>

      {/* <h1 style={{ margin: '5rem' }} className='text-center'>
        Admin Dashboard
      </h1>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p> */}
    </Layout >
  )
}
