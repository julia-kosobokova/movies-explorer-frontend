import Header from "../Header/Header";
import Auth from "../Auth/Auth";

function Login() {
    return (
        <>
            <Header />
            <Auth 
                title="Рады видеть!"
                button="Войти"
                footerText="Ещё не зарегистрированы?"
                footerLink="Регистрация"
            />
        
        </>
    )
}

export default Login;