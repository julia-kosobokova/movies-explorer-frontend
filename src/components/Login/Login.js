import Auth from "../Auth/Auth";

function Login() {
    return (
            <Auth 
                title="Рады видеть!"
                button="Войти"
                footerText="Ещё не зарегистрированы?"
                footerLink="Регистрация"
            />
    )
}

export default Login;