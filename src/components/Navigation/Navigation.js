import { NavLink } from "react-router-dom";

function Navigation(props) {

  // Кнопка Фильмы в Header
  function handleMoviesButton() {
    console.log("jehgfdhgsr.k");
    props.onMoviesButton()
  }

  // Кнопка Сохраненные фильмы в Header
  function handleSavedMoviesButton() {
    console.log("88776");
    props.onSavedMoviesButton()
  }

  return (
    <div className="nav">
        <nav
          className={
            props.loggedIn ? "nav__movies" : "nav__movies nav__movies_hidden"
          }
        >
          <ul className="nav__links">
            <li className="nav__list-item nav__list-item_movies">
              <span className="nav__link">
                <button
                  className={`nav__button ${
                    props.activeLink === "movies" ? "nav__button_active-page" : ""
                  }`}
                  type="button"
                  onClick={props.activeLink==="movies"
                  ? null
                  : handleMoviesButton
                }
                >
                  Фильмы
                </button>
              </span>
            </li>
            <li className="nav__list-item nav__list-item_movies">
              <span className="nav__link">
                <button
                  className={`nav__button ${
                    props.activeLink === "saved-movies"
                      ? "nav__button_active-page"
                      : ""
                  }`}
                  type="button"
                  onClick={props.activeLink==="saved-movies"
                    ? null
                    : handleSavedMoviesButton
                  }
                >
                  Сохраненные фильмы
                </button>
              </span>
            </li>
          </ul>
        </nav>

        <nav
          className={
            props.loggedIn ? "nav__empty nav__empty_hidden" : "nav__empty"
          }
        ></nav>
    </div>
  );
}

export default Navigation;
