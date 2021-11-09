from app.models import db
from app.models import SongPlaylist

# Adds a demo user, you can add other users here if you want
def seed_songs_playlists():
    one = SongPlaylist(
        songId=1,
        playlistId=1
    )
    two = SongPlaylist(
        songId=2,
        playlistId=1
    )
    three = SongPlaylist(
        songId=3,
        playlistId=1
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs_playlists():
    db.session.execute('TRUNCATE song_playlist RESTART IDENTITY CASCADE;')
    db.session.commit()
