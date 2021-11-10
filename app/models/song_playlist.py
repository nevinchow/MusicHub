from .db import db


SongPlaylist = db.Table(
"songs_playlists",
    db.Column("songId", db.Integer, db.ForeignKey(
        "songs.id")),
    db.Column("playlistId", db.Integer, db.ForeignKey("playlists.id")))

# class SongPlaylist(db.Model):
#     __tablename__ = 'song_playlist'

#     id = db.Column(db.Integer, primary_key=True)
#     song_id = db.Column(db.Integer, db.ForeignKey('song.id'))
#     playlist_id = db.Column(db.Integer, db.ForeignKey('playlist.id'))

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'song_id': self.song_id,
#             'playlist_id': self.playlist_id
#         }


# previous implementation 

