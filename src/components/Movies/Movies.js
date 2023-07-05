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
            <More />
        </main>
    )
}

export default Movies;