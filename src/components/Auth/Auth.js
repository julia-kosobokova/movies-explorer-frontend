function Auth(props) {
    return (
        <main className="auth">
            <h1 className="auth__title">{props.title}</h1>
            <form
            name="loginForm"
            className="form auth__form"
            // onSubmit={handleSubmit}
            >
                <fieldset className="auth__form-set">
                    <div className={
                        props.hasName
                        ? "auth__name"
                        : "auth__name  auth__name_hidden"
                    }>
                        <label>Имя</label>
                        <input
                        type="name"
                        name="name"
                        required
                        // onChange={onEmailChange}
                        className="auth__input"
                        // value={formData.email}
                        />
                    </div>

                    <label>E-mail</label>
                    <input
                    type="email"
                    name="email"
                    required
                    // onChange={onEmailChange}
                    className="auth__input"
                    // value={formData.email}
                    />

                    <label>Пароль</label>
                    <input
                    type="password"
                    name="password"
                    required
                    // onChange={onPasswordChange}
                    className="auth__input"
                    // value={formData.password}
                    />

                    <button type="submit" className="auth__button">
                    {props.button}
                    </button>

                    <p className="auth__auth-footer">
                        {props.footerText}{" "}
                        <button
                            className="auth__auth-link"
                            type="button"
                            // onClick={handleLoginButton}
                        >
                            {props.footerLink}
                        </button>
                    </p>
                </fieldset>
            </form>
        </main>
    )
}

export default Auth;