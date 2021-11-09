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
    Tell_Me_It_s_True = Song(
        name="Tell me it's True",
        genre="Electronic",
        duration=293,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397041/Albums/Olympia/01_Tell_Me_It_s_True_p8spd7.m4a"
    )
    Oxygen = Song(
        name="Oxygen",
        genre="Electronic",
        duration=232,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397040/Albums/Olympia/02_Oxygen_yvuf7c.m4a"
    )
    You_Done_Enough = Song(
        name="You've Done Enough",
        genre="Electronic",
        duration=213,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397040/Albums/Olympia/03_You_ve_Done_Enough_g6dlgr.m4a"
    )
    Dreams = Song(
        name="Dreams",
        genre="Electronic",
        duration=293,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397037/Albums/Olympia/04_Dreams_ovb32b.m4a"
    )
    Body_Language = Song(
        name="Body Language",
        genre="Electronic",
        duration=224,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397037/Albums/Olympia/05_Body_Language_oncogm.m4a"
    )
    When_You_re_Gone = Song(
        name="When you're gone",
        genre="Electronic",
        duration=236,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397040/Albums/Olympia/06_When_You_re_Gone_fk7fdo.m4a"
    )
    House_Arrest = Song(
        name="Tell me it's True",
        genre="Electronic",
        duration=216,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397038/Albums/Olympia/07_House_Arrest_ji53yy.m4a"
    )
    Never_Let_Me_Down = Song(
        name="Tell me it's True",
        genre="Electronic",
        duration=285,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397039/Albums/Olympia/08_Never_Let_Me_Down_gbzade.m4a"
    )
    Sweet_Temptation = Song(
        name="Sweet Temptation",
        genre="Electronic",
        duration=220,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397039/Albums/Olympia/09_Sweet_Temptation_uo7qno.m4a"
    )
    Nobody = Song(
        name="Nobdoy",
        genre="Electronic",
        duration=199,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397037/Albums/Olympia/10_Nobody_kpjba7.m4a"
    )
    Lost_Feelings = Song(
        name="Lost Feelings",
        genre="Electronic",
        duration=257,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397041/Albums/Olympia/11_Lost_Feelings_js2hmr.m4a"
    )
    Tears = Song(
        name="Tears",
        genre="Electronic",
        duration=289,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397041/Albums/Olympia/12_Tears_audgyu.m4a"
    )
    Waiting_For_The_Right_Time = Song(
        name="Waiting for the right time",
        genre="Electronic",
        duration=299,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397042/Albums/Olympia/13_Waiting_For_The_Right_Time_jcgaru.m4a"
    )
    Ecstasy = Song(
        name="Ecstasy",
        genre="Electronic",
        duration=255,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397040/Albums/Olympia/14_Ecstasy_twdyef.m4a"
    )
    Foolproof = Song(
        name="Foolproof",
        genre="Electronic",
        duration=267,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397037/Albums/Olympia/15_Foolproof_ibgbi9.m4a"
    )
    Burning = Song(
        name="Burning feat. Evan Gia",
        genre="Electronic",
        duration=268,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397037/Albums/Olympia/16_Burning_n0sogb.m4a"
    )
    Thought_s_of_you = Song(
        name="Thought's of you",
        genre="Electronic",
        duration=240,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397039/Albums/Olympia/17_Thoughts_Of_You_meunow.m4a"
    )
    Freedom = Song(
        name="Freedom",
        genre="Electronic",
        duration=222,
        albumId=4,
        artistId=4,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397038/Albums/Olympia/18_Freedom_pofe0c.m4a"
    )
    Woman = Song(
        name="Woman",
        genre="R&B",
        duration=232,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/01_Woman_kfjdgu.m4a"
    )
    naked = Song(
        name="Naked Massage",
        genre="R&B",
        duration=223,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/02_Naked_masgwr.m4a"
    )
    payday = Song(
        name="Payday feat. Young Thug",
        genre="R&B",
        duration=212,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/03_Payday_feat._Young_Thug_ni3hiv.m4a"
    )
    Get_into_it = Song(
        name="Get into it",
        genre="R&B",
        duration=218,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/04_Get_Into_It_Yuh_pcxrhw.m4a"
    )
    Need_To_Know = Song(
        name="Need to Know",
        genre="R&B",
        duration=310,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/05_Need_To_Know_wupayn.m4a"
    )
    I_Don_t_Do_Drugs = Song(
        name="I don't do drugs feat. Ariana Grande",
        genre="R&B",
        duration=188,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/06_I_Don_t_Do_Drugs_feat._Ariana_Grande_ukwb56.m4a"
    )
    Love_To_Dream = Song(
        name="I don't do drugs feat. Ariana Grande",
        genre="R&B",
        duration=186,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397275/Albums/Planet%20Her/07_Love_To_Dream_boetne.m4a"
    )
    You_Right = Song(
        name="You Right",
        genre="R&B",
        duration=210,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397275/Albums/Planet%20Her/08_You_Right_zkaxcj.m4a"
    )
    Been_Like_This = Song(
        name="Been Like This",
        genre="R&B",
        duration=177,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/09_Been_Like_This_evt8ew.m4a"
    )
    Options = Song(
        name="Options",
        genre="R&B",
        duration=159,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/10_Options_feat._JID_l4dwc5.m4a"
    )
    Imagine = Song(
        name="Imagine",
        genre="R&B",
        duration= 148,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/11_Imagine_ojjqlz.m4a"
    )
    Alone = Song(
        name="Alone",
        genre="R&B",
        duration=228,
        albumId="5",
        artistId="5",
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397276/Albums/Planet%20Her/12_Alone_q495cr.m4a"
    )

    
    db.session.add(I_Don_t_Do_Drugs)
    db.session.add(Love_To_Dream)
    db.session.add(You_Right)
    db.session.add(Been_Like_This)
    db.session.add(Options)
    db.session.add(Imagine)
    db.session.add(Alone)

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
    db.session.add(So_Heavy_I_Fell)
    db.session.add(Dark_seid)
    db.session.add(Delete_forever)
    db.session.add(Violence)
    db.session.add(Song_4AEM)
    db.session.add(My_Name_Is_Dark)
    db.session.add(Before_the_Fever)
    db.session.add(Miss_Me)
    db.session.add(Idoru)
    db.session.add(We_Appreciate_Power)
    db.session.add(Tell_Me_It_s_True)
    db.session.add(Oxygen)
    db.session.add(You_Done_Enough)
    db.session.add(Dreams)
    db.session.add(Body_Language)
    db.session.add(When_You_re_Gone)
    db.session.add(House_Arrest)
    db.session.add(Never_Let_Me_Down)
    db.session.add(Sweet_Temptation)
    db.session.add(Nobody)
    db.session.add(Lost_Feelings)
    db.session.add(Tears)
    db.session.add(Waiting_For_The_Right_Time)
    db.session.add(Ecstasy)
    db.session.add(Foolproof)
    db.session.add(Burning)
    db.session.add(Thought_s_of_you)
    db.session.add(Freedom)
    db.session.add(Woman)
    db.session.add(naked)
    db.session.add(payday)
    db.session.add(Get_into_it)
    db.session.add(Need_To_Know)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
