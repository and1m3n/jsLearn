let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', 'введите число');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
let ratingLastMovie = prompt('на сколько оцениваете его?', '');
personalMovieDB.movies[lastMovie] = ratingLastMovie;
lastMovie = prompt('Один из последних просмотренных фильмов?', '');
ratingLastMovie = prompt('на сколько оцениваете его?', '');
personalMovieDB.movies[lastMovie] = ratingLastMovie;
