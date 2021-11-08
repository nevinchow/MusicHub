
from sqlalchemy.orm import relationship

from .db import db
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

songs_playlists = Table(
"songs_playlists",
Base.metadata,
Column("songId", ForeignKey("songs.id"), primary_key=True),
Column("playlistId", ForeignKey("playlists.id"), primary_key=True))

class Playlist(db.Model):
    __tablename__ = 'playlists'
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
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

    # user = relationship("User", back_populates="playlists")
    songs=relationship('Song', secondary=songs_playlists, back_populates='playlists')
