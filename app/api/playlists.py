from flask import Blueprint, jsonify
# from flask_login import login_required
from app.models import Playlist

playlist_routes = Blueprint('playlist_routes', __name__)


@playlist_routes.route('/user/<int:id>', methods=['GET'])
# @login_required
def all_playlists(id):
    print("in route")
    playlists = Playlist.query.filter(Playlist.userId == id).all()
    return {'playlists': [playlist.to_dict() for playlist in playlists]}

@playlist_routes.route('/<int:id>')
# @login_required
def playlist(id):
    pass
