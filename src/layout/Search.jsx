import React from 'react';

export default class Search extends React.Component {
  state = {
    search: '',
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  handleKeyDown = (event) => {
    console.log(event);
    if (event.code !== 'Enter') return;
    this.props.search(this.state.search); // this.props доступен по-умолчанию
  };
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
            onClick={() => this.props.search(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
