import React, { Component } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

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
    this.state = { products: [], currentPage: 0, totalPages: null };
    this.myRef = React.createRef();
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
      alert(error);
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
    const { products, currentPage, totalPages } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container className="py-5" ref={this.myRef}>
            <Row className="mt-5 mb-3 pb-3">
              <Col sm={12}>
                <h2 className="display-3 mb-5">Produtos</h2>
              </Col>
              {products.map((product, i) => (
                <Col md={3} key={i}>
                  <Card className="my-3">
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {formatter.format(product.price)}
                      </Card.Subtitle>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Link href="#">Detalhes ></Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageClick={this.handlePageClick}
            />
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
