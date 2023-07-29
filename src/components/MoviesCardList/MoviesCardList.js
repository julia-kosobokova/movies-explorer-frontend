import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE, SCREEN_SIZE, SHORT_MOVIE_DURATION_IN_SECONDS } from "../../const";

function MoviesCardList(props) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [numberOfMoviesToShow, setNumberOfMoviesToShow] = React.useState(
    getMoviesCount().initial
  );

  function getMoviesCount() {
    if (document.documentElement.clientWidth >= SCREEN_SIZE.large) {
      return MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE.large;
    }

    if (document.documentElement.clientWidth >= SCREEN_SIZE.medium) {
      return MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE.medium;
    }

    if (document.documentElement.clientWidth >= SCREEN_SIZE.small) {
      return MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE.small;
    }

    return MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE.tiny;
  }

  const filterMovies = React.useCallback(() => {
    const hasMoviesLoaded = props.movies && props.movies.length > 0;
    const hasMoviesFound = props.moviesFound && props.moviesFound.length > 0;

    const movies = hasMoviesFound && !hasMoviesLoaded 
      ? props.moviesFound
      : props.movies;
    return movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 &&
        ((props.isShort && movie.duration <= SHORT_MOVIE_DURATION_IN_SECONDS) || !props.isShort)
    );
  }, [props.movies, props.isShort, props.search, props.moviesFound]);

  // Подсчет количества найденных фильмов
  const getFilteredMoviesCount = React.useCallback(() => {
    const count = filterMovies().length;
    return count;
  }, [filterMovies]);

  // Обработка кнопки Еще
  function handleMoreButton() {
    setNumberOfMoviesToShow(numberOfMoviesToShow + getMoviesCount().step);
  }

  // Добавляем обработчик события для пересчета количества карточек при изменении ширины окна
  React.useEffect(() => {
    const handleWindowResize = () => {
      setNumberOfMoviesToShow(getMoviesCount().initial);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  // Обновляем список найденных фильмов при изменении количества отобаражаемых фильмов по кнопке "Ещё"
  const storeMoviesFound = React.useCallback((moviesFound) => {
    setFilteredMovies(moviesFound.slice(0, numberOfMoviesToShow));
    
    if (props.onMoviesFound !== undefined) {
      props.onMoviesFound(moviesFound);
    }
  }, [props, setFilteredMovies, numberOfMoviesToShow]);

  React.useEffect(() => {
    if (props.search === "" && !props.savedMode) {
      storeMoviesFound([]);
      return;
    }

    if (props.search === "" && props.savedMode) {
      storeMoviesFound(props.movies);
      return;
    }

    const hasMoviesLoaded = props.movies && props.movies.length > 0;
    const hasMoviesFound = props.moviesFound && props.moviesFound.length > 0;
    if (!hasMoviesLoaded && hasMoviesFound) {
      // использовать сохраненные результаты поиска
      storeMoviesFound(props.moviesFound);
      return;
    }

    storeMoviesFound(filterMovies());
  }, [
    props.search,
    props.savedMode,
    props.movies,
    props.onMoviesFound,
    props.moviesFound,
    numberOfMoviesToShow,
    filterMovies,
    storeMoviesFound,
  ]);

  // Сбрасываем количество отображаемых фильмов при изменении поискового запроса
  React.useEffect(() => {
    setNumberOfMoviesToShow(getMoviesCount().initial);
  }, [props.search]);

  return (
    <>
      <span
        className={
          getFilteredMoviesCount() === 0 &&
          props.search !== "" &&
          props.search !== undefined &&
          props.search !== null &&
          !props.isLoading &&
          props.serverError === undefined 
            ? "movies-card-list__not-found"
            : "movies-card-list__not-found movies-card-list__not-found_hidden"
        }
      >
        Ничего не найдено
      </span>
      <div
        className={
          props.isLoading
            ? "movies-card-list__preloader"
            : "movies-card-list__preloader movies-card-list__preloader_hidden"
        }
      >
        <Preloader />
      </div>
      <div
        className={
          props.serverError !== undefined
            ? "movies-card-list__server-error"
            : "movies-card-list__server-error movies-card-list__server-error_hidden"
        }
      >
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз.
      </div>
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
          className={
            props.search === "" ||
            props.savedMode ||
            filteredMovies.length === getFilteredMoviesCount()
              ? "movies-card-list__more-button movies-card-list__more-button_hidden"
              : "movies-card-list__more-button"
          }
          onClick={handleMoreButton}
        >
          Ещё
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
