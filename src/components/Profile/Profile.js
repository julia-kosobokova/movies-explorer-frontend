import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { NAME_VALIDATION_RX, EMAIL_VALIDATION_RX } from "../../const";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [profileData, setProfileData] = React.useState({ name: "", email: "" });
  const [inputErrors, setInputErrors] = React.useState({ name: "", email: "" });

  function onNameChange(event) {
    // Обновляем стейт
    setProfileData({
      ...profileData,
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
    setProfileData({
      ...profileData,
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

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: profileData.name,
      email: profileData.email,
    });
  }

  React.useEffect(() => {
    setProfileData({
      name: currentUser.userName,
      email: currentUser.userEmail,
    });
  }, [currentUser]);

  function isDirty() {
    return (profileData.name!==currentUser.userName) || (profileData.email!==currentUser.userEmail);
  }

  return (
    <>
      <Header
        loggedIn={true}
        activeLink="profile"
        onMoviesButton={props.onMoviesButton}
        onSavedMoviesButton={props.onSavedMoviesButton}
      />
      <form
        name="profileForm"
        className="profile"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <h1 className="profile__title">Привет, {currentUser.userName}!</h1>
        <section className="profile__body">
          <div className="profile__info">
            <p className="profile__description">Имя</p>
            <input
              type="text"
              name="name"
              required
              onChange={onNameChange}
              className={inputErrors.name
                ? "profile__description-value profile__description-value_error"
                : "profile__description-value"}
              value={profileData.name}
            />
          </div>
          <div className="profile__description-value-error">{inputErrors.name}</div>
          <div className="profile__info">
            <p className="profile__description">E-mail</p>
            <input
              type="email"
              name="name"
              required
              onChange={onEmailChange}
              className={inputErrors.email
                ? "profile__description-value profile__description-value_error"
                : "profile__description-value"}
              value={profileData.email}
            /> 
          </div>
          <div className="profile__description-value-error">{inputErrors.email}</div>
        </section>
        <section className="profile__buttons">
          <button
            type="submit"
            disabled={!isDirty() || inputErrors.name || inputErrors.email}
            className={!isDirty() || inputErrors.name || inputErrors.email
            ? "profile__link profile__link_disabled"
            : "profile__link"
            }
            >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__link profile__link_pink"
            onClick={props.onExitButton}>
            Выйти из аккаунта
          </button>
        </section>
      </form>
    </>
  );
}

export default Profile;
