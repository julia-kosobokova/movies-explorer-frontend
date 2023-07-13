import { BASE_URL } from "../const";

class MainApi {
  constructor(options) {
      this._options = options;
    }
}

export const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
  });