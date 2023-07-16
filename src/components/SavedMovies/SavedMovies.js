import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

function SavedMovies(props) {
  return (
    <>
      <Header
        loggedIn={true}
        activeLink="saved-movies"
        onMoviesButton={props.onMoviesButton}
        onProfileButton={props.onProfileButton}
      />

      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
          savedMode={true}
          movies={props.movies}
        />
        <div className="saved-movies__devider" />
      </main>
    </>
  );
}

export default SavedMovies;
