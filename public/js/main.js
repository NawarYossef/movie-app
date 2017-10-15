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

  init(){
    this.showComingSoonImages()
    this.showInTheatersImages() 
    movies.triggerModal()
    movies.triggerButtonOnLoad()
    movies.comingSoonHeader()
    movies.inTheatersHeader()
  }

  showComingSoonImages() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=c50018ef917eb4b365574473fa381a3c&primary_release_date.gte=${this.year}-${this.month}-${this.day}`;
    $.get(url, function(data){
      movies.newMoviesThumbnail(data);
    });
  } 

  showInTheatersImages() {
    let url2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=c50018ef917eb4b365574473fa381a3c&language=en-US&page=1`
    $.get(url2, function(data){
      movies.InTheatersThumbnails(data);
    });
  }

  // movieInfo() {
  //   movies.triggerModal()
  // } 

  // triggerButton(){
  //   movies.triggerButtonOnLoad()
  // }
}

let app = new DataApi();
app.init()




