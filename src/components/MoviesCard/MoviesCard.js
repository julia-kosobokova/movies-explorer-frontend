function MoviesCard(props) {
  return (
    <li className="card">
      <img
        src="https://www.firestock.ru/wp-content/uploads/2019/03/TSaplya-raspravila-kryilya-v-stoge-sena-Heron-spreads-its-wings-in-a-haystack-4900--3073-700x438.jpg"
        className="card__image"
        alt="33 слова о дизайне"
      />
      <div className="card__footer">
        <div className="card__caption">
          <h2 className="card__name">33 слова о дизайне</h2>
          <p className="card__duration">1ч2м</p>
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
