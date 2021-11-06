from .db import db

class Song():
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    # Maybe add a genre table to reference genre.id here
    genre = db.Column(db.String, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    playlistId = db.Column(db.Integer, db.ForeignKey('playlists.id'))

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
