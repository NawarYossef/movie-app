/* global $ */
"use strict";

let movies = require('./movies.js');
let modal = require("./modal.js")


class DataApi {
  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDate();
  }

  init(){
    this.showComingSoonImages()
    this.showInTheatersImages() 
    movies.showComingSoonOnLoad()
    movies.comingSoonHeader()
    movies.inTheatersHeader()
  }

  showComingSoonImages() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=c50018ef917eb4b365574473fa381a3c&primary_release_date.gte=${this.year}-${this.month}-${this.day}`;
    $.get(url, function(data){
      movies.comingSoonImages(data);
      modal.show(data)
      // modal.loadYoutubeApi()
    });
  } 

  showInTheatersImages() {
    let url2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=c50018ef917eb4b365574473fa381a3c&language=en-US&page=1`
    $.get(url2, function(data){
      movies.InTheatersImages(data);
    });
  }

}

let app = new DataApi();
app.init()




