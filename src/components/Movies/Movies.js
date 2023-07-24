import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import React from "react";

function Movies(props) {

  const [search, setSearch] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleUpdateSearch(newSearch, newIsShort) {
    setSearch(newSearch);
    setIsShort(newIsShort);
    props.onRequestMovies();
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
        />
        <MoviesCardList
          movies={props.movies}
          onMovieSave={props.onMovieSave}
          savedMode={false}
          onMovieDelete={props.onMovieDelete}
          search={search}
          isShort={isShort}
          isLoading={props.isLoading}
        />

      </main>
    </>
  );
}

export default Movies;
