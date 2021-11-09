# from flask import Blueprint, jsonify
# from flask_login import login_required
# from app.models import Artist, Playlist, Album, Song

# album_routes=Blueprint('album', __name__)

# @album_routes.route('/<int:id>')
# # @login_required
# def artist(id):
   
#     albums= Album.query.get(id).all()
#     songs= Song.query.all()

#     return {
    
#     'albums': [album.to_dict() for album in albums]
#     }
    # 'playlists': [playlist.to_dict() for playlist in playlists] }
