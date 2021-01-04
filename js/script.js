let number = 5;
const leftBorderWidth = 1;

// let result = confirm("Are you here?");
// console.log(result); -> return true or false

// let answer = +prompt("Are you 18 year old?", "");
// console.log(typeof(answer));
// console.log(answer + 10);

// let answers = [];

// answers[0] = prompt("What is your name?", '');
// answers[1] = prompt("What is your lastName?", '');
// answers[2] = prompt("How old are you?", '');

// document.write(answers);

// let category = 'toys';

// console.log(`https://someurl/${category}/5`);

// let user = 'Ivan';

// alert(`Hello ${user}`);
const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false 
};

const movieName1 = prompt('Один из последних просмотренных фильмов?', '');
const movieRating1 = prompt('На сколько оцените его?', '');
const movieName2 = prompt('Один из последних просмотренных фильмов?', '');
const movieRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieName1] = movieRating1;
personalMovieDB.movies[movieName2] = movieRating2;

console.log(personalMovieDB);
