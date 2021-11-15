from app.models import db, Artist


# Adds a demo user, you can add other users here if you want
def seed_artists():
    the_weeknd = Artist(
        name="The Weeknd",
        bio="Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is among the world's best selling musical artists with over 75 million records sold. He is also on the list of most-streamed artists on Spotify[4] and his song 'Blinding Lights' was the most streamed song on Spotify in 2020. Tesfaye has won three Grammy Awards, five American Music Awards, nineteen Billboard Music Awards, two MTV Video Music Awards, and nine Juno Awards, and has been nominated for an Academy Award.",
        profileURL='https://www.rollingstone.com/wp-content/uploads/2020/05/10502457aW.jpg',
        headerURL='https://static1.thethingsimages.com/wordpress/wp-content/uploads/2021/01/The-Weeknd.jpg',
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
        profileURL="https://media.altpress.com/uploads/2020/05/Grimes-2020-696x398.jpg",
        headerURL="https://media.pitchfork.com/photos/5e4f16c994f6ea0009d3f2c6/2:1/w_790/grimes.jpg",
        biopictureURL="https://static.billboard.com/files/2020/03/grimes-cr-apple-music-2020-billboard-1548-1583963618-compressed.jpg"
        )
    gorgon_city = Artist(
        name="Gorgon City",
        bio="Gorgon City are an English electronic music production duo consisting of two North London producers Kye 'Foamo' Gibbon and Matt 'RackNRuin' Robson-Scott.[1] Their 2013 debut single 'Real' peaked at number 44 on the UK Singles Chart. They are also well known for their 2014 single 'Ready for Your Love', which reached number 4 on the UK Singles Chart. They are currently signed to the UK-based record label Positiva Records which is a division of Universal Music Group.",
        profileURL="https://ra.co/images/profiles/square/gorgoncity.jpg?dateUpdated=1511793788000",
        headerURL="https://townsquare.media/site/807/files/2015/03/gorgon-city.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        biopictureURL="https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2020/04/gorgon-city-.jpg"
    )
    drake = Artist(
        name="Drake",
        bio="Drake first came to prominence in the teen soap Degrassi: The Next Generation in the role of Jimmy Brooks, a wheelchair-bound character he played for seven years. After leaving the show he became one of the biggest rappers on the planet after signing a deal with Lil Wayne's label Young Money Entertainment. He is rarely out of the headlines, whether it’s for dating Rihanna or Jennifer Lopez, founding his own label, OVO Sound, or fronting the NBA’s Toronto Raptors as the team's global ambassador. It's no surprise that Jay Z labeled him as the Kobe Bryant of hip hop.",
        profileURL="https://i.iheart.com/v3/re/new_assets/5f9ad676897928aa5621e913",
        headerURL="https://media.glamour.com/photos/5a0cc731f316b51d8f0bd44a/master/pass/GettyImages-871232956.jpg",
        biopictureURL="https://i.iheart.com/v3/re/new_assets/5f9ad676897928aa5621e913"
    )
    doja_cat = Artist(
        name="Doja Cat",
        bio="Amala Ratna Zandile Dlamini (born October 21, 1995), known professionally as Doja Cat, is an American rapper, singer, and songwriter. Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager. Her song 'So High' caught the attention of Kemosabe and RCA Records, with which she signed a joint record deal at the age of 17, subsequently releasing her debut EP Purrr! in 2014. After a hiatus from commercial music and the uneventful release of her debut studio album, Amala(2018), Doja Cat earned viral success as an internet meme with her 2018 single 'Mooo!', a novelty song in which she fantasizes about being a cow. Her second studio album, Hot Pink(2019), reached the top 10 of the US Billboard 200 and spawned the single 'Say So', which topped the Billboard Hot 100 chart following the release of a remix featuring Nicki Minaj. This album was followed by Planet Her(2021), which spent three consecutive weeks at number 2 on the Billboard 200 and spawned the top 10 singles 'Kiss Me More' (featuring SZA) and 'Need to Know'.",
        profileURL="https://music.mxdwn.com/wp-content/uploads/2018/08/Doja-Cat-Press-Photo-2018.jpg",
        headerURL="https://static.billboard.com/files/2021/04/feature-doja-cat-billboard-2021-bb6-ramona-rosales-1-1500-1618944516-compressed.jpg",
        biopictureURL="https://iglives.tv/wp-content/uploads/2020/02/dojacat_feb27.jpg"
    )
    zhu = Artist(
        name="Zhu",
        bio="In the beginning, he was known only as Zhu, emerging in the 2010s surrounded by a cloud of mystery and a handful of melodic house anthems. With his distinctive vocals and hypnotic production, he established himself on the scene with early EPs The Nightday and Genesis Series, rising on the global charts with tracks such as 'Faded' and 'Working for It.' He issued his official debut full-length, 2016's Generationwhy, which topped the U.S. Dance chart. Expanding his sound in 2018, he released his sophomore work Ringos Desert. He closed the decade with a string of singles, collaborating with the likes of Sofi Tukker, the Bloody Beetroots, Tinashe, and more. In 2021, Zhu issued Dreamland 2021.",
        profileURL="https://complex-res.cloudinary.com/images/c_limit,f_auto,fl_lossy,q_auto,w_1030/mnp7gnhunzxz9wfqr6qc/zhu-intoxicate",
        headerURL="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Zhu/ZHU_16_9_1581552577.jpg?itok=fti3NYF-",
        biopictureURL="https://ca-times.brightspotcdn.com/dims4/default/820c0a8/2147483647/strip/true/crop/2048x1151+0+0/resize/840x472!/quality/90/?url=https:%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffb%2Fcf%2F8246d8d2e4ac844afac3b5bccc14%2Fla-1470339006-snap-photo"
    )


    db.session.add(the_weeknd)
    db.session.add(rufus)
    db.session.add(grimes)   
    db.session.add(gorgon_city)
    db.session.add(drake)
    db.session.add(doja_cat)
    db.session.add(zhu)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()
