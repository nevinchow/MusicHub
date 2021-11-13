from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_albums():
    kiss_land = Album(
        artistId=1, 
        genre="R&B", 
        title="Kiss Land", 
        year=2013,
        imageURL="https://hiphop-n-more.com/wp-content/uploads/2013/07/The-Weeknd-Kiss-Land-Album-Cover.jpg"
    )
    surrender = Album(
        artistId=2,
        genre="electronic",
        title="Surrender",
        year=2021,
        imageURL="https://static.qobuz.com/images/covers/3a/6a/my8sklz176a3a_600.jpg"

    )
    miss_anthrocpocene = Album(
        artistId=3,
        genre="electronic",
        title="Miss Anthrocpocene (Rave Edition)",
        year=2020,
        imageURL="https://www3.hiphopde.com/wp-content/uploads/2019/11/ALBUM-Grimes-%e2%80%93-Miss-Anthropocene.png"
    )
    olympia = Album(
        artistId=4,
        genre="electronic",
        title="Olympia",
        year=2021,
        imageURL="https://t2.genius.com/unsafe/1200x0/https%3A%2F%2Fimages.genius.com%2F62279c063e32bbcbf33ddd242418d2fa.1000x1000x1.png"
    )
    certified_lover_boy = Album(
        artistId=5,
        genre="hip-hop",
        title="Cerified Lover Boy",
        year=2021,
        imageURL="https://www.rap4all.com/uploads/albums/september2021/drake-certified-lover-boy.jpg"
    )
    planet_her = Album(
        artistId=6,
        genre="R&B",
        title="Planet Her",
        year=2021,
        imageURL="https://okayplayer-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/doja-cat-is-a-genre-blending-shapeshifter-on-planet-her-and-we-love-it.jpg"

    )
    dreamland = Album(
        artistId=7,
        genre="electronic",
        title="Dreamland",
        year=2021,
        imageURL="https://edmidentity.com/wp-content/uploads/2021/03/ZHU-DREAMLAND-2021-Album-Artwork.jpg"
    )
    





    db.session.add(kiss_land)
    db.session.add(surrender)
    db.session.add(miss_anthrocpocene)
    db.session.add(olympia)
    db.session.add(certified_lover_boy)
    db.session.add(planet_her)
    db.session.add(dreamland)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
