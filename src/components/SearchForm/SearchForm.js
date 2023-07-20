import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  const [search, setSearch] = React.useState("");

  function handleUpdateSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmitSearch(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    props.onSearchUpdate(search);
  }

  return (
    <div className="search">
      <div className="search__container">
        <form className="search__input"
          onSubmit={handleSubmitSearch}
        >
          <svg className="search__icon" alt="Поиск" />
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            required
            className="search__input-text"
            minLength="2"
            maxLength="40"
            onChange={handleUpdateSearch}
          />

          <button type="submit" className="search__button" />
        </form>
        <div className="search__divider"></div>
        <FilterCheckbox />
        <div className="search__bottom"></div>
      </div>
    </div>
  );
}

export default SearchForm;
