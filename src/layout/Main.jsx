import React, { useState } from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from './Search';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function Main(){
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const componentDidMount = () => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=lord`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  componentDidMount();

  const searchFilms = (search, type = 'all') =>{
    setLoading(true);
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}${type=='all' ? '' :'&type='+type}`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

    return (
      <main className='container content'>
        <Search searchFilms={searchFilms} />
        {!loading ? <Movies films={films} /> : <Preloader />}
      </main>
    );
}
