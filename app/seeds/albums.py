from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_albums():
    demo = Album(
        username='Demo', email='demo@aa.io', password='password')
    marnie = Album(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = Album(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
