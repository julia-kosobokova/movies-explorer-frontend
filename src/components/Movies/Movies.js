import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "../Preloader/Preloader";
import More from "../More/More";
// import Preloader from "../Preloader/Preloader";

function Movies() {
    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList />
            <div className="movies__more">
                <button type="button" className="movies__more-button">Ещё</button>
            </div>
        </main>
    )
}

export default Movies;