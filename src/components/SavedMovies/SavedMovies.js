import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import React from "react";

function SavedMovies(props) {

  const [search, setSearch] = React.useState("");

  function handleUpdateSearch(newSearch) {
    console.log('@@');
    setSearch(newSearch);
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
        />
        <MoviesCardList
          savedMode={true}
          movies={props.movies}
          onMovieDelete={props.onMovieDelete}
          search={search}
        />
        <div className="saved-movies__devider" />
      </main>
    </>
  );
}

export default SavedMovies;
