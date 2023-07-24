import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [search, setSearch] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);
  const [inputError, setInputError] = React.useState("");

  function handleTumbler(newIsShort) {
    setIsShort(newIsShort);
  }

  function handleUpdateSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmitSearch(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    if (search==="") {
      setInputError("Нужно ввести ключевое слово.");
      return;
    }
    setInputError("");

    props.onSearchUpdate(search, isShort);
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
            />

            <button type="submit" className="search__button" />
          </form>

          <div className="search__divider"></div>
          <FilterCheckbox onTumblerToggle={handleTumbler} />
          <div className="search__bottom"></div>
        </div>
      </div>

      <span className="search__input-error">
        {inputError}
      </span>
    </>
  );
}

export default SearchForm;
