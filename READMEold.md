# LIRI Bot

LIRI is a command line Language Interpretation and Recognition Interface created with Node.js. This particular LIRI takes in command line arguments to execute the following commands:

- Search Spotify for a particular song and return the song's artist, title, Spotify preview link, and album title

`node liri.js spotify-this-song <<song title>>`

- Search the Bands In Town API and return all upcoming concerts for a particular band or artist:

`node liri.js concert-tihs <<artist name>>`

- Search the Open Movie Database API and return the title, release year, IMDB rating, Rotten Tomatoes rating, production country, language, plot, and cast for a particular movie

`node liri.js movie-this`

- Read a text file and execute the above commands by parsing the contents into LIRL commands and returning the expected output

`node liri.js do-what-it-says`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development pourposes.

### Prerequisites

To install this LIRI bot on your local machine, you must first install Node.js and all required dependencies.
