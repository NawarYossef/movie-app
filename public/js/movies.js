/* global $ */
"use strict";

let _ = require("lodash");
let range = _.range(15);
let movies = {

  newMoviesThumbnail: function(data) {
    $(function() {
      $("img").each(function(idx, ele){
        $(this).attr("src", `https://image.tmdb.org/t/p/w500${data.results[idx]["poster_path"]}`)
      })
    })
  },

  InTheatersThumbnails: function(data) {
    $(function() {
      $("img").each(function(idx, ele){
        $(this).attr("src", `https://image.tmdb.org/t/p/w500${data.results[idx]["poster_path"]}`)
      })
    })
  },

  movieInfo: function() {
    $(function(){
      $(".in-theaters").click(function(){
        $("")
      })
    })
  }
}
module.exports = movies;


