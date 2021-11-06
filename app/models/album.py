from .db import db

class Album():
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    # songId = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    # Maybe add a genre table to reference genre.id here
    genre = db.Column(db.String, nullable=False)
    # ImageURL default is the blank album image
    imageURL = db.Column(
        db.String, default='https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2')
    reviewId = db.Column(db.Integer, db.ForeignKey('reviews.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'artistId': self.artistId,
            'genre': self.genre,
            'title': self.title,
            'imageURL': self.imageURL,
            'reviewId': self.reviewId
        }

    