import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </>
    );
  }
}
