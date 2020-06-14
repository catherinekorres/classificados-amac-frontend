import React, { Component } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import api from '../../services/api';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    try {
      const response = await api.get(`/products`);

      console.log(response);

      response.data.forEach(product => {
        const { products } = this.state;
        this.setState({
          products: [...products, product],
        });
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col md={4} key={i}>
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {formatter.format(product.price)}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Link href="#">Ver mais ></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}