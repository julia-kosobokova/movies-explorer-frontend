import Auth from "../Auth/Auth";

function Login(props) {
  
  return (
    <Auth
      activeLink="login"
      title="Рады видеть!"
      button="Войти"
      footerText="Ещё не зарегистрированы?"
      footerLink="Регистрация"
      onAuthUser={props.onLoginUser}
      onAuthButton={props.onRegisterButton}
      serverError={props.serverError}
    />
  );
}

export default Login;
