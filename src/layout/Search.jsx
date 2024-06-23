import React, { useEffect, useState } from 'react';

export default function Search (props){
const {searchFilms} = props;
const [search, setSearch] = useState('');
const [type, setType] = useState('all');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.code !== 'Enter') return;
    searchFilms(search, type); 
  };

  const handleRadio = (event) => {
    setType(event.target.dataset.type)
  }
  useEffect(()=>{
    searchFilms(search, type);
  }, [type])

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          className='validate'
          type='search'
          value={search}
          onChange={handleChange}
          placeholder='Search'
          onKeyDown={handleKeyDown}
        />
        <button
          className='btn searchButton cyan darken-2'
          onClick={() => searchFilms(search, type)}
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
            onChange={handleRadio}
            checked={type === 'all'}
          />
          <span>Всё</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='filmType'
            type='radio'
            data-type='series'
            onChange={handleRadio}
            checked={type === 'series'}
          />
          <span>Сериалы</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='filmType'
            type='radio'
            data-type='movie'
            onChange={handleRadio}
            checked={type === 'movie'}
          />
          <span>Фильмы</span>
        </label>
      </div>
    </div>
  );
}
