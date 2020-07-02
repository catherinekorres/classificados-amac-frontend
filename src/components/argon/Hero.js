import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <>
      <div className="position-relative">
        {/* Hero for FREE version */}
        <section className="section section-hero section-shaped">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <h1
                    className="display-1 text-white"
                    style={{
                      fontFamily: 'Heebo, sans-serif',
                      fontWeight: 900,
                      lineHeight: 1.2,
                    }}
                  >
                    Classificados de Cognópolis
                  </h1>
                  <p className="lead text-white">
                    Produtos de qualidade de pessoas em Foz do Iguaçu, Paraná.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
