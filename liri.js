var dotenv = require('dotenv').config();

var keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var arg = process.argv;


if (arg[2] === 'concert-this') {
  var artistArr = [];
   
  for (var i = 3; i < (arg.length); i++) {;
    artistArr.push(arg[i]);
  }
  var artist = artistArr.join(" ");
  var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
  console.log(URL);
  request(URL, function(err, resp, body) {
    if (!err && resp.statusCode === 200) {
      var body = JSON.parse(body);
      console.log(artist);
      body.forEach(e => {
        console.log("-------CONCERT INFO-------")
        console.log("Venue: " + e.venue.name);
        console.log(e.venue.city + ', ' + e.venue.region + "" + e.venue.country);
        console.log("Date: " + moment(e.datetime).format("MM/DD/YYYY"));
      });
    }  });
}
else if (arg[2] === 'spotify-this-song') {
  var songArr = [];
  
  for (var i = 3; i < arg.length; i++) {
    songArr.push(arg[i]);
  }
  var song = songArr.join(" ");
  console.log(song);
  spotify.search({type: 'track', query: `${song}`}, function(err, data) {
    if (err) {
      console.log("Error: " + err);
    }
    console.log(data);
  })
}
else if (arg[2] === 'movie-this') {
  var movieArr = [];

  for (var i = 3; i < arg.length; i++) {
    movieArr.push(arg[i]);
  }
  var movie = movieArr.join(" ");
  console.log(movie);
}