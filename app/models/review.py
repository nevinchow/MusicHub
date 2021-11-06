from .db import db

class Review():
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
