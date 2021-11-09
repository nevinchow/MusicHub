from flask import Blueprint, jsonify
# from flask_login import login_required
from app.models import Playlist

playlist_routes = Blueprint('playlist_routes', __name__)

@playlist_routes.route('/playlists', methods=['GET'])
# @login_required
def all_playlists(userId):
    
    playlists = Playlist.query.filter_by(Playlist.userId == userId).all()
    return {'playlists': [playlists.to_dict() for playlist in playlists]}

@playlist_routes.route('/playlist/<int:id>')
# @login_required
def playlist(id):
    pass