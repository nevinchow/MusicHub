from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Artist,  Album, Song

album_routes=Blueprint('albums', __name__)

@album_routes.route('/<int:id>')
# @login_required
def artist(id):
   
    albums= Album.query.get(id)
    # songs= Song.query.all()
    artists=Artist.query.all()

    return {
    
    'albums': [albums.to_dict() ],
    'artists': [artist.to_dict() for artist in artists]
    }
     
