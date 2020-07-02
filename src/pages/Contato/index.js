import React, { Component } from 'react';

// reactstrap components
import {
  Container,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import api from '../../services/api';

export default class Contato extends Component {
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await api.post(`/support`, {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      });

      alert('Sua mensagem foi enviada com sucesso!');

      console.log(response);
    } catch (error) {
      alert(
        'Houve um erro no envio da sua mensagem. Tente novamente mais tarde.'
      );
    }
  };

  render() {
    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container>
            <Row className="my-5">
              <Col md="5" className="my-3">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-send " />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3">Contato</h4>
                  </div>
                </div>
                <Row className="mb-4">
                  <Col md="4">
                    <small className="text-uppercase text-muted font-weight-bold">
                      <i className="fa fa-map-marker fa-lg icon-shape-success bg-white" />{' '}
                      Endereço
                    </small>
                  </Col>
                  <Col md="8">Cognópolis, Foz do Iguaçu - PR Brasil</Col>
                </Row>
                <Row className="mb-4">
                  <Col md="4">
                    <small className="text-uppercase text-muted font-weight-bold">
                      <i className="fa fa-envelope icon-shape-success bg-white" />{' '}
                      E-mail
                    </small>
                  </Col>
                  <Col md="8">amacfozdoiguacu@gmail.com</Col>
                </Row>
                <Row className="mb-4">
                  <Col md="4">
                    <small className="text-uppercase text-muted font-weight-bold">
                      <i className="fa fa-phone fa-lg icon-shape-success bg-white" />{' '}
                      Telefone
                    </small>
                  </Col>
                  <Col md="8">(45) 9 8418-1715</Col>
                </Row>
              </Col>
              <Col md="7" className="my-3">
                {/* <Card className="shadow">
                  <CardBody> */}
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary  mb-4">
                      <i className="ni ni-bulb-61 text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3">Alguma dúvida?</h4>
                  </div>
                </div>
                <p>Mande uma mensagem, responderemos em breve!</p>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Nome"
                          onChange={this.handleChange}
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          id="email"
                          name="email"
                          placeholder="E-mail"
                          onChange={this.handleChange}
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          id="message"
                          name="message"
                          placeholder="Mensagem"
                          onChange={this.handleChange}
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div>
                    <Button
                      className="my-2"
                      color="primary"
                      type="submit"
                      style={{ width: 150 }}
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
                {/* </CardBody>
                </Card> */}
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
