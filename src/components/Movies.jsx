import Movie from './Movie';

export default function Movies(props) {

  return (
    <div className='filmsGrid'>
      {props.films.map((film) => (
        <Movie key={film.imdbID} {...film} />
      ))}
    </div>
  );
}
