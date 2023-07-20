import React, { useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { mainApi } from "../../utils/MainApi";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Register from "../Register/Register";
import Login from "../Login/Login";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import { movieApi } from "../../utils/MovieApi";
import { MOVIES_URL } from "../../const";
import { SavedMoviesContext } from "../../contexts/SavedMoviesContext";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
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

  React.useEffect(() => {
    const initUserInfo = () => {
      mainApi
        .getUserInfo()
        .then(({ data: info }) => {
          setCurrentUser((previousUserState) => {
            return {
              ...previousUserState,
              userName: info.name,
              userEmail: info.email,
              id: info._id,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    initUserInfo();

    return () => {};
  }, []);

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

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .saveUserInfo({
        name: name,
        email: email,
      })
      .then(() => {
        setCurrentUser({
          ...currentUser,
          userName: name,
          userEmail: email,
        });
        // closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  // Загрузка всех фильмов с внешнего сервиса
  React.useEffect(() => {
    movieApi
      .getAllMovies()
      .then((allMovies) => {
        setMovies(
          allMovies.map((movie) => {
            return {
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: MOVIES_URL + movie.image.url,
              trailerLink: movie.trailerLink,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
              movieId: movie.id,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Загрузка всех сохраненных фильмов из внутреннего сервера
  React.useEffect(() => {
    mainApi
      .findMovies()
      .then((resp) => {
        const savedMovies = resp.data;
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Выбор фильма для сохранения
  function handleSaveMovie(movie) {
    // Проверяем, есть ли фильм в списке сохраненных
    mainApi.findMovies().then((res) => {
      const savedMovies = res.data;
      const isSaved = savedMovies.some(
        (savedMovie) => savedMovie.movieId === movie.movieId
      );
      if (!isSaved) {
        // Отправляем запрос в API на сохранение фильма
        mainApi.createMovie(movie).then((res) => {
          savedMovies.push(res.data);
          setSavedMovies(savedMovies);
        });
      }
    });



    // if (!isSaved) {
    //   // Отправляем запрос в API и получаем обновлённые данные карточки
    //   mainApi
    //     .addLike(movie._id)
    //     .then(({data: newMovie}) => {
    //       setMovies((movies) =>
    //         movies.map((c) => (c._id === movie._id ? newMovie : c))
    //       );
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   mainApi
    //     .removeLike(movie._id)
    //     .then(({data: newMovie}) => {
    //       setMovies((movies) =>
    //         movies.map((c) => (c._id === movie._id ? newMovie : c))
    //       );
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  }

      // Удаление фильма из сохраненных
      function handleDeleteMovie(movie) {
        // Проверяем, есть ли фильм в списке сохраненных
        mainApi.findMovies().then((res) => {
          const savedMovies = res.data;
          const isSaved = savedMovies.some(
            (savedMovie) => savedMovie.movieId === movie.movieId
          );
          if (isSaved) {
            // Ищем указанный фильм в списке сохраненных
            const movieToDelete = savedMovies.find(savedMovie => savedMovie.movieId === movie.movieId);
            // Отправляем запрос в API на удаление фильма
            mainApi.deleteMovie(movieToDelete._id).then(() => {
              // Собираем список всех сохраненных фильмов, кроме только что удаленного
              const leftMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.movieId);
              // Сохраняем список сохраненных фильмов в стейт
              setSavedMovies(leftMovies);
            });
          }
        });  
      };

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
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <div className="background">
          <div className="page">
            <Routes>
              <Route
                path="/signup"
                element={
                  <Register
                    onRegisterUser={handleRegisterUser}
                    onLoginButton={handleLoginButton}
                  />
                }
              />

              <Route
                path="/signin"
                element={
                  <Login
                    onLoginUser={handleLoginUser}
                    onRegisterButton={handleRegisterButton}
                  />
                }
              />

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
                      movies={movies}
                      onMovieSave={handleSaveMovie}
                      onMovieDelete={handleDeleteMovie}
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
                      movies={savedMovies}
                      onMovieDelete={handleDeleteMovie}
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
                    onUpdateUser={handleUpdateUser}
                    onExitButton={signOut}
                  />
                }
              />

              <Route path="/error" element={<Error />} />
            </Routes>
          </div>
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
