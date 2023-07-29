import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [search, setSearch] = React.useState(props.search !== undefined ? props.search : "");
  const [isShort, setIsShort] = React.useState(props.isShort !== undefined ? props.isShort : false);
  const [inputError, setInputError] = React.useState("");

  function handleTumbler(newIsShort) {
    setIsShort(newIsShort);
    doSearch(search, newIsShort);
  }

  function handleUpdateSearch(e) {
    setSearch(e.target.value);
  }

  function doSearch(newSearch, newIsShort) {
    if (newSearch === "") {
      setInputError("Нужно ввести ключевое слово");
      return;
    }
    setInputError("");

    props.onSearchUpdate(newSearch, newIsShort);
  }

  function handleSubmitSearch(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    doSearch(search, isShort);
  }

  return (
    <>
      <div className="search">
        <div className="search__container">
          <form
            name="searchForm"
            className="search__input"
            onSubmit={handleSubmitSearch}
            noValidate={true}
          >
            <svg className="search__icon" alt="Поиск" />

            <input
              type="text"
              name="movie"
              placeholder="Фильм"
              required
              className="search__input-text"
              onChange={handleUpdateSearch}
              value={search}
            />

            <button type="submit" className="search__button" />
          </form>

          <div className="search__divider"></div>
          <FilterCheckbox 
            onTumblerToggle={handleTumbler} 
            isOn={isShort}
          />
          <div className="search__bottom"></div>
        </div>

        <span className="search__input-error">{inputError}</span>
      </div>
    </>
  );
}

export default SearchForm;
