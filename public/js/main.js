/* global $ */
"use strict";


function Main {  
  let movies = require('./api.js');

  print() {
    movies.loadData();
  }
}

let f = new Main();
f.print()



