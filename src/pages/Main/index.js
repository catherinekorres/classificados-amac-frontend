import React, { Component } from 'react';

import Hero from '../../components/argon/Hero';
import CustomNavbar from '../../components/argon/CustomNavbar';
import Footer from '../../components/argon/Footer';

import Introduction from './Sections/Introduction';
import JoinTheCause from './Sections/JoinTheCause';
import RecentProducts from './Sections/RecentProducts';
import RecentServices from './Sections/RecentServices';

export default class Main extends Component {
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

          <Introduction />

          <JoinTheCause />

          <RecentProducts />

          <RecentServices />
        </main>
        <Footer />
      </>
    );
  }
}
