var env = require('dotenv').config();

var keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var arg = process.argv;
var search = arg.slice(3).join(" ");
var spotify = new Spotify(keys.spotify)

function searchSpotify(song) {
  spotify.search({ type: 'track', query: song, limit: 10 }, function (err, data) {
    if (err) {
      return console.log(err);
    }
    else {
      console.log(data);
      dataArr = data.tracks.items;
      dataArr.forEach(item => {
        console.log(`\nArtist(s): ${(item.album.artists).join(",")}\nSong: ${item.name}\nPreview: ${item.preview_url}\nAlbum: ${item.album.name}`);
      });

    }
  })
}

if (arg[2] === 'concert-this') {
  var URL = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`;
  console.log(URL);
  request(URL, function (err, resp, body) {
    if (!err && resp.statusCode === 200 && (JSON.parse(body)).length < 1) {
      console.log("This artist does not have any scheduled shows right now!");
    }
    else {
      var body = JSON.parse(body);
      console.log(body);
      body.forEach(e => {
        console.log(`\n-------VENUE-------\n${e.venue.name}\n${e.venue.city}, ${e.venue.region} ${e.venue.country} Date: ${moment(e.datetime).format("MM/DD/YYYY")}`);
      }
      )
    };
  }
  );
}
else if (arg[2] === 'spotify-this-song') {
  console.log(search);
  searchSpotify(search);
}
else if (arg[2] === 'movie-this') {
  var omdbURL = `http://www.omdbapi.com/?apikey=trilogy&t=${search}`
  request(omdbURL, function (err, resp, body) {
    if (!err && resp.statusCode === 200) {
      m = JSON.parse(body);
      console.log(`\nTitle: ${m.Title}\nYear Released: ${m.Year}\nIMDB Raiting: ${m.Ratings[0].Value}\nRotten Tomatoes Rating: ${m.Ratings[1].Value}\nProduced in: ${m.Country}\nLanguage: ${m.Language}\nPlot: ${m.Plot}\nCast: ${m.Actors}`);
    }
    else {
      var omdbURL = `http://www.omdbapi.com/?apikey=f0db77fd&t=Mr%20Nobody`
      request(omdbURL, function (err, resp, body) {
        if (!err && resp.statusCode === 200) {
          m = JSON.parse(body);
          console.log(`\nTitle: ${m.Title}\nYear Released: ${m.Year}\nIMDB Raiting: ${m.Ratings[0].Value}\nRotten Tomatoes Rating: ${m.Ratings[1].Value}\nProduced in: ${m.Country}\nLanguage: ${m.Language}\nPlot: ${m.Plot}\nCast: ${m.Actors}`);
        }
      }
    )
    }
  }
  )
}

else if (arg[2] === 'do-what-it-says') {
  var fs = require('fs');
  fs.readFile('random.txt', 'utf8', (err, text) => {
    if (!err) {
      var textArr = text.split(',');
      console.log(textArr);
      if (textArr[0] === 'spotify-this-song') {
        var s = textArr[1].substr(1, (textArr[1].length - 2));
        search = s.split(" ").join(" ");
        searchSpotify(search);
      }
    }
    else {
      (console.log(err));
    }

  }
  )
}