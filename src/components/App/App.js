import React, { useCallback } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState();

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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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

  const handleUpdateUser = ({ name, email }) => {
    setServerError(undefined);
    return mainApi
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
      })
      .catch((err) => {
        setServerError(err);
      });
  };

  function loadAllMovies() {
    if (movies.length > 0) {
      return;
    }

    setIsLoading(true);
    setServerError(undefined);
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
        setServerError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
        const movieToDelete = savedMovies.find(
          (savedMovie) => savedMovie.movieId === movie.movieId
        );
        // Отправляем запрос в API на удаление фильма
        mainApi.deleteMovie(movieToDelete._id).then(() => {
          // Собираем список всех сохраненных фильмов, кроме только что удаленного
          const leftMovies = savedMovies.filter(
            (savedMovie) => savedMovie.movieId !== movie.movieId
          );
          // Сохраняем список сохраненных фильмов в стейт
          setSavedMovies(leftMovies);
        });
      }
    });
  }

  // Форма регистрации пользователя
  const handleRegisterUser = ({ name, email, password }) => {
    setServerError(undefined);
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
      })
      .catch((err) => {
        setServerError(err);
      });
  };

  // Форма входа пользователя
  const handleLoginUser = ({ email, password }) => {
    setServerError(undefined);
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
      })
      .catch((err) => {
        setServerError(err);
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
                    serverError={serverError}
                  />
                }
              />

              <Route
                path="/signin"
                element={
                  <Login
                    onLoginUser={handleLoginUser}
                    onRegisterButton={handleRegisterButton}
                    serverError={serverError}
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
                      loggedIn={loggedIn}
                      onMoviesButton={handleMoviesButton}
                      onSavedMoviesButton={handleSavedMoviesButton}
                      onProfileButton={handleProfileButton}
                    />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <>
                      <Movies
                        onSavedMoviesButton={handleSavedMoviesButton}
                        onProfileButton={handleProfileButton}
                        movies={movies}
                        onMovieSave={handleSaveMovie}
                        onMovieDelete={handleDeleteMovie}
                        onRequestMovies={loadAllMovies}
                        isLoading={isLoading}
                        serverError={serverError}
                      />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <>
                      <SavedMovies
                        onMoviesButton={handleMoviesButton}
                        onProfileButton={handleProfileButton}
                        movies={savedMovies}
                        onMovieDelete={handleDeleteMovie}
                      />
                      <Footer />
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Profile
                      onMoviesButton={handleMoviesButton}
                      onSavedMoviesButton={handleSavedMoviesButton}
                      onUpdateUser={handleUpdateUser}
                      onExitButton={signOut}
                      serverError={serverError}
                    />
                  </ProtectedRoute>
                }
              />

              <Route path="/error" element={<Error />} />

              <Route path="*" element={<Navigate to="/error" replace={false} />} />
            </Routes>
          </div>
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
