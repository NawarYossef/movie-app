/* global $ */
"use strict";

let _ = require("lodash");
let range = _.range(15);

let movies = {

  newMoviesThumbnail: function(data) {
    $(function() {
      $(".coming-soon").click(function() {
        $("img").each(function(idx, ele){
          $(this).attr("src", `https://image.tmdb.org/t/p/w500${data.results[idx]["poster_path"]}`)
        })
      })
    })
  },

  InTheatersThumbnails: function(data) {
    $(function() {
      $(".in-theaters").click(function() {
        $("img").each(function(idx, ele){
          $(this).attr("src", `https://image.tmdb.org/t/p/w500${data.results[idx]["poster_path"]}`)
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
        $("h2").text("In Theaters Now");
      })
    })
  },


  triggerButtonOnLoad() {
    $(function(){
      setTimeout(function() {
        $(".coming-soon").trigger("click")
      },40)
    })
  },

  triggerModal : function() {
    $(function(){
      $("a").click(function(e){
        let text = `<!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
            </div>
          </div>
          
        </div>
        </div>`
        e.preventDefault();
        $("main").append(text);
        $("#myModal").modal();
      });
    });
  },

  movieDetails: function() {
    // $("#myModal").html();
  }
}
module.exports = movies;


