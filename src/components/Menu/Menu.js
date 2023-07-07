function Menu(props) {
    return (
        <nav className={props.isVisible ? 'menu' : 'menu menu_hidden'}>
            <div className="menu__overlay"></div>

            <button type="button" className="menu__close-button">X</button>
            
            <ul className="menu__links">
                <li className="menu__list-item">
                    <a href="/" className="menu__link">Главная</a>
                </li>
                <li className="menu__list-item">
                    <a href="/" className="menu__link menu__link_active">Фильмы</a>
                </li>
                <li className="menu__list-item">
                    <a href="/" className="menu__link">Сохраненные фильмы</a>
                </li>
            </ul>
            
            <section class="menu__buttons">
                <button type="button" className="menu__button">Аккаунт</button>
            </section>
        </nav>
    )
}

export default Menu;