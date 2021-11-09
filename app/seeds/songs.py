from app.models import db, Song, Playlist, song


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
    Always = Song(
        name="Always",
        genre="Electronic",
        duration=436.8,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396217/Albums/Surrender/11_Always_a891xo.m4a"
    )
    Surrender = Song(
        name="Surrender feat. Curtis Harding",
        genre="Electronic",
        duration=321.6,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396216/Albums/Surrender/09_Surrender_feat._Curtis_Harding_mhfvt5.m4a"
    )
    Next_to_Me = Song(
        name="Next to Me",
        genre="Electronic",
        duration=308.4,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396216/Albums/Surrender/01_Next_to_Me_jauhv6.m4a"
    )
    See_You_Again = Song(
        name="See You Again",
        genre="Electronic",
        duration=312,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396216/Albums/Surrender/03_See_You_Again_igdfev.m4a"
    )
 
    Alive = Song(
        name="Alive",
        genre="Electronic",
        duration=320.4,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396215/Albums/Surrender/05_Alive_mbqvdv.m4a"
    )
    Devotion = Song(
        name="Devotion",
        genre="Electronic",
        duration=311.4,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396214/Albums/Surrender/10_Devotion_y2fw3x.m4a"
    )
    Make_it_happen = Song(
        name="Make it happen",
        genre="Electronic",
        duration=307.2,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396214/Albums/Surrender/02_Make_It_Happen_1_ktawfh.m4a"
    )
    On_my_knees = Song(
        name="On my knees",
        genre="Electronic",
        duration=307.2,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396214/Albums/Surrender/07_On_My_Knees_1_ltxrbs.m4a"
    )
    I_Don_t_Wanna_Leave = Song(
        name="Make it happen",
        genre="Electronic",
        duration=257.4,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396214/Albums/Surrender/04_I_Don_t_Wanna_Leave_jqlyzx.m4a"
    )
    Wildfire = Song(
        name="Wildfire",
        genre="Electronic",
        duration=246,
        albumId=2,
        artistId=2,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396214/Albums/Surrender/08_Wildfire_guakfh.m4a"
    )
    Alive_Reprise = Song(
          name="Make it happen",
          genre="Electronic",
          duration=39,
          albumId=2,
          artistId=2,
          song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396213/Albums/Surrender/06_Alive_Reprise_fhhd5u.m4a"
    )
    So_Heavy_I_Fell = Song(
        name="So Heavy I Fell Through The Earth (Anna Remix)",
        genre="Electronic",
        duration=405,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397437/Albums/Miss%20Anthropocene/01_So_Heavy_I_Fell_Through_the_Earth_ANNA_Remix_unuhjf.m4a"
    )
    Dark_seid = Song(
        name="Dark Seid (Richie Hawtin Remix)",
        genre="Electronic",
        duration=271,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/05_4%C3%86m_gfo2kf.m4a"
    )
    Delete_forever = Song(
        name="Delete Forever (Channel Tres Remix)",
        genre="Electronic",
        duration=301,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/03_Delete_Forever_Channel_Tres_Remix_myrdhu.m4a"
    )
    Violence = Song(
        name="Dark Side (Richie Hawtin Remix)",
        genre="Electronic",
        duration=637,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636478427/Albums/Miss%20Anthropocene/04_Violence_d7zgx8.m4a"
    )
    Song_4AEM = Song(
        name="4Æm",
        genre="Electronic",
        duration=271,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/05_4%C3%86m_gfo2kf.m4a"
    )
    My_Name_Is_Dark = Song(
        name="My Name is Dark (Julien Bracht remix)",
        genre="Electronic",
        duration=623,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397441/Albums/Miss%20Anthropocene/06_My_Name_is_Dark_Julien_Bracht_Remix_e9b1di.m4a"
    )
    Miss_Me = Song(
        name="You'll Miss Me When I'm Not Around remix",
        genre="Electronic",
        duration=311,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/07_You_ll_miss_me_when_I_m_not_around_Things_You_Say_Remix_r9sbwk.m4a"
    )
    Before_the_Fever = Song(
        name="Before the Fever remix",
        genre="Electronic",
        duration=217,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/08_Before_the_Fever_swin1s.m4a"
    )
    Idoru = Song(
        name="Idoru (Modeselektor Remix)",
        genre="Electronic",
        duration=365,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397435/Albums/Miss%20Anthropocene/09_Idoru_Modeselektor_Remix_qgnuss.m4a"
    )
    We_Appreciate_Power = Song(
        name="We Appreciate Power feat. BloodPop",
        genre="Electronic",
        duration=397,
        albumId=3,
        artistId=3,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397436/Albums/Miss%20Anthropocene/10_We_Appreciate_Power_feat._BloodPop_HANA%E8%8F%8A%E6%A2%93%E5%96%AC_BloodPop_Remix_aexm8c.m4a"
    )

    db.session.add(We_Appreciate_Power)
    db.session.add(Idoru)
    db.session.add(Miss_Me)
    db.session.add(Before_the_Fever)
    db.session.add(My_Name_Is_Dark)
    db.session.add(Song_4AEM)
    db.session.add(Violence)
    db.session.add(Delete_forever)
    db.session.add(Dark_seid)
    db.session.add(So_Heavy_I_Fell)
    db.session.add(Always)
    db.session.add(Surrender)
    db.session.add(Next_to_Me)
    db.session.add(See_You_Again)
    db.session.add(Alive)
    db.session.add(Devotion)
    db.session.add(Make_it_happen)
    db.session.add(On_my_knees)
    db.session.add(I_Don_t_Wanna_Leave)
    db.session.add(Wildfire)
    db.session.add(Alive_Reprise)
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
