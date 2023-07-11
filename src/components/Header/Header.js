import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { useState } from "react";

function Header(props) {
  let [menuIsVisible, setMenuIsVisible] = useState(false);

  const showMenu = () => {
    setMenuIsVisible(true);
  };

  const hideMenu = () => {
    setMenuIsVisible(false);
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </Link>
      <div className="header__center">
        <Navigation loggedIn={props.loggedIn} activeLink={props.activeLink} />
      </div>
      <div className="header__right">
        <nav
          className={
            props.loggedIn ? "header__sign header__sign_hidden" : "header__sign"
          }
        >
          <ul className="header__links">
            <li className="header__list-item">
              <Link to="/signup" className="header__link">
                <button className="header__button">Регистрация</button>
              </Link>
            </li>
            <li className="header__list-item">
              <Link to="/signin" className="header__link header__link_green">
                <button className="header__button header__button-green">Войти</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={
            props.loggedIn ? "header__profile" : "header__profile header__profile_hidden"
          }
        >
          <Link to="/profile" className="header__link">
            <button type="button" className="header__profile-button" />
          </Link>
        </div>

        <div
          className={
            props.loggedIn ? "header__icon" : "header__icon header__icon_hidden"
          }
        >
          <button type="button" className="header__icon-button" onClick={showMenu} />
        </div>
      </div>

      <Menu isVisible={menuIsVisible} onClose={hideMenu} />
    </header>
  );
}

export default Header;
