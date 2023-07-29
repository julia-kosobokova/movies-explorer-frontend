import React from "react";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";

function MoviesCard(props) {
  const savedMovies = React.useContext(SavedMoviesContext);

  // Есть ли текущий фильм в списке сохраненных?
  const [isSaved, setIsSaved] = React.useState(false);

  // При изменении списка сохраненных фильмов
  React.useEffect(() => {
    // Проверяем, есть ли текущий фильм в списке сохраненных
    const movieIsSaved = savedMovies.some(
      (savedMovie) => savedMovie.movieId === props.movie.movieId
    );
    // Обновляем стейт
    setIsSaved(movieIsSaved);
  }, [savedMovies, props.movie.movieId]);

  function handleSaveMovie() {
    props.onMovieSave(props.movie);
  }

  function handleDeleteMovie() {
    props.onMovieDelete(props.movie);
  }

  return (
    <li className="card">
      <a
        href={props.movie.trailerLink}
        alt={props.movie.nameRU}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.movie.image}
          className="card__image"
          alt={props.movie.nameRU}
        />
      </a>
      <div className="card__footer">
        <div className="card__caption">
          <h2 className="card__name">{props.movie.nameRU}</h2>
          <p className="card__duration">
            {Math.floor(props.movie.duration / 60)}ч {props.movie.duration % 60}
            м
          </p>
        </div>

        <button
          type="button"
          className={
            "card__save-button" +
            (isSaved ? " card__save-button_hidden" : "") +
            (props.savedMode ? " card__save-button_hidden" : "")
          }
          onClick={handleSaveMovie}
        ></button>

        <button
          type="button"
          className={
            "card__save-button card__save-button_active" +
            (!isSaved ? " card__save-button_hidden" : "") +
            (props.savedMode ? " card__save-button_hidden" : "")
          }
          onClick={handleDeleteMovie}
        ></button>

        <button
          type="button"
          className={
            "card__remove-button" +
            (props.savedMode ? "" : " card__remove-button_hidden")
          }
          onClick={handleDeleteMovie}
        ></button>
      </div>
    </li>
  );
}

export default MoviesCard;
