import React, { Component } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import api from '../../../services/api';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default class RecentProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await api.get(`/products`);

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
      <Container className="pt-5">
        <Row className="mt-5 pb-3">
          <Col sm={12}>
            <h2 className="display-3 mb-0">Produtos recentes</h2>
          </Col>
          {products.map((product, i) => (
            <Col md={3} key={i}>
              <Card className="mt-5">
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
          <Col sm={12}>
            <Button
              className="btn-icon mt-4 mb-3 mb-sm-0"
              color="github"
              href="/produtos"
              size="lg"
            >
              {/* <span className="btn-inner--icon mr-1">
                        <i className="fa fa-github" />
                      </span> */}
              <span className="btn-inner--text">Ver mais produtos</span>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
