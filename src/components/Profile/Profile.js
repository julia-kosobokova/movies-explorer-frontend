import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <section className="profile__body">
          <div className="profile__info">
            <p className="profile__description">Имя</p>
            <p className="profile__description-value">Виталий</p>
          </div>
          <div className="profile__info">
            <p className="profile__description">E-mail</p>
            <p className="profile__description-value">pochta@yandex.ru</p>
          </div>
        </section>
        <section className="profile__buttons">
          <button type="button" className="profile__link">
            Редактировать
          </button>
          <button type="button" className="profile__link profile__link_pink">
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
