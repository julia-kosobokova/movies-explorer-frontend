import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <main className="saved-movies">
            <SearchForm />
            <MoviesCardList />
            <div className="saved-movies__devider" />
        </main>
    )
}

export default SavedMovies;