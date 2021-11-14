# Welcome to Music Hub

_A clone of Spotify that showcases popular music and albums_

Discover new music and create your own playlists

# Features of Music Hub

All features require users to be logged in. Demo login is provided.

## 1. Songs 
* Users are able to browse and listen to songs as well as add, edit, or delete them from playlists. 

## 2. Playlist CRUD
* Users are able to create, edit, and delete their playlists. 

## 3. Search 
* Users may search for an album, song, title, artist or genre.
* Users should be able to search for playlists based on songs, genre, or artist.

## 4. Continuous Play with Navigating Site
* Logged in users are able to still hear their song being played when they click on another link on the page. 
 
## 5. Reviews CRUD
* Users are able create reviews on Albums, they are also able to edit and delete their reviews



## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/nevinchow/SpotifyProject
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
   
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

