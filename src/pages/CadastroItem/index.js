import React, { Component } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from 'reactstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import api from '../../services/api';

export default class CadastroItem extends Component {
  constructor() {
    super();
    this.state = {
      iconTabs: 1,
      plainTabs: 1,
      item: {
        name: '',
        description: '',
        price: undefined,
        investment: undefined,
      },
      product: true,
      service: false,
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState(prevState => ({
      [state]: index,
      product: !prevState.product,
      service: !prevState.service,
      item: {
        name: '',
        description: '',
        price: undefined,
        investment: undefined,
      },
      error: false,
    }));
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleChange(event) {
    this.setState({
      item: { ...this.state.item, [event.target.name]: event.target.value },
    });
    console.log(this.state.item);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.saveItem();
  }

  async saveItem() {
    try {
      const { name, description, price, investment } = this.state.item;

      let body = {
        seller: { id: localStorage.getItem('user_id') },
        name,
        description,
      };

      let path = '';

      if (this.state.product) {
        body = { ...body, price };
        path = '/products';
      } else if (this.state.service) {
        body = { ...body, investment };
        path = '/services';
      }

      console.log(body);

      const response = await api.post(`${path}`, body);

      console.log(response);

      if (this.state.product) {
        this.props.history.push(`/produtos/${response.data.id}`);
      } else if (this.state.service) {
        this.props.history.push(`/servicos/${response.data.id}`);
      }

      alert('Cadastro efetuado com sucesso!');
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Row className="justify-content-center">
            <Col className="my-5 mt-lg-0" lg="6">
              <Col sm={12}>
                <h2 className="display-3 mb-5">Criar um novo item</h2>
              </Col>
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 1}
                      className={classnames('mb-sm-3 mb-md-0', {
                        active: this.state.plainTabs === 1,
                      })}
                      onClick={e => this.toggleNavs(e, 'plainTabs', 1)}
                      href="#"
                      role="tab"
                    >
                      Produto
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 2}
                      className={classnames('mb-sm-3 mb-md-0', {
                        active: this.state.plainTabs === 2,
                      })}
                      onClick={e => this.toggleNavs(e, 'plainTabs', 2)}
                      href="#"
                      role="tab"
                    >
                      Serviço
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent activeTab={`plainTabs${this.state.plainTabs}`}>
                    <TabPane tabId="plainTabs1">
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
                              value={this.state.item.name}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Preço"
                              name="price"
                              value={this.state.item.price}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Descrição"
                              name="description"
                              value={this.state.item.description}
                              onChange={this.handleChange}
                              type="textarea"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4 btn-block"
                            color="primary"
                            type="submit"
                          >
                            Criar produto
                          </Button>
                        </div>
                      </Form>
                    </TabPane>
                    <TabPane tabId="plainTabs2">
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
                              value={this.state.item.name}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Valor do investimento"
                              name="investment"
                              value={this.state.item.investment}
                              onChange={this.handleChange}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Descrição"
                              name="description"
                              value={this.state.item.description}
                              onChange={this.handleChange}
                              type="textarea"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4 btn-block"
                            color="primary"
                            type="submit"
                          >
                            Criar serviço
                          </Button>
                        </div>
                      </Form>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              {this.state.error ? (
                <div className="alert alert-danger mt-4" role="alert">
                  Houve um erro com o cadastro do seu{' '}
                  {this.state.product ? 'produto' : 'serviço'}. Tente novamente
                  mais tarde.
                </div>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </main>
        <Footer />
      </>
    );
  }
}
