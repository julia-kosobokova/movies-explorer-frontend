import { NavLink } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { useState } from "react";

function Header(props) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const showMenu = () => {
    setMenuIsVisible(true);
  };

  const hideMenu = () => {
    setMenuIsVisible(false);
  };

  // Кнопка регистрации в Header
  function handleRegisterButton() {
    props.onRegisterButton();
  }

  // Кнопка аутентификации в Header
  function handleLoginButton() {
    props.onLoginButton();
  }

  // Кнопка аккаунта в Header
  function handleProfileButton() {
    props.onProfileButton();
  }

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </NavLink>
      <div className="header__center">
        <Navigation
          loggedIn={props.loggedIn}
          activeLink={props.activeLink}
          onMoviesButton={props.onMoviesButton}
          onSavedMoviesButton={props.onSavedMoviesButton}
        />
      </div>
      <div className="header__right">
        <nav
          className={
            props.loggedIn ? "header__sign header__sign_hidden" : "header__sign"
          }
        >
          <ul className="header__links">
            <li className="header__list-item">
              <span className="header__link">
                <button
                  className="header__button"
                  type="button"
                  onClick={handleRegisterButton}
                >
                  Регистрация
                </button>
              </span>
            </li>
            <li className="header__list-item">
              <span className="header__link header__link_green">
                <button
                  className="header__button header__button-green"
                  type="button"
                  onClick={handleLoginButton}
                >
                  Войти
                </button>
              </span>
            </li>
          </ul>
        </nav>
        <div
          className={
            props.loggedIn
              ? "header__profile"
              : "header__profile header__profile_hidden"
          }
        >
          <button
            className={`header__profile-button ${
              props.activeLink === "profile"
                ? "header__profile-button_active-page"
                : ""
            }`}
            type="button"
            onClick={
              props.activeLink === "profile" ? null : handleProfileButton
            }
          />
        </div>

        <div
          className={
            props.loggedIn ? "header__icon" : "header__icon header__icon_hidden"
          }
        >
          <button
            type="button"
            className="header__icon-button"
            onClick={showMenu}
          />
        </div>
      </div>

      <Menu
        isVisible={menuIsVisible}
        onClose={hideMenu}
        onProfileButton={props.onProfileButton}
        activeLink={props.activeLink}
      />
    </header>
  );
}

export default Header;
