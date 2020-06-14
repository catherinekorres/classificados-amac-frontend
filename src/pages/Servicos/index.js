import React, { Component } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';
import Pagination from '../../components/argon/Pagination';

import api from '../../services/api';

export default class Servicos extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [] };
  }

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    this.getServices();
  }

  getServices = async () => {
    try {
      const response = await api.get(`/services/page/0`);

      console.log(response);

      response.data.content.forEach(service => {
        const { services } = this.state;
        this.setState({
          services: [...services, service],
        });
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { services } = this.state;

    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />

          <Container className="py-5">
            <Row className="mt-5 mb-3 pb-3">
              <Col sm={12}>
                <h2 className="display-3 mb-5">Serviços</h2>
              </Col>
              {services.map((service, i) => (
                <Col md={3} key={i}>
                  <Card className="my-3">
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {service.investment}
                      </Card.Subtitle>
                      <Card.Text>{service.description}</Card.Text>
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
