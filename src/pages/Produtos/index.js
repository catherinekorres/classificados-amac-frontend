import React, { Component } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';
import Pagination from '../../components/argon/Pagination';

import api from '../../services/api';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentPage: 0,
      totalPages: null,
      error: false,
      search: '',
    };
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    this.getProducts(0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.getProducts(this.state.currentPage);
      window.scrollTo(0, this.myRef.current.offsetTop);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.search);
  }

  getProducts = async page => {
    this.setState({ products: [] });
    try {
      const response = await api.get(`/products/page/${page}`);

      console.log(response);

      response.data.content.forEach(product => {
        this.setState({
          products: [...this.state.products, product],
        });
      });

      this.setState({ totalPages: response.data.totalPages });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  handlePageClick = (e, index) => {
    e.preventDefault();

    this.setState(
      {
        currentPage: index,
      },
      console.log(this.state.currentPage)
    );
  };

  render() {
    const { products, currentPage, totalPages, error } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container ref={this.myRef}>
            <Row className="mt-5">
              <Col sm={12}>
                <h2 className="display-3 mb-5">Produtos</h2>
              </Col>
            </Row>
          </Container>

          <div className="py-4 bg-secondary d-flex align-items-center">
            <Container>
              <Row>
                <Col md="6" sm="12">
                  <Form className="d-flex align-items-center">
                    <FormGroup
                      className={classnames(
                        {
                          focused: this.state.searchAltFocused,
                        },
                        'flex-grow-1'
                      )}
                      style={{ marginBottom: 0 }}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-zoom-split-in" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Nome do produto"
                          type="text"
                          name="search"
                          value={this.state.search}
                          onChange={this.handleChange}
                          onFocus={e =>
                            this.setState({ searchAltFocused: true })
                          }
                          onBlur={e =>
                            this.setState({ searchAltFocused: false })
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                    <Button type="submit">Buscar</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>

          <Container>
            <Row>
              {error ? (
                <div className="pb-5 mb-5 px-3 w-100">
                  <h4
                    style={{
                      color: '#999',
                      textAlign: 'center',
                    }}
                  >
                    Não foram encontrados produtos
                  </h4>
                </div>
              ) : (
                products.map((product, i) => (
                  <Col md={3} key={i}>
                    <Card className="my-3">
                      <Card.Body>
                        <Card.Title className="font-weight-bold">
                          {product.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-success">
                          {formatter.format(product.price)}
                        </Card.Subtitle>
                        <Card.Text className="text-muted">
                          {product.description.length < 40
                            ? `${product.description}`
                            : `${product.description.substr(0, 40)}...`}
                        </Card.Text>
                        <Card.Link
                          href={`/produtos/${product.id}`}
                          className="font-weight-bold"
                        >
                          Detalhes <i className="fa fa-arrow-right pl-2" />
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
            {error ? (
              ''
            ) : (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={this.handlePageClick}
              />
            )}
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
