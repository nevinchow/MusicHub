from .db import db

class Song():
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('album.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable=False)
    playlistId = db.Column(db.Integer, db.ForeignKey('playlist.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'genre': self.genre,
            'duration': self.duration,
            'albumId': self.albumId,
            'artistId': self.artistId,
            'playlistId': self.playlistId
        }
