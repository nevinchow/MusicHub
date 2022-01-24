from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song

song_routes = Blueprint('songs', __name__)

@song_routes.route('')
# @login_required
def allSongs():
    songs = Song.query.all()
    return {'songs': [song.to_dict() for song in songs]}


@song_routes.route('/<int:id>')
# @login_required
def oneSong(id):
    song = Song.query.get(id)
    return song.to_dict()


@song_routes.route('/byAlbum/<int:id>')
def songs_by_album(id):
    album_songs=Song.query.filter(Song.albumId==id).all()
    return {'songs': [song.to_dict() for song in album_songs]}

# @song_routes.route('/byArtist/<int:id>')
# def songs_by_album(id):
#     artist_songs=Song.query.filter(Song.artistId==id).all()
#     return {'songs': [song.to_dict() for song in artist_songs]}
