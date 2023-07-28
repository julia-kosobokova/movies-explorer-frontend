import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import React from "react";
import { MOVIES_STORAGE_KEYS } from "../../const";

function Movies(props) {
  const savedSearch = localStorage.getItem(MOVIES_STORAGE_KEYS.search);
  const savedIsShort = JSON.parse(localStorage.getItem(MOVIES_STORAGE_KEYS.isShort));
  const savedMoviesFound = JSON.parse(localStorage.getItem(MOVIES_STORAGE_KEYS.moviesFound));

  const [search, setSearch] = React.useState(savedSearch !== undefined ? savedSearch : "");
  const [isShort, setIsShort] = React.useState(savedIsShort !== undefined ? savedIsShort : false);

  function handleUpdateSearch(newSearch, newIsShort) {
    setSearch(newSearch);
    setIsShort(newIsShort);

    localStorage.setItem(MOVIES_STORAGE_KEYS.isShort, newIsShort);
    localStorage.setItem(MOVIES_STORAGE_KEYS.search, newSearch);

    props.onRequestMovies();
  }

  function handleMoviesFound(newMoviesFound) {
    localStorage.setItem(MOVIES_STORAGE_KEYS.moviesFound, JSON.stringify(newMoviesFound));
  }

  return (
    <>
      <Header
        loggedIn={true}
        activeLink="movies"
        onSavedMoviesButton={props.onSavedMoviesButton}
        onProfileButton={props.onProfileButton}
      />

      <main className="movies">
        <SearchForm 
          onSearchUpdate={handleUpdateSearch} 
          isShort={isShort}
          search={search}
        />
        <MoviesCardList
          movies={props.movies}
          onMovieSave={props.onMovieSave}
          savedMode={false}
          onMovieDelete={props.onMovieDelete}
          search={search}
          isShort={isShort}
          isLoading={props.isLoading}
          serverError={props.serverError}
          onMoviesFound={handleMoviesFound}
          moviesFound={savedMoviesFound}
        />
      </main>
    </>
  );
}

export default Movies;
