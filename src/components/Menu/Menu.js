import { NavLink } from "react-router-dom";

function Menu(props) {
  // Кнопка Аккаунт
  function handleProfileButton() {
    props.onProfileButton();
  }

  return (
    <nav className={props.isVisible ? "menu" : "menu menu_hidden"}>
      <div className="menu__overlay"></div>

      <div className="menu__popup">
        <button
          type="button"
          className="menu__close-button"
          onClick={props.onClose}
        ></button>

        <ul className="menu__links">
          <li className="menu__list-item">
            <NavLink
              to="/"
              className={
                props.activeLink === "main"
                  ? "menu__link menu__link_active"
                  : "menu__link"
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/movies"
              className={
                props.activeLink === "movies"
                  ? "menu__link menu__link_active"
                  : "menu__link"
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/saved-movies"
              className={
                props.activeLink === "saved-movies"
                  ? "menu__link menu__link_active"
                  : "menu__link"
              }
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>

        <section className="menu__buttons">
          <button
            type="button"
            className="menu__button"
            onClick={handleProfileButton}
          ></button>
        </section>
      </div>
    </nav>
  );
}

export default Menu;
