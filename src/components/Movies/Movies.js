import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

function Movies() {
  return ( <
    >
    <
    Header loggedIn = {
      true
    }
    activeLink = {
      "movies"
    }
    />

    <
    main className = "movies" >
    <
    SearchForm / >
    <
    MoviesCardList / >
    <
    div className = "movies__more" >
    <
    button type = "button"
    className = "movies__more-button" >
    Ещё <
    /button> <
    /div> <
    /main> <
    />
  );
}

export default Movies;