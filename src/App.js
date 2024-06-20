import React from 'react'

import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

export default class App extends React.Component {
  state = {
    films: [],
    isLoading: false,
    search: 'Ocean',
    page: 1,
  }

  constructor(){
    super();
    this.search();
  }
  
  search = () =>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=162975a6&s=${this.state.search}&page=${this.state.page}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.Response === 'True'){
          // console.log(data.Search);
          this.setState({films: data.Search});
        }else{
          console.log('error')
        }
      })
  }

  render() {
    return (
      <>
        <Header />
        <Main searchResult={this.state.films} />
        <Footer />
      </>
    );
  }
}
