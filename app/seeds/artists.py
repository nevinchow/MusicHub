from app.models import db, Artist


# Adds a demo user, you can add other users here if you want
def seed_artists():
    the_weeknd = Artist(
        name="The Weeknd",
        bio="Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is among the world's best selling musical artists with over 75 million records sold. He is also on the list of most-streamed artists on Spotify[4] and his song 'Blinding Lights' was the most streamed song on Spotify in 2020. Tesfaye has won three Grammy Awards, five American Music Awards, nineteen Billboard Music Awards, two MTV Video Music Awards, and nine Juno Awards, and has been nominated for an Academy Award.",
        profileURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg/220px-FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg',
        headerURL='https://www.nme.com/wp-content/uploads/2021/08/Weeknd-May-2021-696x441.jpg',
        biopictureURL="https://static.billboard.com/files/2020/06/the-weeknd-2020-cr-Pari-Dukovic-billboard-1548-1593528016-compressed.jpg"
    )
    rufus = Artist(
        name="Rufus du Sol",
        bio="RÜFÜS DU SOL have emerged as one of the world’s preeminent live electronic acts. The Australian three-piece, comprised of members Tyrone Lindqvist, Jon George and James Hunt, have released two platinum-certified albums, ATLAS and Bloom, with their newly unveiled third album Solace ushering in a new chapter for the trio.",
        profileURL="https://www.pne.ca/files/uploads/2019/01/Rufus-Du-Sol-1080x1080.jpg",
        headerURL='https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/3072383/87ee3b48-bd28-4aff-a0f2-35859d9ae8fe.jpg',
        biopictureURL="https://popnable.com/images/singers/temp/rufus_rufus_du_sol_australia_top_50_13.jpeg"
        )
    grimes = Artist(
        name="Grimes",
        bio="Claire Elise Boucher (born March 17, 1988), better known by the stage name Grimes, is a Canadian singer, songwriter, record producer and music video director. Born and raised in Vancouver, she first became involved with the underground music scene and began recording her own experimental music while attending McGill University in Montreal.",
        profileURL="https://",
        headerURL="https://media.pitchfork.com/photos/5e4f16c994f6ea0009d3f2c6/2:1/w_790/grimes.jpg",
        biopictureURL="https://static.billboard.com/files/2020/03/grimes-cr-apple-music-2020-billboard-1548-1583963618-compressed.jpg"
        )

    db.session.add(grimes)   
    db.session.add(rufus)
    db.session.add(the_weeknd)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
