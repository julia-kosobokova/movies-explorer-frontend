import {
  Link
} from "react-router-dom";

function Navigation(props) {
  return ( <
    div className = "nav" >
    <
    nav className = {
      props.loggedIn ? "nav__movies" : "nav__movies nav__movies_hidden"
    } >
    <
    ul className = "nav__links" >
    <
    li className = "nav__list-item nav__list-item_movies" >
    <
    Link to = "/movies"
    className = "nav__link" >
    <
    button className = {
      `nav__button ${
                    props.activeLink === "movies" ? "nav__button_active" : ""
                  }`
    } >
    Фильмы <
    /button> <
    /Link> <
    /li> <
    li className = "nav__list-item nav__list-item_movies" >
    <
    Link to = "/saved-movies"
    className = "nav__link" >
    <
    button className = {
      `nav__button ${
                    props.activeLink === "saved-movies"
                      ? "nav__button_active"
                      : ""
                  }`
    } >
    Сохраненные фильмы <
    /button> <
    /Link> <
    /li> <
    /ul> <
    /nav>

    <
    nav className = {
      props.loggedIn ? "nav__empty nav__empty_hidden" : "nav__empty"
    } >
    < /nav> <
    /div>
  );
}

export default Navigation;