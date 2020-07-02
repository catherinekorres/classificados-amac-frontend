import React, { Component } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import CustomNavbar from '../../components/argon/CustomNavbar.js';
import Footer from '../../components/argon/Footer.js';

import api from '../../services/api';

class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      street: '',
      number: '',
      whatsApp: '',
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getSignup();
    console.log(
      `${this.state.email}\n${this.state.password}\n${this.state.name}`
    );
  }

  async getSignup() {
    try {
      const response = await api.post(`/users`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        street: this.state.street,
        number: this.state.number,
        whatsApp: this.state.whatsApp,
      });

      console.log(response);

      alert('Cadastro efetuado com sucesso!');
      this.props.history.push('/login');
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <section
            className="section section-shaped section-lg"
            style={{ minHeight: '75vh' }}
          >
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 pb-lg-5">
                      <div className="text-center text-muted mb-5">
                        <h4 className="font-weight-bold">Cadastre-se</h4>
                      </div>
                      <Form onSubmit={this.handleSubmit} role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Nome"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Senha"
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <h5>Contato</h5>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i
                                  className="fa fa-mobile fa-2x"
                                  aria-hidden="true"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Telefone"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.handleChange}
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i
                                  className="fa fa-whatsapp fa-lg"
                                  aria-hidden="true"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Whatsapp"
                              name="whatsApp"
                              value={this.state.whatsApp}
                              onChange={this.handleChange}
                              type="tel"
                            />
                          </InputGroup>
                        </FormGroup>
                        <h5>Endereço</h5>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i
                                  className="fa fa-map-marker fa-lg"
                                  aria-hidden="true"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Rua / Avenida"
                              name="street"
                              value={this.state.street}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i
                                  className="fa fa-map-marker fa-lg"
                                  aria-hidden="true"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Número"
                              name="number"
                              value={this.state.number}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4 btn-block"
                            color="primary"
                            type="submit"
                          >
                            Criar conta
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default CadastroUsuario;
