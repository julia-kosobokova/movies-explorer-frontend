import Header from "../Header/Header";
import Auth from "../Auth/Auth";

function Register() {
    return (
    <>
        <Header />
        <Auth 
            hasName={true}
            title="Добро пожаловать!"
            button="Зарегистрироваться"
            footerText="Уже зарегистрированы?"
            footerLink="Войти"
        />
    </>
    )
}

export default Register;