
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from .db import db
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String

Base = declarative_base()

songs_playlists = Table(
"songs_playlists",
Base.metadata,
Column("songId", ForeignKey("songs.id"), primary_key=True),
Column("playlistId", ForeignKey("playlists.id"), primary_key=True))

class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    # Maybe add a genre table to reference genre.id here
    genre = db.Column(db.String, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'genre': self.genre,
            'duration': self.duration,
            'albumId': self.albumId,
            'artistId': self.artistId
            
        }

    # user= relationship('User', back_populates='songs')
    artist = relationship('Artist', back_populates='songs')
    playlists=relationship('Playlist', secondary=songs_playlists, back_populates='song')

    