import { MOVIES_URL } from "../../const";

function MoviesCard(props) {
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
            (props.isSaved === true ? " card__save-button_active" : "") +
            (props.savedMode === true ? " card__save-button_hidden" : "")
          }
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
