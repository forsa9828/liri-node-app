require("dotenv").config();

//VARIABLES/NPM REQUIRE

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var BandsInTown = require("BandsInTown");
var request = require("request");
var fs = require('fs');


//call to get keys to account
var client = new BandsInTown(keys.BandsIntown);

//var Spotify = new Spotify(keys.Spotify);
var Spotify = new Spotify({
    id:" ",
    secret: "",
})
 
//2 CHOOSES USER ACTIONS; 3 INPUT PARAMETER
var userCommand = process.argv[2];

var secondCommand = process.argv[3];


function mySwitch () {
    switch (userCommand) {

        case "concert-this" :

            showConcert();
            break;


        case "spotify-this-song":

            showSpotifySong();
            break;



        case "show-movie":

            showMovie();
            break;



        case "do-what-it-says":

            grabReadme();
            break;



    }

};

//BandsInTown

function showConcert () {



var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



console.log(queryUrl);

// Code used from OMDB Exercise done in class then added the extra output information

request(queryUrl, function(err, res, body) {



    if (!err && res.statusCode === 200) {



        console.log("Venue: " + JSON.parse(body).venue);

        console.log("Venue location: " + JSON.parse(body).location);

        console.log("Date of the Event: " + JSON.parse(body).date);

    }

});


//SPOTIFY --- function for running seach--spotify-this-song

function showSpotifySong() {

    //variable for search term, test if defined.


    var searchTrack;

    if (secondCommand === undefined) {

        searchTrack = "The Sign";

    } else {

        searchTrack = secondCommand;

    }

    //launch spotify search

    spotify.search({ type: 'track', query: searchTrack }, function(err, data) {

        if (err) {

            console.log('Error occurred: ' + err);

            return;

        } else {

            //tried searching for release year! Spotify doesn't return this!

            console.log("Artist: " + data.tracks.items[0].artists[0].name);

            console.log("Song: " + data.tracks.items[0].name);

            console.log("Album: " + data.tracks.items[0].album.name);



        }

    });

}; 


//MOVIE

function showMovie() {



    var movieChoice;

    // Testing if search term is included with: movie-this '<movie name here>'

    if (secondCommand === undefined) {

        movieChoice = "Mr. Nobody";

    } else {

        movieChoice = secondCommand;

    };



    var queryUrl = "http://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&apikey=40e9cece";



    console.log(queryUrl);

    // Code used from OMDB Exercise done in class then added the extra output information

    request(queryUrl, function(err, res, body) {



        if (!err && res.statusCode === 200) {



            console.log("Title: " + JSON.parse(body).Title);

            console.log("Release Year: " + JSON.parse(body).Year);

            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);

            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); // tomatoRating does not work but this does?

            console.log("Country: " + JSON.parse(body).Country);

            console.log("Language: " + JSON.parse(body).Language);

            console.log("Plot: " + JSON.parse(body).Plot);

            console.log("Actors: " + JSON.parse(body).Actors);

        }

    });

};


// DO-WHAT-IT-SAYS

function grabReadme() {

    // Code & Comments for this section used from fs.readFile exercise

    fs.readFile("random.txt", "utf8", function(err, data) {

        if (err) {

            return console.log(err);

        }

        // Break the string down by comma separation and store the contents into the output array.

        var output = data.split().splice(",");

        // Loop Through the newly created output array

        for (var i = 0; i < output.length; i++) {

            // Print each element (item) of the array/

            console.log(output[i]);

        }

    });

}





mySwitch();
}
