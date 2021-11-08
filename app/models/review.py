from .db import db
# from sqlalchemy.orm import relationship
# from sqlalchemy.ext.declarative import declarative_base

# from sqlalchemy.schema import Column, ForeignKey
# from sqlalchemy.types import Integer, String



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=False)
    description = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'albumId': self.albumId,
            'description': self.description,
            'rating': self.rating,
            'userId': self.userId
        }

    # user= relationship('User', back_populates='reviews')
    album=db.relationship('Album', back_populates='reviews')