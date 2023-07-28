// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.movies.kosobokova.nomoredomains.monster";

export const MOVIES_URL = "https://api.nomoreparties.co";

export const NAME_VALIDATION_RX = /^[a-zA-Zа-яА-Я -]+$/;
export const EMAIL_VALIDATION_RX = /[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}/;

export const MOVIES_STORAGE_KEYS = {
  search: "lastMoviesSearch",
  isShort: "lastMoviesIsShort",
  moviesFound: "lastMoviesFound",
};

export const SHORT_MOVIE_DURATION_IN_SECONDS = 40;

export const SCREEN_SIZE = {
    large: 1280,
    medium: 1024,
    small: 768,
};
export const MOVIES_LIST_COUNTS_FOR_SCREEN_SIZE = {
  large: {
    initial: 12,
    step: 4,
  },
  medium: {
    initial: 12,
    step: 3,
  },
  small: {
    initial: 8,
    step: 2,
  },
  tiny: {
    initial: 5,
    step: 2,
  },
};
