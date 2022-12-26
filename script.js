'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  rememberFilms: function () {
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
  },
  start: function () {
    personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', 'введите число');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', 'введите число');
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('вы класический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('вы киноман');
    } else {
      alert('произошла ошибка');
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let a = prompt(`ваш любимый жанр номер ${i + 1} ?`);
      if (a === '' || a === null) {
        i--;
      } else {
        personalMovieDB.genres[i] = a;
      }
    }
    personalMovieDB.genres.forEach((element, i) => {
      console.log(`Любимый жанр ${i + 1}  ${element}`);
    });
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    switch (personalMovieDB.privat) {
      case false:
        personalMovieDB.privat = true;
        break;
      case true:
        personalMovieDB.privat = false;
        break;
    }
  },
};

// lastMovie = prompt('Один из последних просмотренных фильмов?', '');
// ratingLastMovie = prompt('на сколько оцениваете его?', '');
// personalMovieDB.movies[lastMovie] = ratingLastMovie;

// function

// rememberFilms();

// function
// detectPersonalLevel();

// function
// writeYourGenres();

// function
// showMyDB();
// personalMovieDB.rememberFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
