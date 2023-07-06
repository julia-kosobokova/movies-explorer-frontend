import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <ul className="movies-card-list">
            <MoviesCard isSaved={true} />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
           <MoviesCard />
           <MoviesCard />
        </ul>
    )
}

export default MoviesCardList;