export default function (props) {
  console.log(props);
  const { Title: title, Poster: poster, Year: year } = props;

  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        { poster === 'N/A' ? (
          <img className='activator' src={`https://placehold.co/300x400?text=${title}`} />
        )
        : (<img className='activator' src={poster} />)
        }
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title} - {year}
        </span>
      </div>
    </div>
  );
}
