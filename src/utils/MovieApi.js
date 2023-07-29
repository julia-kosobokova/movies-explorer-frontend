import { MOVIES_URL } from "../const";

class MovieApi {
  constructor(options) {
    this._options = options;
  }

  // Загрузка фильмов с сервера
  getAllMovies() {
    console.log(this._options.headers);
    return fetch(this._options.baseUrl + "/beatfilm-movies", {
      headers: { ...this._options.headers },
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

export const movieApi = new MovieApi({
  baseUrl: MOVIES_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
