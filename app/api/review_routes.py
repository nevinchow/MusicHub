from flask import Blueprint, jsonify, request
from app.forms.review_form import ReviewForm
# from flask_login import login_required
from app.models import Playlist,db, SongPlaylist, Song, Review
from sqlalchemy import update


review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:id>/edit', methods=['POST'])
# @login_required
def edit_review(id):

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        review = Review.query.get(id)
        review.userId = data['userId']
        review.albumId = data['albumId']
        review.rating = data['rating']
        review.description = data['description']
        db.session.commit()
        return review.to_dict()


@review_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()

    return review.to_dict()


@review_routes.route('/')
def get_reviews():
    reviews=Review.query.all()

    return {
        'reviews':[review.to_dict() for review in reviews]
    }