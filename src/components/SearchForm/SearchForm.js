import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  const [search, setSearch] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleTumbler(newIsShort) {
    setIsShort(newIsShort);
  }

  function handleUpdateSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmitSearch(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    props.onSearchUpdate(search, isShort);
  }
  
  return (
    <div className="search">
      <div className="search__container">
        <form
          name="searchForm"
          className="search__input"
          onSubmit={handleSubmitSearch}
          noValidate={true}
        >
          <svg className="search__icon" alt="Поиск" />
          <div className="search__input-movie">
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            required
            className="search__input-text"
            onChange={handleUpdateSearch}
          />
          <span className={!search
            ? "search__input-error search__input-error_hidden"
            : "search__input-error"}>
            Нужно ввести ключевое слово</span>
          </div>

          <button type="submit" className="search__button" />

        </form>
        <div className="search__divider"></div>
        <FilterCheckbox
          onTumblerToggle={handleTumbler}
        />
        <div className="search__bottom"></div>

      </div>
    </div>
  );
}

export default SearchForm;
