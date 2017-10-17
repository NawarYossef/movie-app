(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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





},{"./modal.js":2,"./movies.js":3}],2:[function(require,module,exports){
let modal = {
  show : function(data) {
    let that = this;
    $(function(){
      $("a").click(function(e){
        let movieId =  data.results[Number($(this).attr('id'))]["id"]; // movie id
        e.preventDefault();
        that.addModalText();
        that.initModal();
        that.getTrailer(movieId);
        // modal.loadYoutubeApi()
      });
    });
  },
  
  addModalText : function() {
    $(function(){
      let text = 
      `<!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <div class="container">
              <iframe id="existing-iframe-example"
                frameborder="0"
                enablejsapi="1"
                style="border: solid 4px #37474F">
              </iframe>
            </div>
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        
      </div>
      </div>`

      $("main").append(text);
    });
  },

  initModal: function() {
    $(function() {
      $("#myModal").modal();
    })
  },

  getTrailer: function(id){
    $(function(){
      $("iframe").attr('src',"https://www.youtube.com/embed/ePbKGoIGAXY?enablejsapi=1")
    })
  },
  
  // loadYoutubeApi: function() {
  //   $(function(){
  //     var tag = document.createElement('script');
  //     tag.id = 'iframe-demo';
  //     tag.src = 'https://www.youtube.com/iframe_api';
  //     var firstScriptTag = document.getElementsByTagName('script')[0];
  //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
  //     var player;
  //     function onYouTubeIframeAPIReady() {
  //       player = new YT.Player('existing-iframe-example', {
  //           events: {
  //             'onReady': onPlayerReady,
  //             'onStateChange': onPlayerStateChange
  //           }
  //       });
  //     }
  //   })
  // }

}

module.exports = modal;
},{}],3:[function(require,module,exports){
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



},{}]},{},[1]);
