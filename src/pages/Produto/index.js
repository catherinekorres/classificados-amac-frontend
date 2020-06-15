import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import api from '../../services/api';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, id: this.props.match.params.id, seller: {} };
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.getProduct(this.state.id);
  }

  getProduct = async id => {
    try {
      const response = await api.get(`/products/${id}`);

      console.log(response);

      this.setState({ product: response.data, seller: response.data.seller });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { product, seller } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container>
            <a href="/produtos" className="font-weight-bold mt-5">
              <i className="fa fa-arrow-left pr-2" />
              Voltar para Produtos
            </a>
            <Row className="my-5 pb-5">
              <Col md="7" className="pr-4">
                <h2 className="display-2">{product.name}</h2>
                <h4 className="text-success font-weight-bold">
                  {formatter.format(product.price)}
                </h4>
                <p className="">{product.description}</p>
              </Col>
              <Col md="5">
                <h2 className="display-4 text-primary mt-4">
                  <i className="fa fa-id-card pr-2" /> Vendedor
                </h2>
                <h4 className="font-weight-bold">{seller.name}</h4>
                <p className="text-muted">
                  Entre em contato para adquirir este produto!
                </p>
                <h5>
                  <i className="fa fa-envelope pr-2" /> {seller.email}
                </h5>
                <h5>
                  <i className="fa fa-phone fa-lg pr-2" /> {seller.phone}
                </h5>
                <h5>
                  <i className="fa fa-whatsapp pr-2" aria-hidden="true" />
                  <a href={`https://wa.me/${seller.whatsApp}`}>
                    +{seller.whatsApp}
                  </a>
                </h5>
                <h5>
                  <i className="fa fa-map-marker fa-lg pr-3" />
                  {seller.street}, {seller.number}
                </h5>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
