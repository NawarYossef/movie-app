/* global $ */
"use strict";

let movies = require('./movies.js');
let _ = require("lodash");


class DataApi {
  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDate();
  }

  showComingSoon() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=c50018ef917eb4b365574473fa381a3c&primary_release_date.gte=${this.year}-${this.month}-${this.day}`;
    $.get(url, function(data){
      movies.newMoviesThumbnail(data);
    });
  } 

  inTheatersMoivesShow() {
    let url2 = 
    $.get(this.url, function(data){
      movies.InTheatersThumbnails(data);
    });
  }

  movieInfo() {
    let url3 = `http://api.themoviedb.org/3/movie/550/videos?api_key=c50018ef917eb4b365574473fa381a3c`
    $.get(url3, function(data){
      // movies.movieInfo(data);
      // https://www.youtube.com/watch?v=SUXWAEX2jlg
    });
  } 

}

let init = new DataApi();
init.showComingSoon()
init.movieInfo()


