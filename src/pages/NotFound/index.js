import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import NotFoundImg from '../../assets/img/404.png';

export default function NotFound() {
  return (
    <>
      <CustomNavbar />
      <main>
        <Hero />

        <Container>
          <Row className="mb-5">
            <Col sm={12}>
              <img src={NotFoundImg} className="w-100" alt="404" />
              <h2 className="text-center">
                Oops! Essa página não foi encontrada.
              </h2>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
