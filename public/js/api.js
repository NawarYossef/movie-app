/* global $ */
"use strict";

let _ = require("lodash");

let dataApi = function() {
  let url = "https://api.themoviedb.org/3/discover/movie?api_key=c50018ef917eb4b365574473fa381a3c&primary_release_date.gte=2017-10-5";
  
  let publicApi = {
    loadData: function() {
    	$.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
					console.log(data);
        }
      });
    }
  };
  return publicApi;
};

let allData = new dataApi();

module.exports = allData;

