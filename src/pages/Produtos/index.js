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
    this.state = { products: [] };
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await api.get(`/products/page/0`);

      console.log(response);

      response.data.content.forEach(product => {
        const { products } = this.state;
        this.setState({
          products: [...products, product],
        });
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container className="py-5">
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
            <Pagination />
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
