import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import api from '../../services/api';

export default class Servico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {},
      id: this.props.match.params.id,
      seller: {},
      error: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.getService(this.state.id);
  }

  handleClick() {
    this.deleteService(this.state.id);
  }

  deleteService = async id => {
    try {
      const response = await api.delete(`/services/${id}`);

      console.log(response);

      alert('Serviço deletado com sucesso!');
      this.props.history.push('/servicos');
    } catch (error) {
      alert(
        'Não foi possível deletar seu serviço. Tente novamente mais tarde.'
      );
      this.setState({ error: true });
    }
  };

  getService = async id => {
    try {
      const response = await api.get(`/services/${id}`);

      console.log(response);

      this.setState({ service: response.data, seller: response.data.seller });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    const { service, seller, error } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container>
            <a href="/servicos" className="font-weight-bold mt-5">
              <i className="fa fa-arrow-left pr-2" />
              Voltar para Serviços
            </a>
            {error ? (
              <div className="py-5 mt-4 mb-5 px-3 w-100">
                <h4
                  style={{
                    color: '#999',
                    textAlign: 'center',
                  }}
                >
                  O serviço selecionado não existe.
                </h4>
              </div>
            ) : (
              <Row className="my-5 pb-5">
                <Col md="12">
                  {/* eslint-disable-next-line eqeqeq */}
                  {seller.id == localStorage.getItem('user_id') ? (
                    <div
                      className="alert bg-secondary d-flex justify-content-between align-items-center"
                      role="alert"
                    >
                      <h6>Este produto é seu!</h6>
                      <Button onClick={this.handleClick}>
                        Deletar produto
                      </Button>
                    </div>
                  ) : (
                    ''
                  )}
                </Col>
                <Col md="7" className="pr-4">
                  <h2 className="display-2">{service.name}</h2>
                  <h4 className="text-success font-weight-bold">
                    {service.investment}
                  </h4>
                  <p className="">{service.description}</p>
                </Col>
                <Col md="5">
                  <h2 className="display-4 text-primary mt-4">
                    <i className="fa fa-id-card pr-2" /> Vendedor
                  </h2>
                  <h4 className="font-weight-bold">{seller.name}</h4>
                  <p className="text-muted">
                    Entre em contato para adquirir este serviço!
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
            )}
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
