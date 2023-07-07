import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

function SavedMovies() {
    return (
        <>
            <Header loggedIn={true} />

            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList />
                <div className="saved-movies__devider" />
            </main>
        </>
    )
}

export default SavedMovies;