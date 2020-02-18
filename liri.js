require("dotenv").config();

//Use to access all information of the exports
//from keys.js file

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//display/show search 
