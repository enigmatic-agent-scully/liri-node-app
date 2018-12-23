# LIRI Bot

> Language Interpretation and Recognition Interface (LIRI) is a command line Language Interpretation and Recognition Interface created with Node.js.

## Usage

This particular LIRI takes in the following command line arguments and search parameters to perform these functions:

#### 'spotify-this-song'

Searching Spotify for a particular song...

```
$ node liri.js spotify-this-song cornflake girl
```

...returns the first ten results in the following format:

```
Artist(s): "Tori Amos"
Song: Cornflake Girl
Preview: [link](https://p.scdn.co/mp3-preview/0283d831601ffc044f8935c12f55c6168d5006e5?cid=7a49f996b8f146459b2b908503284c10)
Album: Under the Pink
```

#### 'concert-this'

Searching the Bands In Town API...

```
$ node liri.js concert-tihs mitski
```

...returns all upcoming concerts for that particular band or artist to the console in the following format:

```
-------VENUE-------
Oxford Art Factory, Sydney
Darlinghurst,  Australia Date: 02/04/2019
```

#### 'movie-this'

Searching the Open Movie Database API...

```
$ node liri.js movie-this practical magic
```

...returns the title, release year, IMDB rating, Rotten Tomatoes rating, production country, language, plot, and cast for that movie to the console in the following format:

```Title: Practical Magic
Year Released: 1998
IMDB Raiting: 6.2/10
Rotten Tomatoes Rating: 20%
Produced in: USA
Language: English
Plot: Two witch sisters, raised by their eccentric aunts in a small town, face closed-minded prejudice and a curse which threatens to prevent them ever finding lasting love.
Cast: Sandra Bullock, Nicole Kidman, Stockard Channing, Dianne Wiest
```

#### 'do-what-it-says'

This command reads a text file called 'random.txt' and executes the command contained within the file by parsing the contents and returning the expected output of the specified command to the console.

```
$ node liri.js do-what-it-says
```

##### Example Searches

![LIRI gif](https://github.com/enigmatic-agent-scully/liri-node-app/blob/master/liri-node-app.gif?raw=true "liri-node-app")

## Install

The following instructions will get you a copy of the project up and running on your local machine for development pourposes.

### Prerequisites

To install this LIRI bot on your local machine, you need:

#### Spotify API

Visit [Spotify for Developers](https://developer.spotify.com/) to acquire your own Spotify API key. Save your unique ID and SECRET_ID in a .env file. Be sure to include your .env file in your .gitignore.

#### Dependencies

This app requires the following npm packages:

- [request](https://www.npmjs.com/package/request)
- [moment](https://www.npmjs.com/package/moment)
- [node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

With [npm](https://npmjs.org/) installed, run

```
$ npm i --save request moment node-spotify-api
```

#### Fork or Download

Now that you've installed everything above, you're ready to either fork or download a zip file of the project from gitHub and run it! Happy coding!

## See Also

- This README.md was created with [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

ISC
