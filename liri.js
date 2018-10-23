var env = require('dotenv').config();

var keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var arg = process.argv;


if (arg[2] === 'concert-this') {
  var artistArr = [];

  for (var i = 3; i < (arg.length); i++) {
    ;
    artistArr.push(arg[i]);
  }
  var artist = artistArr.join("%20");
  var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
  console.log(URL);
  request(URL, function (err, resp, body) {
    if (!err && resp.statusCode === 200) {
      if ((JSON.parse(body)).length < 1) {
        console.log("This artist does not have any scheduled shows right now!")
      }
      else {
        var body = JSON.parse(body);
        console.log(body);
        body.forEach(e => {
          console.log("-------VENUE-------")
          console.log(e.venue.name);
          console.log(e.venue.city + ', ' + e.venue.region + "" + e.venue.country);
          console.log("Date: " + moment(e.datetime).format("MM/DD/YYYY"));
        }
        )
      };
    }
  });
}
else if (arg[2] === 'spotify-this-song') {
  var songArr = [];
  var spotify = new Spotify(keys.spotify);
  for (var i = 3; i < arg.length; i++) {
    songArr.push(arg[i]);
  }
  var song = songArr.join("%20");

  var spotURL = `https://api.spotify.com/v1/search?q=${song}&type=track`
  console.log(spotURL);
  spotify
    .request(spotURL)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error('Error occured: ' + err);
    });
}
else if (arg[2] === 'movie-this') {
  if (arg[3] != null) {
    var movieArr = [];

    for (var i = 3; i < arg.length; i++) {
      movieArr.push(arg[i]);
    }
    var movie = movieArr.join("%20");
    var omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t=${movie}`
    console.log(omdbURL);
    request(omdbURL, function (err, resp, body) {
      if (!err && resp.statusCode === 200) {
        m = JSON.parse(body);
        console.log(`Title: ${m.Title}`);
        console.log(`Year Released: ${m.Year}`);
        console.log(`IMDB Raiting: ${m.Ratings[0].Value}`);
        console.log(`Rotten Tomatoes Rating: ${m.Ratings[1].Value}`);
        console.log(`Produced in: ${m.Country}`);
        console.log(`Language: ${m.Language}`);
        console.log(`Plot: ${m.Plot}`);
        console.log(`Cast: ${m.Actors}`);
      }
    })
  }
  else {
    var movie = "Mr%20Nobody";
    var omdbURL = `http://www.omdbapi.com/?apikey=f0db77fd&t=${movie}`
    console.log(omdbURL);
    request(omdbURL, function (err, resp, body) {
      if (!err && resp.statusCode === 200) {
        m = JSON.parse(body);
        console.log(`Title: ${m.Title}`);
        console.log(`Year Released: ${m.Year}`);
        console.log(`IMDB Raiting: ${m.Ratings[0].Value}`);
        console.log(`Rotten Tomatoes Rating: ${m.Ratings[1].Value}`);
        console.log(`Produced in: ${m.Country}`);
        console.log(`Language: ${m.Language}`);
        console.log(`Plot: ${m.Plot}`);
        console.log(`Cast: ${m.Actors}`);
      }
    }
    )}
}
else if (arg[2] === 'do-what-it-says') {
  var fs = require('fs');
  fs.('random.txt', )
}