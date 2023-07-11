import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return ( <
    div className = "search" >
    <
    div className = "search__container" >
    <
    form className = "search__input" >
    <
    svg className = "search__icon"
    alt = "Поиск" / >
    <
    input type = "text"
    name = "movie"
    placeholder = "Фильм"
    required className = "search__input-text"
    minLength = "2"
    maxLength = "40" /
    >

    <
    button type = "button"
    className = "search__button" / >
    <
    /form> <
    div className = "search__divider" > < /div> <
    FilterCheckbox / >
    <
    div className = "search__bottom" > < /div> <
    /div> <
    /div>
  );
}

export default SearchForm;