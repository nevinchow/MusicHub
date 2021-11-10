from flask import Blueprint, jsonify, request
from app.forms.add_playlist_form import PlaylistForm
# from flask_login import login_required
from app.models import Playlist,db
from sqlalchemy import update




playlist_routes = Blueprint('playlist_routes', __name__)


@playlist_routes.route('/', methods=['GET'])
# @login_required
def all_playlists():
    print("in route")
    playlists = Playlist.query.all()
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
        form = PlaylistForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Playlist()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
        return data.to_dict()


@playlist_routes.route('/<int:id>/edit', methods=['POST'])
# @login_required
def edit_playlist(id):

    form = PlaylistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        playlist = Playlist.query.get(id)
        playlist.userId = data['userId']
        playlist.name = data['name']
        playlist.imageURL = data['imageURL']
        playlist.description = data['description']
        db.session.commit()
        return playlist.to_dict()


@playlist_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_playlist(id):
    playlist = Playlist.query.get(id)
    db.session.delete(playlist)
    db.session.commit()

    return playlist.to_dict()



            