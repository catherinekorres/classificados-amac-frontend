/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Obrigada por apoiar nossa causa!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Compartilhe essa ideia com outras pessoas.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="success"
                  href="#"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-whatsapp" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Compartilhar no Whatsapp
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="#"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-f" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                Compartilhar no Facebook
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="#"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Compartilhar no Twitter
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="info"
                  href="#"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                Compartilhar no LinkedIn
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  {/* © {new Date().getFullYear()}{" "} */}
                  Feito com <i className="fa fa-heart" style={{color: "#f5365c", padding: 3}} /> por
                  <a
                    href="https://github.com/catherinekorres"
                    target="_blank"
                    style={{paddingLeft: 3}}
                  >
                    Catherine Korres
                  </a> e
                  <a
                    href="https://github.com/StephanyKleinA"
                    target="_blank"
                    style={{paddingLeft: 3}}
                  >
                    Stephany Klein
                  </a>.

                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="/produtos"
                      target="_blank"
                    >
                      Produtos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/servicos"
                      target="_blank"
                    >
                      Serviços
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/contato"
                      target="_blank"
                    >
                      Contato
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
