from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Artist, Playlist, Album, playlist

main_routes=Blueprint('main', __name__)


@main_routes.route('/')
# @login_required
def main():
    artists= Artist.query.all()
    albums= Album.query.all()
    playlists= Playlist.query.all()
    return {
    'artists': [artist.to_dict() for artist in artists],
    'albums': [album.to_dict() for album in albums]}
    # 'playlists': [playlist.to_dict() for playlist in playlists] }




