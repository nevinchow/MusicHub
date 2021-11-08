from app.models import db, Song, Playlist


# Adds a demo user, you can add other users here if you want
def seed_songs():
    professional = Song(
        name="Professional",
        genre="R&B",
        duration=368,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391729/yt5s.com_-_01._The_Weeknd_-_Professional_HD_128_kbps_zbkaxu.mp3"
    )
    the_town = Song(
        name="The Town",
        genre="R&B",
        duration=307,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391731/yt5s.com-02._The_Weeknd_-_The_Town_HD_uf0k9v.mp4"
    )
    adaption = Song(
        name="Adaptation",
        genre="R&B",
        duration=283,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391725/yt5s.com-03._The_Weeknd_-_Adaptation_HD_k8xbge.mp4"
    )
    love_in_the_sky = Song(
        name="Love in the Sky",
        genre="R&B",
        duration=267,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391729/yt5s.com-04._The_Weeknd_-_Love_In_The_Sky_HD_fmi1xk.mp4"
    )
    belong_to_the_world = Song(
        name="Belong to the World",
        genre="R&B",
        duration=307,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391727/yt5s.com-05._The_Weeknd_-_Belong_To_The_World_HD_ohysun.mp4"
    )

    live_for = Song(
        name="Live For",
        genre="R&B",
        duration=224,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391726/yt5s.com-06._The_Weeknd_-_Live_For_feat._Drake_HD_rpcmf8.mp4"
    )
    wanderlust = Song(
        name="Wanderlust",
        genre="R&B",
        duration=306,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391728/yt5s.com-07._The_Weeknd_-_Wanderlust_HD_alcm23.mp4"
    )
    kiss_land = Song(
        name="Kiss Land",
        genre="R&B",
        duration=455,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391734/yt5s.com-08._The_Weeknd_-_Kiss_Land_HD_720p_hxfjep.mp4"
    )
    pretty = Song(
        name="Pretty",
        genre="R&B",
        duration=375,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391734/yt5s.com-09._The_Weeknd_-_Pretty_HD_fprgem.mp4"
    )
    tears_in_the_rain = Song(
        name="Tears in the Rain",
        genre="R&B",
        duration=444,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391731/yt5s.com-10._The_Weeknd_-_Tears_In_The_Rain_HD_rpipgc.mp4"
    )
    wanderlust_remix = Song(
        name="Wanderlust Remix",
        genre="R&B",
        duration=305,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391733/yt5s.com-11._The_Weeknd_-_Wanderlust_Pharrell_Remix_HD_h4eary.mp4"
    )
    odd_look = Song(
        name="Odd Look",
        genre="R&B",
        duration=252,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391733/yt5s.com-12._The_Weeknd_-_Odd_Look_feat._Kavinsky_HD_720p_irtjsl.mp4"
    )

    db.session.add(professional)
    db.session.add(the_town)
    db.session.add(adaption)
    db.session.add(love_in_the_sky)
    db.session.add(belong_to_the_world)
    db.session.add(live_for)
    db.session.add(wanderlust)
    db.session.add(kiss_land)
    db.session.add(pretty)
    db.session.add(tears_in_the_rain)
    db.session.add(wanderlust_remix)
    db.session.add(odd_look)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
