import { useState } from "react";
import { MOVIES_URL } from "../../const";
import { mainApi } from "../../utils/MainApi";

function MoviesCard(props) {

  // let [movieIsSaved, setMovieIsSaved] = useState(false);

  // const saveMovie = () => {
  //   setMovieIsSaved(true);
  // };

  // const hideMenu = () => {
  //   setMenuIsVisible(false);
  // };

  function handleSaveMovie() {
    props.onMovieSave(props.movie);
  }

  async function isSaved() {
    const res = await mainApi.findMovies();
    // .then((res)=> {
      const savedMovies = res.data;
      const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === props.movie.id);
      return isSaved;
    // });
  }

  return (
    <li className="card">
      <img
        src={MOVIES_URL + props.movie.image.url}
        className="card__image"
        alt={props.movie.nameRU}
      />
      <div className="card__footer">
        <div className="card__caption">
          <h2 className="card__name">{props.movie.nameRU}</h2>
          <p className="card__duration">{Math.floor(props.movie.duration / 60)}ч {props.movie.duration % 60}м</p>
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
