import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  function filterMovies() {
    if (props.search==="") {
      return [];
    }

    return props.movies.filter((movie) => movie.nameRU.indexOf(props.search)!==-1);
  }

  return (
    <ul className="movies-card-list">
      {filterMovies().map((movie) => (
        <MoviesCard
          movie={movie}
          key={`movie_${movie.movieId}`}
          onMovieSave={props.onMovieSave}
          savedMovie={props.savedMovie}
          onMovieClick={props.onMovieClick}
          savedMode={props.savedMode}
          onMovieDelete={props.onMovieDelete}
        />
        ))}
    </ul>
  );
}

export default MoviesCardList;
