import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class CustomNavbar extends React.Component {
  state = {
    collapseClasses: '',
    collapseOpen: false,
    login: false,
    dropdownOpen: false,
  };

  componentDidMount() {
    const headroom = new Headroom(document.getElementById('navbar-main'));
    // // initialise
    headroom.init();

    if (localStorage.getItem('user_id')) {
      this.setState({ login: true });
    }
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  toggle = () => {
    console.log(this.state.dropdownOpen);
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  };

  getLogout = () => {
    localStorage.removeItem('user_id');
    window.location.reload(false);
    alert('Logout efetuado com sucesso.');
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            sticky="top"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <h4 className="font-weight-bold">
                          Classificados de Cognópolis
                        </h4>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink href="/">
                      <i className="ni ni-shop d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Início</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/produtos">
                      <i className="ni ni-bag-17 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Produtos</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/servicos">
                      <i className="ni ni-settings d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Serviços</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contato">
                      <i className="ni ni-email-83 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contato</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-lg-none d-block ml-lg-4">
                    <NavLink href="/login">
                      <i className="ni ni-circle-08 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Login</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <div className="dropdown-divider" />
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <h6 className="d-lg-none mt-3 font-weight-bold">
                    Compartilhe essa ideia nas redes sociais!
                  </h6>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Whatsapp
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Compartilhe no Whatsapp
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-f" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Compartilhe no Facebook
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Compartilhe no Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Compartilhe no LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    {this.state.login ? (
                      <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                        style={{ zIndex: 999 }}
                      >
                        <DropdownToggle
                          tag="a"
                          className="text-white bg-transparent"
                          caret
                        >
                          <i className="fa fa-user-circle fa-lg" />
                        </DropdownToggle>
                        <DropdownMenu style={{ marginTop: 15 }}>
                          <DropdownItem disabled>Perfil</DropdownItem>
                          <DropdownItem>Cadastrar Produto/Serviço</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem onClick={this.getLogout}>
                            Sair
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="/login"
                      >
                        <span className="nav-link-inner--text ml-1">Login</span>
                      </Button>
                    )}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default CustomNavbar;
