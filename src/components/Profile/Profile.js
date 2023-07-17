
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [profileData, setProfileData] = React.useState({ email: "", password: "" });

  function onNameChange(event) {
    setProfileData({
      ...profileData,
      name: event.target.value,
    });
  }

  function onEmailChange(event) {
    setProfileData({
      ...profileData,
      email: event.target.value,
    });
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
        className="profile"
        onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {currentUser.userName}!</h1>
        <section className="profile__body">
          <div className="profile__info">
            <p className="profile__description">Имя</p>
            <input
              type="text"
              name="name"
              required
              onChange={onNameChange}
              className="profile__description-value"
              value={profileData.name}
            />
          </div>
          <div className="profile__info">
            <p className="profile__description">E-mail</p>
            <input
              type="email"
              name="name"
              required
              onChange={onEmailChange}
              className="profile__description-value"
              value={profileData.email}
            />
          </div>
        </section>
        <section className="profile__buttons">
          <button
            type="submit"
            className="profile__link"
            disabled={!isDirty()}>
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
