import { BASE_URL, MOVIES_URL } from "../const";

class MainApi {
  constructor(options) {
      this._options = options;
  }

  //Загрузка информации о пользователе с сервера
  getEmail() {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Авторизация
  signin(userInfo) {
    return fetch(this._options.baseUrl + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: userInfo.password,
        email: userInfo.email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Регистрация
  signup(userInfo) {
    return fetch(this._options.baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Поиск всех сохраненных текущим пользователем фильмов
  findMovies() {
    return fetch(this._options.baseUrl + "/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Сохранение фильма на сервере
  createMovie(movie) {
    return fetch(this._options.baseUrl + "/movies", {
      method: "POST",
      headers: {...this._options.headers, "Authorization": `Bearer ${localStorage.getItem('token')}`,},
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: MOVIES_URL + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Постановка лайка - перенесено на свой сервер: выбор для сохранения
  addLike(cardId) {
    return fetch(this._options.baseUrl + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: {...this._options.headers, "Authorization": `Bearer ${localStorage.getItem('token')}`,},
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

export const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
  });