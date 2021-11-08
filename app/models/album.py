from .db import db
# from sqlalchemy.orm import relationship
# from sqlalchemy.schema import Column, ForeignKey
# from sqlalchemy.types import Integer, String
# from . import Artist


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    # songId = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    title = db.Column(db.String, nullable=False)
    # Maybe add a genre table to reference genre.id here
    genre = db.Column(db.String, nullable=False)
    #Release date
    year = db.Column(db.Integer, nullable=False)
    # ImageURL default is the blank album image
    imageURL = db.Column(
        db.String, default='https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2')
    # reviewId = db.Column(db.Integer, db.ForeignKey('reviews.id'))

    # user= relationship('User', back_populates='albums')
    artist=db.relationship('Artist', back_populates='albums')
    reviews=db.relationship('Review', back_populates='album')
    
    def to_dict(self):
        return {
            'id': self.id,
            'artistId': self.artistId,
            'genre': self.genre,
            'year': self.year,
            'title': self.title,
            'imageURL': self.imageURL
           
        }
