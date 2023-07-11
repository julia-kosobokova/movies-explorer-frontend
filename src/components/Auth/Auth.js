import {
  Link
} from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Auth(props) {
  return ( <
    main className = "auth" >
    <
    header className = "auth__header" >
    <
    Link to = "/"
    className = "auth__link" >
    <
    img src = {
      logo
    }
    alt = "Логотип проекта"
    className = "auth__logo" / >
    <
    /Link> <
    h1 className = "auth__title" > {
      props.title
    } < /h1> <
    /header>

    <
    form name = "authForm"
    className = "auth__form"
    // onSubmit={handleSubmit}
    >
    <
    fieldset className = "auth__form-set" >
    <
    div className = {
      props.hasName ? "auth__name" : "auth__name  auth__name_hidden"
    } >
    <
    label className = "auth__label" > Имя < /label> <
    input type = "name"
    name = "name"
    required
    // onChange={onEmailChange}
    className = "auth__input"
    // value={formData.email}
    /
    >
    <
    /div>

    <
    label className = "auth__label" > E - mail < /label> <
    input type = "email"
    name = "email"
    required
    // onChange={onEmailChange}
    className = "auth__input"
    // value={formData.email}
    /
    >

    <
    div className = "auth__input-group auth__input-group_error" >
    <
    label className = "auth__label" > Пароль < /label> <
    input type = "password"
    name = "password"
    required
    // onChange={onPasswordChange}
    className = "auth__input auth__input_error"
    // value={formData.password}
    /
    >
    <
    span className = "auth__input-error" > Что - то пошло не так... < /span> <
    /div>

    <
    button type = "submit"
    className = "auth__button" > {
      props.button
    } <
    /button>

    <
    p className = "auth__footer" > {
      props.footerText
    } {
      " "
    } <
    button className = "auth__footer-link"
    type = "button"
    // onClick={handleLoginButton}
    >
    {
      props.footerLink
    } <
    /button> <
    /p> <
    /fieldset> <
    /form> <
    /main>
  );
}

export default Auth;