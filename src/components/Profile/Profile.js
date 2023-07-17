
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [formData, setFormData] = React.useState({ email: "", password: "" });

  function onNameChange(event) {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  }

  function onEmailChange(event) {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  }

  return (
    <>
      <Header
        loggedIn={true}
        activeLink="profile"
        onMoviesButton={props.onMoviesButton}
        onSavedMoviesButton={props.onSavedMoviesButton}
      />
      <main className="profile">
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
              value={currentUser.userName}
            />
          </div>
          <div className="profile__info">
            <p className="profile__description">E-mail</p>
            <input
              className="profile__description-value"
              type="email"
              required
              onChange={onEmailChange}
              value={currentUser.userEmail}
            />
          </div>
        </section>
        <section className="profile__buttons">
          <button type="button" className="profile__link">
            Редактировать
          </button>
          <button
            type="button"
            className="profile__link profile__link_pink"
            onClick={props.onExitButton}>
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
