from flask import Blueprint, jsonify, request
# from flask_login import login_required
from app.models import Playlist,db



playlist_routes = Blueprint('playlist_routes', __name__)


@playlist_routes.route('/user/<int:id>', methods=['GET'])
# @login_required
def all_playlists(id):
    print("in route")
    playlists = Playlist.query.filter(Playlist.userId == id).all()
    return {'playlists': [playlist.to_dict() for playlist in playlists]}


@playlist_routes.route('/<int:id>', methods=['GET'])
# @login_required
def playlist(id):
    playlist = Playlist.query.get(id)
    return playlist.to_dict()

@playlist_routes.route('/add', methods=['POST'])
# @login_required
def add_playlist():
    if request.method == "POST":
        print(request)
        playlist = Playlist(**request.args)
        db.session.add(playlist)
        db.session.commit()
        return playlist.to_dict()
