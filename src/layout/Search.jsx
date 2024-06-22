import React from 'react';

export default class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  handleKeyDown = (event) => {
    if (event.code !== 'Enter') return;
    this.props.searchFilms(this.state.search, this.state.type); // this.props доступен по-умолчанию
  };
  handleRadio = (event) => {
    this.setState({type: event.target.dataset.type}, ()=>{
      this.props.searchFilms(this.state.search, this.state.type);
    });
  }
  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            className='validate'
            type='search'
            value={this.state.search}
            onChange={this.handleChange}
            placeholder='Search'
            onKeyDown={this.handleKeyDown}
          />
          <button
            className='btn searchButton cyan darken-2'
            onClick={() => this.props.searchFilms(this.state.search, this.state.type)}
          >
            Найти
          </button>
        </div>
        <div className='typeChecker'>
          <label>
            <input
              className='with-gap'
              name='filmType'
              type='radio'
              data-type='all'
              onChange={this.handleRadio}
              checked={this.state.type === 'all'}
            />
            <span>Всё</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='filmType'
              type='radio'
              data-type='series'
              onChange={this.handleRadio}
              checked={this.state.type === 'series'}
            />
            <span>Сериалы</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='filmType'
              type='radio'
              data-type='movie'
              onChange={this.handleRadio}
              checked={this.state.type === 'movie'}
            />
            <span>Фильмы</span>
          </label>
        </div>
      </div>
    );
  }
}
