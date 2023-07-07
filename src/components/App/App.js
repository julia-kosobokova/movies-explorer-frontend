import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "../Register/Register";
import Login from "../Login/Login";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="background">
      <div className="page">
        <Routes>

          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />

          <Route path="/" element={
            <>
              <Main />
              <Footer />
            </>
          }/>

          <Route path="/movies" element={
            <>
              <Movies />
              <Footer />
            </>
          }/>
        
          <Route path="/saved-movies" element={
            <>
              <SavedMovies />
              <Footer />
            </>
          }/>

          <Route path="/profile" element={
              <Profile />
          }/>     
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
