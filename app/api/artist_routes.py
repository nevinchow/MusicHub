from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Artist, Playlist, Album, Song

artist_routes=Blueprint('artist', __name__)


@artist_routes.route('/<int:id>')
# @login_required
def artist(id):
    artists= Artist.query.get(id)
    albums= Album.query.all()
    songs= Song.query.all()

    return {
    'artists': [artist.to_dict() for artist in artists],
    'albums': [album.to_dict() for album in albums],
    'songs': [song.to_dict() for song in songs]}
    # 'playlists': [playlist.to_dict() for playlist in playlists] }


@artist_routes.route('/<int:id>/albums')
def albumsbyartist(id):
    albums=Album.query.get(id).all()
    return {
        'albums': [album.to_dict() for album in albums]
    }