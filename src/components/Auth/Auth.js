import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import { NAME_VALIDATION_RX, EMAIL_VALIDATION_RX } from "../../const";

function Auth(props) {

  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [inputErrors, setInputErrors] = React.useState({ name: "", email: "", password: "" });

  function onNameChange(event) {
    // Обновляем стейт
    setFormData({
      ...formData,
      name: event.target.value,
    });

    // Валидация
    if (event.target.value==="") {
      setInputErrors({
        ...inputErrors,
        name:"Заполните это поле."});
        return;
    }

    if (!NAME_VALIDATION_RX.test(event.target.value)) {
      setInputErrors({
        ...inputErrors,
        name:"Имя может содержать только латиницу, кириллицу, пробел или дефис."});
        return;
    }

    if (event.target.value.length < 2 || event.target.value.length > 30) {
      setInputErrors({
        ...inputErrors,
        name:"Имя должно быть длиной от 2 до 30 символов."});
        return;
    }

    setInputErrors({
      ...inputErrors,
      name: ""});
  }
  
  function onEmailChange(event) {
    // Обновляем стейт
    setFormData({
      ...formData,
      email: event.target.value,
    });

    // Валидация
    if (event.target.value==="") {
      setInputErrors({
        ...inputErrors,
        email:"Заполните это поле."});
        return;
    }

    if (!EMAIL_VALIDATION_RX.test(event.target.value)) {
      setInputErrors({
        ...inputErrors,
        email:"Неправильный формат адреса электронной почты."});
        return;
    }

    setInputErrors({
      ...inputErrors,
      email: ""});
  }

  function onPasswordChange(event) {
    // Обновляем стейт
    setFormData({
      ...formData,
      password: event.target.value,
    });

    // Валидация
    if (event.target.value==="") {
      setInputErrors({
        ...inputErrors,
        password:"Заполните это поле."});
        return;
    }

    setInputErrors({
      ...inputErrors,
      password: ""});
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAuthUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  }

  function handleAuthButton() {
    props.onAuthButton();
  }

  return (
    <main className="auth">
      <header className="auth__header">
        <Link to="/" className="auth__link">
          <img src={logo} alt="Логотип проекта" className="auth__logo" />
        </Link>
        <h1 className="auth__title">{props.title}</h1>
      </header>

      <form
        name="authForm"
        className="auth__form"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <fieldset className="auth__form-set">
          <div
            className={
              props.hasName ? "auth__name" : "auth__name  auth__name_hidden"
            }
          >
            <div className="auth__input-group auth__input-group_error">
              <label className="auth__label">Имя</label>
              <input
                type="text"
                name="name"
                required={ props.hasName ? true : false }
                onChange={onNameChange}
                className={inputErrors.name
                  ? "auth__input auth__input_error"
                  : "auth__input"}
                value={formData.name}
              />
              <span className="auth__input-error">{inputErrors.name}</span>
            </div>
          </div>

          <div className="auth__input-group auth__input-group_error">
            <label className="auth__label">E-mail</label>
            <input
              type="email"
              name="email"
              required
              onChange={onEmailChange}
              className={inputErrors.email
                ? "auth__input auth__input_error"
                : "auth__input"}
              value={formData.email}
            />
            <span className="auth__input-error">{inputErrors.email}</span>
          </div>

          <div className="auth__input-group auth__input-group_error">
            <label className="auth__label">Пароль</label>
            <input
              type="password"
              name="password"
              required
              onChange={onPasswordChange}
              className={inputErrors.password
                ? "auth__input auth__input_error"
                : "auth__input"}
              value={formData.password}
            />
            <span className="auth__input-error">{inputErrors.password}</span>
          </div>

          {/* Кнопка Войти / Зарегистрироваться */}
          <button type="submit" className="auth__button">
            {props.button}
          </button>

          <p className="auth__footer">
            {props.footerText}{" "}
            <button
              className="auth__footer-link"
              type="button"
              onClick={handleAuthButton}
            >
              {props.footerLink}
            </button>
          </p>
        </fieldset>
      </form>
    </main>
  );
}

export default Auth;
