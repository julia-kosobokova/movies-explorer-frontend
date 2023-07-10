import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <nav className={props.isVisible ? 'menu' : 'menu menu_hidden'}>
            <div className="menu__overlay"></div>

            <div className="menu__popup">
                <button type="button" className="menu__close-button" onClick={props.onClose}></button>
                
                <ul className="menu__links">
                    <li className="menu__list-item">
                        <Link to="/" className="menu__link">Главная</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link to="/movies" className="menu__link menu__link_active">Фильмы</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link to="/saved-movies" className="menu__link">Сохраненные фильмы</Link>
                    </li>
                </ul>

                <section className="menu__buttons">
                    <button type="button" className="menu__button"></button>
                </section>
            </div>
        </nav>
    )
}

export default Menu;