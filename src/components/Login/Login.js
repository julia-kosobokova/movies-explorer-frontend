import Auth from "../Auth/Auth";

function Login(props) {
  
  return (
    <Auth
      title="Рады видеть!"
      button="Войти"
      footerText="Ещё не зарегистрированы?"
      footerLink="Регистрация"
      onAuthUser={props.onLoginUser}
      onAuthButton={props.onRegisterButton}
    />
  );
}

export default Login;
