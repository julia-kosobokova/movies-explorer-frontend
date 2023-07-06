import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from "../Register/Register";
import Login from "../Login/Login";

import Header from "../Header/Header";
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
          
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />

          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }/>

          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }/>
        
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }/>

          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }/>     
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
