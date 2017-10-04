/* global $ */
"use strict";
let script = require('./another-script.js');


class SomeClass {
	myMethod(){
		script.message()
	}
}

var instance = new SomeClass()
instance.myMethod()
