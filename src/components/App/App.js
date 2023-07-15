import React, { useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { mainApi } from "../../utils/MainApi";

// movieApi - замена api с карточками, для фильмов 
// import { movieApi } from "../utils/MovieApi.js"; 

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Register from "../Register/Register";
import Login from "../Login/Login";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";

function App() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  // const [cards, setCards] = React.useState([]);
  const [userEmail, setUserEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const tokenCheck = useCallback(() => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const token = localStorage.getItem("token");

    if (token) {
      // проверим токен
      mainApi
        .getEmail(token)
        .then((res) => {
          if (res) {
            // авторизуем пользователя
            setLoggedIn(true);
            setUserEmail(res.data.email);
            // navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  // React.useEffect(() => {
  //   const initUserInfo = () => {
  //     api
  //       .getUserInfo()
  //       .then(({data: info}) => {
  //         setCurrentUser((previousUserState) => {
  //           return {
  //             ...previousUserState,
  //             userName: info.name,
  //             userDescription: info.about,
  //             userAvatar: info.avatar,
  //             id: info._id,
  //           };
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   initUserInfo();

  //   return () => {};
  // }, []);

  // const handleEditAvatarClick = () => {
  //   setPopupsOptions({
  //     ...popupsOptions,
  //     isEditAvatarPopupOpen: true,
  //   });
  // };

  // const handleEditProfileClick = () => {
  //   setPopupsOptions({
  //     ...popupsOptions,
  //     isEditProfilePopupOpen: true,
  //   });
  // };

  // const handleAddPlaceClick = () => {
  //   setPopupsOptions({
  //     ...popupsOptions,
  //     isAddPlacePopupOpen: true,
  //   });
  // };

  // const closeAllPopups = () => {
  //   setPopupsOptions({
  //     isEditAvatarPopupOpen: false,
  //     isEditProfilePopupOpen: false,
  //     isAddPlacePopupOpen: false,
  //     isInfoTooltipOpen: false,
  //     isRegisterSuccessful: popupsOptions.isRegisterSuccessful, //Оставляем прежнее значение, чтобы не мигало окно ошибки регистрации
  //     selectedCard: { name: "", link: "" },
  //   });
  // };

  // const handleCardClick = (card) => {
  //   setPopupsOptions({
  //     ...popupsOptions,
  //     selectedCard: card,
  //   });
  // };

  // const handleUpdateUser = ({ name, about }) => {
  //   api
  //     .saveUserInfo({
  //       name: name,
  //       description: about,
  //     })
  //     .then(() => {
  //       setCurrentUser({
  //         ...currentUser,
  //         userName: name,
  //         userDescription: about,
  //       });
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleUpdateAvatar = ({ avatar }) => {
  //   api
  //     .updateUserAvatar(avatar)
  //     .then(() => {
  //       setCurrentUser({
  //         ...currentUser,
  //         userAvatar: avatar,
  //       });
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // React.useEffect(() => {
  //   Promise.all([api.getInitialCards()])
  //     .then(([{data: initialCards}]) => {
  //       setCards(initialCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some((i) => i._id === currentUser.id);

  //   if (!isLiked) {
  //     // Отправляем запрос в API и получаем обновлённые данные карточки
  //     api
  //       .addLike(card._id)
  //       .then(({data: newCard}) => {
  //         setCards((cards) =>
  //           cards.map((c) => (c._id === card._id ? newCard : c))
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     api
  //       .removeLike(card._id)
  //       .then(({data: newCard}) => {
  //         setCards((cards) =>
  //           cards.map((c) => (c._id === card._id ? newCard : c))
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // function handleCardDelete(card) {
  //   // Проверяем, моя ли это карточка
  //   const isOwn = card.owner._id === currentUser.id;

  //   if (isOwn) {
  //     // Отправляем запрос в API и получаем обновлённые данные карточки
  //     api
  //       .deleteCard(card._id)
  //       .then(() => {
  //         setCards((cards) =>
  //           cards.filter((c) => (c._id === card._id ? false : true))
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // function handleAddPlaceSubmit(card) {
  //   api
  //     .saveNewCard(card)
  //     .then(({data: newCard}) => {
  //       setCards([newCard, ...cards]);
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // Форма регистрации пользователя
  const handleRegisterUser = ({ name, email, password }) => {
    mainApi
      .signup({
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        // closeAllPopups();
        setCurrentUser({
          ...currentUser,
          userName: name,
          userEmail: email,
          userPassword: password,
        });
        // setPopupsOptions({
        //   ...popupsOptions,
        //   isInfoTooltipOpen: true,
        //   isRegisterSuccessful: true,
        // });
      })
      .catch((err) => {
        console.log(err);
        // setPopupsOptions({
        //   ...popupsOptions,
        //   isInfoTooltipOpen: true,
        //   isRegisterSuccessful: false,
        // });
      });
  };

  // Форма входа пользователя
  const handleLoginUser = ({ email, password }) => {
    mainApi
      .signin({
        email: email,
        password: password,
      })
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          id: data.userObject._id,
          userEmail: data.userObject.email,
          userPassword: password,
          userName: data.userObject.name,
        });

        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
        // closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Выход пользователя
  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  // Переход в форму регистрации
  function handleRegisterButton() {
    navigate("/signup", { replace: true });
  }

  // Переход в форму входа
  function handleLoginButton() {
    navigate("/signin", { replace: true });
  }

  // Переход на страницу профиля
  function handleProfileButton() {
    navigate("/profile", { replace: true });
  }

  // Переход на страницу с фильмами
  function handleMoviesButton() {
    navigate("/movies", { replace: true });
  }

  // Переход на страницу с фильмами
  function handleSavedMoviesButton() {
    navigate("/saved-movies", { replace: true });
  }

  return (
    <div className="background">
      <div className="page">
        <Routes>
          <Route path="/signup" element={
            <Register
              onRegisterUser={handleRegisterUser}
              onLoginButton={handleLoginButton}
            />
          } />


          <Route path="/signin" element={
            <Login
              onLoginUser={handleLoginUser}
              onRegisterButton={handleRegisterButton}
            />
          } />

          <Route
            path="/"
            element={
              <>
                <Main
                  onRegisterButton={handleRegisterButton}
                  onLoginButton={handleLoginButton}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <>
                <Movies
                  onSavedMoviesButton={handleSavedMoviesButton}
                  onProfileButton={handleProfileButton}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <>
                <SavedMovies
                  onMoviesButton={handleMoviesButton}
                  onProfileButton={handleProfileButton}
                />
                <Footer />
              </>
            }
          />

          <Route 
            path="/profile" 
            element={
              <Profile
                onMoviesButton={handleMoviesButton}
                onSavedMoviesButton={handleSavedMoviesButton}
                onExitButton={signOut}
              /> 
            } 
          />

          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
