require('dotenv').config();
var keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var arg = process.argv;
var search = arg.slice(3).join(' ');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

var searchSpotify = song => {
  spotify.search({ type: 'track', query: song, limit: 10 }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      dataArr = data.tracks.items;
      dataArr.forEach(item => {
        artists = JSON.stringify(item.album.artists[0].name);
        console.log(
          `\nArtist(s): ${artists}\nSong: ${item.name}\nPreview: ${
            item.preview_url
          }\nAlbum: ${item.album.name}`
        );
      });
    }
  });
};
var getConcerts = artist => {
  var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
  request(URL, (err, resp, body) => {
    if (!err && resp.statusCode === 200 && JSON.parse(body).length < 1) {
      console.log('This artist does not have any scheduled shows right now!');
    } else {
      var body = JSON.parse(body);
      body.forEach(e => {
        console.log(
          `\n-------VENUE-------\n${e.venue.name}\n${e.venue.city}, ${
            e.venue.region
          } ${e.venue.country} Date: ${moment(e.datetime).format('MM/DD/YYYY')}`
        );
      });
    }
  });
};
var movieInfo = movie => {
  var omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t=${movie}`;
  request(omdbURL, function(err, resp, body) {
    if (!err && resp.statusCode === 200) {
      m = JSON.parse(body);
      console.log(
        `\nTitle: ${m.Title}\nYear Released: ${m.Year}\nIMDB Raiting: ${
          m.Ratings[0].Value
        }\nRotten Tomatoes Rating: ${m.Ratings[1].Value}\nProduced in: ${
          m.Country
        }\nLanguage: ${m.Language}\nPlot: ${m.Plot}\nCast: ${m.Actors}`
      );
    } else {
      var omdbURL = `http://www.omdbapi.com/?apikey=f0db77fd&t=Mr%20Nobody`;
      request(omdbURL, function(err, resp, body) {
        if (!err && resp.statusCode === 200) {
          m = JSON.parse(body);
          console.log(
            `\nTitle: ${m.Title}\nYear Released: ${m.Year}\nIMDB Raiting: ${
              m.Ratings[0].Value
            }\nRotten Tomatoes Rating: ${m.Ratings[1].Value}\nProduced in: ${
              m.Country
            }\nLanguage: ${m.Language}\nPlot: ${m.Plot}\nCast: ${m.Actors}`
          );
        }
      });
    }
  });
};
var doWhatItSays = () => {
  fs.readFile('random.txt', 'utf8', (err, text) => {
    if (!err) {
      var textArr = text.split(',');
      var s = textArr[1].substr(1, textArr[1].length - 2);
      switch (textArr[0]) {
        case 'spotify-this-song':
          search = s.split(' ').join(' ');
          searchSpotify(search);
          break;
        case 'concert-this':
          search = s.split(' ').join(' ');
          getConcerts(search);
          break;
        case 'movie-this':
          search = s.split(' ').join(' ');
          movieInfo(search);
          break;
      }
    } else {
      console.log(err);
    }
  });
};

switch (arg[2]) {
  case 'concert-this':
    getConcerts(search);
    break;
  case 'spotify-this-song':
    searchSpotify(search);
    break;
  case 'movie-this':
    movieInfo(search);
    break;
  case 'do-what-it-says':
    doWhatItSays();
    break;
}
