import React from 'react';

import Movies from '../components/Movies';

export default class Main extends React.Component {
  state = {
    films: [],
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=162975a6&s=matri`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ films: data.Search });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { films } = this.state;
    return (
      <main className='container content'>
        {films.length ? <Movies films={films} /> : <h4>Loading...</h4>}
      </main>
    );
  }
}
