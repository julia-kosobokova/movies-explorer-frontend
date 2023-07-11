import Auth from "../Auth/Auth";

function Register() {
  return ( <
    Auth hasName = {
      true
    }
    title = "Добро пожаловать!"
    button = "Зарегистрироваться"
    footerText = "Уже зарегистрированы?"
    footerLink = "Войти" /
    >
  );
}

export default Register;