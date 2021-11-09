from app.models import db, Playlist


# Adds a demo user, you can add other users here if you want
def seed_playlists():
    randomMix = Playlist(
        userId=1,
        name="Random Mix",
        imageURL="https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/3/24/0/Shutterstock_393700531_BeachPlaylistGraphic.jpg.rend.hgtvcom.616.462.suffix/1491594774042.jpeg",
        description="My super awesome playlist"
    )

    db.session.add(randomMix)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_playlists():
    db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
    db.session.commit()
