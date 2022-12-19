'use strict';
let numberOfFilms;
function start() {
  numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', 'введите число');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', 'введите число');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// lastMovie = prompt('Один из последних просмотренных фильмов?', '');
// ratingLastMovie = prompt('на сколько оцениваете его?', '');
// personalMovieDB.movies[lastMovie] = ratingLastMovie;

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    let ratingLastMovie = prompt('на сколько оцениваете его?', '');
    if (
      lastMovie === null ||
      ratingLastMovie === null ||
      lastMovie.length > 50 ||
      ratingLastMovie.length > 50 ||
      lastMovie === '' ||
      ratingLastMovie === ''
    ) {
      i--;
    } else {
      personalMovieDB.movies[lastMovie] = ratingLastMovie;
    }
  }
}

rememberFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('вы класический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('вы киноман');
  } else {
    alert('произошла ошибка');
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let a = prompt(`ваш любимый жанр номер ${i + 1} ?`);
    personalMovieDB.genres[i] = a;
  }
}
writeYourGenres();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();
