import Movie from './Movie';

export default function Movies(props) {
  const { films = [] } = props; // если films приходит undefined, то ему назначается пустой массив
  return (
    <div className='filmsGrid'>
      {films.length ? (
        films.map((film) => (
          <Movie
            key={film.imdbID}
            {...film}
          />
        ))
      ) : (
        <h4>Ничего не нашлось <br /> {'¯\_(ツ)_/¯'}</h4>
      )}
    </div>
  );
}
