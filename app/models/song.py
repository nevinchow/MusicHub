
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import relationship
from .db import db
# from sqlalchemy.schema import Column, ForeignKey, Table
# from sqlalchemy.types import Integer, String

# songs_playlists = db.Table(
# "songs_playlists",
# db.Column("songId", db.Integer, db.ForeignKey("songs.id")),
# db.Column("playlistId", db.Integer, db.ForeignKey("playlists.id")))

class Song(db.Model):
    __tablename__ = 'songs'
    # __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    # Maybe add a genre table to reference genre.id here
    genre = db.Column(db.String, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)


    # user= relationship('User', back_populates='songs')
    artist = db.relationship('Artist', back_populates='songs')
    playlists=db.relationship('Playlist', secondary=songs_playlists, back_populates='song')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'genre': self.genre,
            'duration': self.duration,
            'albumId': self.albumId,
            'artistId': self.artistId

        }




# class Playlist(db.Model):
#     __tablename__ = 'playlists'
#     __table_args__ = {'extend_existing': True}
#     id = db.Column(db.Integer, primary_key=True)
#     userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     name = db.Column(db.String, nullable=False)
#     imageURL = db.Column(db.String)
#     description = db.Column(db.String, nullable=False)

#     user = db.relationship("User", back_populates="playlists")
#     songs=db.relationship('Song', secondary=songs_playlists, back_populates='playlists')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'userId': self.userId,
#             'name': self.name,
#             'imageURL': self.imageURL,
#             'description': self.description,
#         }
