import Movie from "./Movie";

export default function Movies(props){
  
  console.log(props.films);

  return (
    <div className="filmsGrid" >
      { 
        props.films.map(film => (
          <Movie 
            key={film.imdbID} 
            title={film.Title} 
            image={film.Poster} />
        ))
      }
    </div>
  );
}