import React from "react";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";

function MoviesCard(props) {
  const savedMovies = React.useContext(SavedMoviesContext);

  function handleSaveMovie() {
    props.onMovieSave(props.movie);
  }

  function isSaved() {
    const isSaved = savedMovies.some(
      (savedMovie) => savedMovie.movieId === props.movie.movieId
    );
    return isSaved;
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
            (isSaved() === true ? " card__save-button_active" : "") +
            (props.savedMode === true ? " card__save-button_hidden" : "")
          }
          onClick={handleSaveMovie}
        ></button>

        <button
          type="button"
          className={
            "card__remove-button" +
            (props.savedMode === true ? "" : " card__remove-button_hidden")
          }
        ></button>
      </div>
    </li>
  );
}

export default MoviesCard;
