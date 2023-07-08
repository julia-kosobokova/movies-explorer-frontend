import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <>
        <nav className={
            props.loggedIn
            ? "nav__sign nav__sign_hidden"
            : "nav__sign"
        }>
            <li>
                <Link to="/signup" className="nav__link">
                    <button className="nav__button">Регистрация</button>
                </Link>
            </li>
            <li>
                <Link to="/signin" className="nav__link nav__link_green">
                    <button className="nav__button nav__button-green">Войти</button>
                </Link>
            </li>
        </nav>

        <nav className={
            props.loggedIn
            ? "nav__movies"
            : "nav__movies nav__movies_hidden"
            }>
            <Link to="/movies" className="nav__link">
                <button className="nav__button">Фильмы</button>
            </Link>
            <Link to="/saved-movies" className="nav__link">
                <button className="nav__button">Сохраненные фильмы</button>
            </Link>
        </nav>

        <div className={
            props.loggedIn
            ? "nav__profile"
            : "nav__profile nav__profile_hidden"
            }>
            <Link to="/profile" className="nav__link">
                <button type="button" className="nav__profile" />
            </Link>
        </div>
        </>
    )
}

export default Navigation;