import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="search">
            <input
                type="text"
                name="movie"
                placeholder="Фильм"
                required
                className="search__input"
                minLength="2"
                maxLength="40"
            />
        
        {/* <button type="submit" className="search__button">Поиск</button> */}
            
            <FilterCheckbox />
        </div>
    )
}

export default SearchForm;