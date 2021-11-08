from .db import db

songs_playlists = db.Table(
"songs_playlists",
db.Column("songId", db.Integer, db.ForeignKey("songs.id")),
db.Column("playlistId", db.Integer, db.ForeignKey("playlists.id")))
