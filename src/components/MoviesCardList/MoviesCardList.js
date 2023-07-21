import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const moviesPerPage = 3;

  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(moviesPerPage);

  // Обновляем список найденных фильмов при изменении количества отобаражаемых фильмов по кнопке "Ещё"
  React.useEffect(() => {
    if (props.search === "" && !props.savedMode) {
      setFilteredMovies ([]);
      return;
    }

    if (props.search === "" && props.savedMode) {
      setFilteredMovies (props.movies);
      return;
    }

    setFilteredMovies (props.movies
      .filter((movie) => movie.nameRU.indexOf(props.search) !== -1)
      .slice(0, visibleMoviesCount));
    }, [props.search, props.savedMode, props.movies, visibleMoviesCount]
  );

  // Сбрасываем количество отображаемых фильмов при изменении поискового запроса
  React.useEffect(() => {
    setVisibleMoviesCount(moviesPerPage);
  }, [props.search]
  );

  // Подсчет количества найденных фильмов
  function getFilteredMoviesCount() {
    const count=props.movies
      .filter((movie) => movie.nameRU.indexOf(props.search) !== -1)
      .length;
    return count;
  }

  function handleMoreButton() {
    setVisibleMoviesCount(visibleMoviesCount + moviesPerPage);
  }

  return (
    <>
      <ul className="movies-card-list">
        {filteredMovies.map((movie) => (
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
      <div className="movies-card-list__more">
        <button
          type="button"
          className={props.search === "" || props.savedMode || filteredMovies.length === getFilteredMoviesCount()
          ? "movies-card-list__more-button movies-card-list__more-button_hidden"
          : "movies-card-list__more-button"}
          onClick={handleMoreButton}
        >
          Ещё
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
