import Header from "../Header/Header";
import Menu from "../Menu/Menu";

function Profile() {
    return (
        <>
            <Header />
            <main className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <section className="profile__body">
                    <div className="profile__info">
                        <p>Имя</p>
                        <p>Виталий</p>
                    </div>
                    <div className="profile__info">
                        <p>E-mail</p>
                        <p>pochta@yandex.ru</p>
                    </div>
                </section>
                <section className="profile__buttons">
                    <button type="submit">Редактировать</button>
                    <button type="submit">Выйти из аккаунта</button>
                </section>
            </main>
            <Menu isVisible={true} />
        </>
    )
}

export default Profile;