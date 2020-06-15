import React from 'react';

// reactstrap components
import { Card, CardBody, Row, Col, Container } from 'reactstrap';

export default function JoinTheCause() {
  return (
    <section className="section pb-0 bg-gradient-success">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-2 ml-lg-auto" md="6">
            <div className="position-relative pl-md-5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require('../../../assets/img/ill/ill-2.svg')}
              />
            </div>
          </Col>
          <Col className="order-lg-1" lg="6">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-send text-primary" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">
                  Faça parte dessa iniciativa
                </h4>
              </div>
            </div>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-satisfied" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">Cadastre-se</h5>
                    <p>
                      Criando sua conta, você já poderá anunciar suas ofertas de
                      serviços e produtos na nossa plataforma de modo gratuito.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                      <i className="ni ni-favourite-28" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-danger">Ajude de coração</h5>
                    <p>
                      O objetivo é ajudar o maior número de pessoas, portanto
                      nos ajude compartilhando essa iniciativa com seus amigos.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
  );
}
