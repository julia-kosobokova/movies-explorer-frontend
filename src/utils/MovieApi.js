class MovieApi {
  constructor(options) {
      this._options = options;
  }

fetch('https://api.nomoreparties.co/beatfilm-movies', {

})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 
}