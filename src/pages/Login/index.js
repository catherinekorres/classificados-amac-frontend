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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    this.getLogin();
    console.log(`${this.state.email}\n${this.state.password}`);
  }

  async getLogin() {
    try {
      const response = await api.get(`/users`);

      const user = response.data.find(
        user =>
          user.email === this.state.email &&
          user.password === this.state.password
      );

      this.setState({ error: false });

      if (user !== undefined) {
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_name', user.name);
        this.props.history.push('/');
      }
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
                        <h4 className="font-weight-bold">Faça seu login</h4>
                      </div>
                      <Form onSubmit={this.handleSubmit} role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
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
                              name="password"
                              type="password"
                              autoComplete="off"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        {/* <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div> */}
                        <div className="text-center">
                          <Button
                            className="my-4 btn-block"
                            color="primary"
                            type="submit"
                          >
                            Entrar
                          </Button>
                        </div>
                        {this.state.error ? (
                          <div className="alert alert-danger" role="alert">
                            Houve um erro com o seu login. Cheque suas
                            informações e tente novamente mais tarde.
                          </div>
                        ) : (
                          ''
                        )}
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        className="text-light"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Esqueceu sua senha?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a className="text-light" href="/cadastro">
                        <small>Criar nova conta</small>
                      </a>
                    </Col>
                  </Row>
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

export default Login;
