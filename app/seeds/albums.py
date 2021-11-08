from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_albums():
    kiss_land = Album(
        artistId=1, 
        genre="R&B", 
        title="Kiss Land", 
        imageURL="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Weeknd_-_Kiss_Land.png/220px-The_Weeknd_-_Kiss_Land.png"
    )

    db.session.add(kiss_land)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
