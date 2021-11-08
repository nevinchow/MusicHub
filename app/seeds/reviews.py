from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        albumId=1,
        description="Sonically, his oeuvre has bridged the divide between barren and lush. Lyrically, he has perfected the motif of narcotized horror.... This is the real deal.",
        rating=5,
        userId=1
    )


    review2 = Review(
        albumId=1,
        description="He still has an ear for production and his voice remains a pliable tool, but to keep himself tethered to an aesthetic he defined and completed within a year is to do himself and the listener a disservice.",
        rating=2,
        userId=2
    )
    review3 = Review(
        albumId=1,
        description="I really enjoyed the album, including the production quality, the lyrics, and Abel's vocals. The Weeknd is really evolving as an artist and really finding his stride after the success of 'Trilogy'. He never disappoints.",
        rating=5,
        userId=3
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE v RESTART IDENTITY CASCADE;')
    db.session.commit()
