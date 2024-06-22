import React from 'react';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

export default class App extends React.Component {
  state = {
    search: 'Ocean',
    page: 1,
  };

  constructor() {
    super();
  }

  


  render() {
    return (
      <>
        <Header />
        <Main search={this.state.films} />
        <Footer />
      </>
    );
  }
}
