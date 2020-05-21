import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

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
      const { produtos } = this.state;

      const response = await api.get(`/hello`);

      const data = {
        id: response.data.id,
        nome: response.data.nome,
        descricao: response.data.descricao,
        preco: response.data.preco,
      };

      console.log(response);

      this.setState({
        produtos: [...produtos, data],
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { produtos } = this.state;

    return (
      <div className="container">
        {produtos.map((produto, i) => (
          <div key={i}>
            <Card className="col-md-4 mt-5">
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {formatter.format(produto.preco)}
                </Card.Subtitle>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Link href="#">Ver mais ></Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
