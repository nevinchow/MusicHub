from app.models import db
from app.models import SongPlaylist
from sqlalchemy import insert
# Adds a demo user, you can add other users here if you want


def seed_saved_songs():

    saved_song1 = SongPlaylist.insert().values(songId=26, playlistId=1)
    # saved_song2 = SongPlaylist.insert().values(song_id=7, playlist_id=1)
    # saved_song3 = SongPlaylist.insert().values(song_id=23, playlist_id=1)
    # saved_song4 = SongPlaylist.insert().values(song_id=13, playlist_id=1)
    # saved_song5 = SongPlaylist.insert().values(song_id=43, playlist_id=1)

    db.session.execute(saved_song1)
    # db.session.execute(saved_song2)
    # db.session.execute(saved_song3)
    # db.session.execute(saved_song4)
    # db.session.execute(saved_song5)

    # db.session.add(saved_song1)
    # db.session.add(saved_song2)
    # db.session.add(saved_song3)
    # db.session.add(saved_song4)
    # db.session.add(saved_song5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs_playlists():
    db.session.execute('TRUNCATE songs_playlists RESTART IDENTITY CASCADE;')
    db.session.commit()
