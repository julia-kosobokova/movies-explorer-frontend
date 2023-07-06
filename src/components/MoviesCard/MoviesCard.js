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

                <button type="button" className={
                    props.isSaved===true
                    ? "card__save-button card__save-button_active"
                    : "card__save-button" 
                }>

                </button>
            </div>
        </li>
    )
}

export default MoviesCard;