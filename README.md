# liri-node-app


LIRI is a _Language_Interprtation_ and recognition interface. LIRI will be a command line node app that uses several API's that searches movies, songs and concerts metadata with input command, concert-this, spotify-this-song, movie-this, do-what-it-says. It does this by using axios to call the BandInTown & OBDM API and the user Spotify search will return contingent on spotify-node-api.

Clone the repo, Run npm install and at the command prompt _run node liri.js "input command"_. This will retrieve the relative data. 

movie-this : _default search: Mr. Nobody_
  Title of the movie
  Year the movie came out
  IMDB Rating of the movie
  Country where the movie was produced
  Language of the movie
  Plot of the movie
  Actors in the movie

concert-this 
  Name of the venue
  Venue Location
  Date of the Event (using moment to format)

spotify-this-song:  _default search: The Sign_ 
  Artist
  The song's name
  A preview link of the song from spotify
  The album that the song is from 

do-what-it-says reads random.text


Technologies used : NodeJS, JS, SpotifyAPI, BandInTown API, OMDB API, Axios, Moment, Node.js Package Managers: spotify-api-node, dotenv and request 

*Sole developer of this app
