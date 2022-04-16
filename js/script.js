"use strict"
const numberOffFilms = +prompt("How many films did you watch yet?", "");

const personalMovieDB = {
       count: numberOffFilms,
       movies: {},
       actors:{},
       genres:[],
       private: false
 };

const a = prompt("What movie did you last time watch?", ""),
       b = prompt("How much would you appreciate it?", ""),
       c = prompt("What movie did you last time watch?", ""),
       d = prompt("How much would you appreciate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

 




 

 