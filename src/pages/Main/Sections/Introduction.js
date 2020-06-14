import React from 'react';

// reactstrap components
import { Row, Col, Container, Badge } from 'reactstrap';

export default function Introduction() {
  return (
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-1" md="6">
            <img
              alt="..."
              className="img-fluid floating"
              src={require('../../../assets/img/shopping.svg')}
            />
          </Col>
          <Col className="order-md-2" md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <i className="ni ni-shop" />
              </div>
              <h4 className="display-3">Anuncie de graça</h4>
              <p>
                Somos uma plataforma voluntária com a intenção de servir a
                população. Nossa missão é propiciar um ambiente em que os
                moradores do bairro Cognópolis possam divulgar seus serviços e
                produtos de forma completamente gratuita para auxiliá-los nessa
                época tão delicada que estamos enfrentando.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-laptop" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Compartilhe seus produtos e serviços
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-bag-17" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Busque por ofertas do seu interesse
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
