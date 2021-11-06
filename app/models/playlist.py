from .db import db

class Playlist():
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    imageURL = db.Column(db.String)
    description = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'name': self.name,
            'imageURL': self.imageURL,
            'description': self.description,
        }

