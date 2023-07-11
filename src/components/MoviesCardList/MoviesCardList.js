import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return ( <
    ul className = "movies-card-list" >
    <
    MoviesCard isSaved = {
      true
    }
    savedMode = {
      props.savedMode
    }
    /> <
    MoviesCard savedMode = {
      props.savedMode
    }
    /> <
    MoviesCard savedMode = {
      props.savedMode
    }
    /> <
    MoviesCard savedMode = {
      props.savedMode
    }
    /> <
    MoviesCard savedMode = {
      props.savedMode
    }
    /> <
    MoviesCard savedMode = {
      props.savedMode
    }
    /> <
    /ul>
  );
}

export default MoviesCardList;