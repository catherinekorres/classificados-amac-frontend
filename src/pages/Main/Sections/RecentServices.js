import React, { Component } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import api from '../../../services/api';

export default class RecentServices extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [], error: false };
  }

  async componentDidMount() {
    this.getServices();
  }

  getServices = async () => {
    try {
      const response = await api.get(`/services`);

      console.log(response);

      response.data.content.forEach(service => {
        const { services } = this.state;
        this.setState({
          services: [...services, service],
        });
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    const { services, error } = this.state;

    return (
      <Container>
        <Row className="my-5 pb-5">
          <Col sm={12}>
            <h2 className="display-3 mb-0">Serviços recentes</h2>
          </Col>
          {error ? (
            <div className="py-5 px-3">Não foram encontrados serviços.</div>
          ) : (
            services.map((service, i) => (
              <Col md={3} key={i}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      {service.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-success">
                      {service.investment}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      {service.description.length < 40
                        ? `${service.description}`
                        : `${service.description.substr(0, 40)}...`}
                    </Card.Text>
                    <Card.Link
                      href={`/servicos/${service.id}`}
                      className="font-weight-bold"
                    >
                      Detalhes <i className="fa fa-arrow-right pl-2" />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
          <Col sm={12}>
            <Button
              className="btn-icon mt-4 mb-3 mb-sm-0"
              color="github"
              href="/servicos"
              size="lg"
            >
              {/* <span className="btn-inner--icon mr-1">
                        <i className="fa fa-github" />
                      </span> */}
              <span className="btn-inner--text">Ver mais serviços</span>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
