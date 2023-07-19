import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-card-list">
      {/* <MoviesCard isSaved={true} savedMode={props.savedMode} /> */}
      {/* <MoviesCard savedMode={props.savedMode} /> */}
      {props.movies.map((movie) => (
        <MoviesCard
          movie={movie}
          // key={card._id}
          // onCardClick={props.onCardClick}
          onMovieSave={props.onMovieSave}
          savedMovie={props.savedMovie}
          onMovieClick={props.onMovieClick}
          savedMode={props.savedMode}
          // onCardDelete={props.onCardDelete}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
