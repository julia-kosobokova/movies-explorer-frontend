import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

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
          <Route path="/signup" element={ <Register />} />


          <Route path="/signin" element={<Login />} />

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
