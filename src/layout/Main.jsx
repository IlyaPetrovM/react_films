import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from './Search';

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
  search = (s) =>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=162975a6&s=${s}`)
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
        <Search search={this.search} />
        {films.length ? <Movies films={films} /> : <Preloader />}
      </main>
    );
  }
}
