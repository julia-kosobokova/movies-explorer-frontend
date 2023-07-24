import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import React from "react";

function Movies(props) {

  const [search, setSearch] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleUpdateSearch(newSearch, newIsShort) {
    console.log('??');
    setSearch(newSearch);
    setIsShort(newIsShort);

    console.log(newSearch);
    console.log(newIsShort);
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
        />

      </main>
    </>
  );
}

export default Movies;
