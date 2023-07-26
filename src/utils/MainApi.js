import { BASE_URL } from "../const";

class MainApi {
  constructor(options) {
      this._options = options;
  }

  // Сохранение профиля
  saveUserInfo(userInfo) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: {...this._options.headers, "Authorization": `Bearer ${localStorage.getItem('token')}`,},
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
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

    //Загрузка информации о пользователе с сервера
    getUserInfo() {
      return fetch(this._options.baseUrl + "/users/me", {
        headers: {...this._options.headers, "Authorization": `Bearer ${localStorage.getItem('token')}`,},
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
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  deleteMovie(movieId) {
    return fetch(this._options.baseUrl + "/movies/" + movieId, {
      method: "DELETE",
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