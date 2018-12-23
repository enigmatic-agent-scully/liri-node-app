# LIRI Bot

> Language Interpretation and Recognition Interface

LIRI is a command line Language Interpretation and Recognition Interface created with Node.js.

## Usage

This particular LIRI takes in the following command line arguments and search parameters to perform these functions:

- Search Spotify for a particular song and return the song's artist, title, Spotify preview link, and album title

```
$ node liri.js spotify-this-song cornflake girl
```

returns the first ten results in the following format:

```
Artist(s): "Tori Amos"
Song: Cornflake Girl
Preview: https://p.scdn.co/mp3-preview/0283d831601ffc044f8935c12f55c6168d5006e5?cid=7a49f996b8f146459b2b908503284c10
Album: Under the Pink
```

- Search the Bands In Town API and return all upcoming concerts for a particular band or artist:

`node liri.js concert-tihs <<artist name>>`

- Search the Open Movie Database API and return the title, release year, IMDB rating, Rotten Tomatoes rating, production country, language, plot, and cast for a particular movie

`node liri.js movie-this`

- Read a text file and execute the above commands by parsing the contents into LIRL commands and returning the expected output

`node liri.js do-what-it-says`

```js
var liribot = require('liribot');

console.log('hello warld');
```

outputs

```
hello warld
```

## API

```js
var liribot = require('liribot');
```

See [api_formatting.md](api_formatting.md) for tips.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install liribot
```

## Acknowledgments

liribot was inspired by..

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

ISC
