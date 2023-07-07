import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
// import Preloader from "../Preloader/Preloader";

function Movies() {
    return (
        <>
            <Header loggedIn={true} />
            
            <main className="movies">
                <SearchForm />
                <MoviesCardList />
                <div className="movies__more">
                    <button type="button" className="movies__more-button">Ещё</button>
                </div>
            </main>
        </>
    )
}

export default Movies;