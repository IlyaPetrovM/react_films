import React from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from './Search';

export default class Main extends React.Component {
  state = {
    films: [],
    loading:true,
  };
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=162975a6&s=lord`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ films: data.Search, loading:false });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  searchFilms = (search, type = 'all') =>{
    this.setState({loading:true});
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=162975a6&s=${search}${type=='all' ? '' :'&type='+type}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ films: data.Search, loading:false });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { films, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchFilms={this.searchFilms} />
        {!loading ? <Movies films={films} /> : <Preloader />}
      </main>
    );
  }
}
