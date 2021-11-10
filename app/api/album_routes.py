from flask import Blueprint, jsonify, request, session, redirect
from flask_login import login_required
from app.models import db, Artist,  Album, Song, Review
from app.forms.review_form import ReviewForm

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


@album_routes.route('/<int:id>/reviews')
def reviews(id):

    reviews=Review.query.filter(Review.albumId==id).all()
    
    return {
    
    'reviews': [review.to_dict() for review in reviews]
    }
     

@album_routes.route('/add_review',  methods=['POST'])
def add_review():
    

    if request.method == 'POST':

        form = ReviewForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Review()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
        return data.to_dict()

    
