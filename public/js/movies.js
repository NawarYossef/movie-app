/* global $ */
"use strict";

let movies = {

  comingSoonImages: function(data) {
    $(function() {
      $(".coming-soon").click(function() {
        $("img").each(function(idx, ele){
          $(this).attr("src", `https://image.tmdb.org/t/p/original${data.results[idx]["poster_path"]}`)
        })
      })
    })
  },

  InTheatersImages: function(data) {
    $(function() {
      $(".in-theaters").click(function() {
        $("img").each(function(idx, ele){
          $(this).attr("src", `https://image.tmdb.org/t/p/original${data.results[idx]["poster_path"]}`)
        })
      })
    })  
  },

  comingSoonHeader: function() {
    $(function() {
      $(".coming-soon").click(function() {
        $("h2").text("Coming Soon");
      })
    })
  },

  inTheatersHeader: function() {
    $(function() {
      $(".in-theaters").click(function() {
        $("h2").text("In Theaters");
      })
    })
  },


  showComingSoonOnLoad() {
    $(function(){
      setTimeout(function() {
        $(".coming-soon").trigger("click")
      },40)
    })
  },
  
}
module.exports = movies;


