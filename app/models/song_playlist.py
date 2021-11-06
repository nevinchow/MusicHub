from .db import db

class Song_playlist():
    __tablename__ = 'songs_playlist'

    id = db.Column(db.Integer, primary_key=True)
    songId = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False)
    playlistId = db.Column(db.Integer, db.ForeignKey('playlists.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'songId': self.songId,
            'playlistId': self.playlistId
        }