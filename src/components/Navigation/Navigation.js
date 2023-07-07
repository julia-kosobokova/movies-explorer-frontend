function Navigation(props) {
    return (
        <>
        <nav className={
            props.loggedIn
            ? "nav__sign nav__sign_hidden"
            : "nav__sign"
        }>
            Регистрация
            Войти
        </nav>

        <nav className={
            props.loggedIn
            ? "nav__movies"
            : "nav__movies nav__movies_hidden"
            }>
            Фильмы
            Сохраненные фильмы
        </nav>

        <div className={
            props.loggedIn
            ? "nav__profile"
            : "nav__profile nav__profile_hidden"
            }>
            Аккаунт
        </div>
        </>
    )
}

export default Navigation;