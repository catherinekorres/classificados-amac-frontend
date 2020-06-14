import React, { Component } from 'react';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

export default class Contato extends Component {
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <main ref="main">
          <Hero />
          Contato
        </main>
        <Footer />
      </>
    );
  }
}
