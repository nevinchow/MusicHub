
# from sqlalchemy.orm import relationship

# from .db import db
# from sqlalchemy.schema import Column, ForeignKey, Table
# from sqlalchemy.types import Integer, String
# from sqlalchemy.ext.declarative import declarative_base



# songs_playlists = db.Table(
# "songs_playlists",
# db.Column("songId", db.Integer, db.ForeignKey("songs.id")),
# db.Column("playlistId", db.Integer, db.ForeignKey("playlists.id")))

# class Playlist(db.Model):
#     __tablename__ = 'playlists'
#     __table_args__ = {'extend_existing': True}
#     id = db.Column(db.Integer, primary_key=True)
#     userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     name = db.Column(db.String, nullable=False)
#     imageURL = db.Column(db.String)
#     description = db.Column(db.String, nullable=False)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'userId': self.userId,
#             'name': self.name,
#             'imageURL': self.imageURL,
#             'description': self.description,
#         }

#     # user = relationship("User", back_populates="playlists")
#     songs=db.relationship('Song', secondary=songs_playlists, back_populates='playlists')
