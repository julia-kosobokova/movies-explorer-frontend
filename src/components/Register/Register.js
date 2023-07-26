import Auth from "../Auth/Auth";

function Register(props) {

  return (
    <Auth
      hasName={true}
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      footerText="Уже зарегистрированы?"
      footerLink="Войти"
      onAuthUser={props.onRegisterUser}
      onAuthButton={props.onLoginButton}
      serverError={props.serverError}
    />
  );
}

export default Register;
