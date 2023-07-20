import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-card-list">
      {props.movies.map((movie) => (
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
