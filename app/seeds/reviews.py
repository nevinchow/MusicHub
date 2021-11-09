from app.models import db, Review, review


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
    review4 = Review(
        albumId=2,
        description="“I Don’t Want To Leave” switches things up with skittering drums and the boisterous synths one would want from them. The track has all the makings of a new set closer (though “Innerbloom” probably still reigns supreme) as Tyrone Lindqvist exclaims “I don’t want to leave right now, stay with me for one more night.”",
        rating=5,
        userId=3
    )
    review5 = Review(
        albumId=2,
        description="RÜFÜS DU SOL delivers the goods again for their fans with Surrender. There are the bright, soaring and cheery moments that explode out of the speakers, in addition to the heartbreak and chugging beats that underpin much of the record. They have mastered the live feeling of progressive, melodic and dancefloor-ready electronic music. It will be great to hear all of these tracks live when they add more energy to their songs.",
        rating=4,
        userId=4
    )
    review6 = Review(
        albumId=3,
        description="In November 2018, Grimes released “We Appreciate Power, ” a collaboration with her best friend HANA, and a cunningly meta prelude to Miss Anthropocene. Though the propulsive, guitar-driven track didn’t end up on the album, it reveals the aesthetic cynicism behind it: a beckoning chant about capitulating to A.I. supremacy from the perspective of a girl group, the ultimate vessel for artifice and propaganda. Surprisingly—or not, given Grimes’ track record of being more outspoken on Twitter and Tumblr—the 10 tracks that make up Miss Anthropocene, are lyrically more ambiguous about this ambitious theme. Instead, we’re left with a convoluted narrative about personifying climate change through a fictional cosmology of demons and villainesses giddily celebrating global warming as a force of good. In that sense, Miss Anthropocene reflects the creative state in which it was made: 'negative, aggressive, and isolating.'",
        rating=3,
        userId=1
    )
    review7 = Review(
        albumId=3,
        description="Miss Anthropocene takes everything about Grimes the musician – her uncanny ability to build a song out of parts no one ever thought to put together before, that idiosyncratic voice, her ear for a classic melody – and concisely packages it into her most penetrating record yet. That’s the beautiful dichotomy of Grimes, equal parts stressful, grating, and difficult, yet also powerful, incisive, and illuminating. ",
        rating=5,
        userId=2
    )
    review8 = Review(
        albumId=3,
        description="Miss Anthropocene is a Kanye West of a listening experience. Strengthened by listening less hard and chilling out. Weakened by due diligence and the artist’s cerebral disconnect between what she's great at making and who she believes she is.",
        rating=4,
        userId=3
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE v RESTART IDENTITY CASCADE;')
    db.session.commit()
