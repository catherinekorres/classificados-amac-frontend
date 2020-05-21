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
    this.state = { produtos: [] };
  }

  async componentDidMount() {
    try {
      const response = await api.get(`/produtos`);

      console.log(response);

      response.data.forEach(produto => {
        this.setState({
          produtos: [...this.state.produtos, produto],
        });
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { produtos } = this.state;

    return (
      <Container>
        <Row>
          {produtos.map((produto, i) => (
            <Col md={4} key={i}>
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {formatter.format(produto.preco)}
                  </Card.Subtitle>
                  <Card.Text>{produto.descricao}</Card.Text>
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
