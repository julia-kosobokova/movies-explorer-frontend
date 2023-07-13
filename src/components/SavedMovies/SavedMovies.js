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
      />

      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList savedMode={true} />
        <div className="saved-movies__devider" />
      </main>
    </>
  );
}

export default SavedMovies;
