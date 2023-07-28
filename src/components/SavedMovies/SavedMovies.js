import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import React from "react";

function SavedMovies(props) {
  const [search, setSearch] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleUpdateSearch(newSearch, newIsShort) {
    setSearch(newSearch);
    setIsShort(newIsShort);
  }

  return (
    <>
      <Header
        loggedIn={true}
        activeLink="saved-movies"
        onMoviesButton={props.onMoviesButton}
        onProfileButton={props.onProfileButton}
      />

      <main className="saved-movies">
        <SearchForm 
          onSearchUpdate={handleUpdateSearch}
          isShort={isShort} 
          search={search}
        />
        <MoviesCardList
          savedMode={true}
          movies={props.movies}
          onMovieDelete={props.onMovieDelete}
          search={search}
          isShort={isShort}
        />
        <div className="saved-movies__devider" />
      </main>
    </>
  );
}

export default SavedMovies;
