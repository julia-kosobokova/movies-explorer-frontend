import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

function SavedMovies() {
  return (
    <>
      <Header loggedIn={true} activeLink="saved-movies" />

      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList savedMode={true} />
        <div className="saved-movies__devider" />
      </main>
    </>
  );
}

export default SavedMovies;
