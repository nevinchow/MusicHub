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

    Ye = Artist(
        name="Ye",
        bio="Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is among the world's best selling musical artists with over 75 million records sold. He is also on the list of most-streamed artists on Spotify[4] and his song 'Blinding Lights' was the most streamed song on Spotify in 2020. Tesfaye has won three Grammy Awards, five American Music Awards, nineteen Billboard Music Awards, two MTV Video Music Awards, and nine Juno Awards, and has been nominated for an Academy Award.",
        profileURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg/220px-FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg',
        headerURL='https://www.nme.com/wp-content/uploads/2021/08/Weeknd-May-2021-696x441.jpg',
        biopictureURL="https://static.billboard.com/files/2020/06/the-weeknd-2020-cr-Pari-Dukovic-billboard-1548-1593528016-compressed.jpg"
    )



    db.session.add(the_weeknd)
    db.session.add(Ye)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
