from app.models import db, Song, Playlist, song


# Adds a demo user, you can add other users here if you want
def seed_songs():
    Professional = Song(
        name="Professional",
        genre="R&B",
        duration=368,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391729/yt5s.com_-_01._The_Weeknd_-_Professional_HD_128_kbps_zbkaxu.mp3"
    )
    The_town = Song(
        name="The Town",
        genre="R&B",
        duration=307,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391731/yt5s.com-02._The_Weeknd_-_The_Town_HD_uf0k9v.mp4"
    )
    Adaption = Song(
        name="Adaptation",
        genre="R&B",
        duration=283,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391725/yt5s.com-03._The_Weeknd_-_Adaptation_HD_k8xbge.mp4"
    )
    Love_in_the_sky = Song(
        name="Love in the Sky",
        genre="R&B",
        duration=267,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391729/yt5s.com-04._The_Weeknd_-_Love_In_The_Sky_HD_fmi1xk.mp4"
    )
    Belong_to_the_world = Song(
        name="Belong to the World",
        genre="R&B",
        duration=307,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391727/yt5s.com-05._The_Weeknd_-_Belong_To_The_World_HD_ohysun.mp4"
    )

    Live_for = Song(
        name="Live For",
        genre="R&B",
        duration=224,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391726/yt5s.com-06._The_Weeknd_-_Live_For_feat._Drake_HD_rpcmf8.mp4"
    )
    Wanderlust = Song(
        name="Wanderlust",
        genre="R&B",
        duration=306,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391728/yt5s.com-07._The_Weeknd_-_Wanderlust_HD_alcm23.mp4"
    )
    Kiss_land = Song(
        name="Kiss Land",
        genre="R&B",
        duration=455,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391734/yt5s.com-08._The_Weeknd_-_Kiss_Land_HD_720p_hxfjep.mp4"
    )
    Pretty = Song(
        name="Pretty",
        genre="R&B",
        duration=375,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391734/yt5s.com-09._The_Weeknd_-_Pretty_HD_fprgem.mp4"
    )
    Tears_in_the_rain = Song(
        name="Tears in the Rain",
        genre="R&B",
        duration=444,
        albumId=1,
        artistId=1,
        song_link="https://res.cloudinary.com/dso59ikqw/video/upload/v1636391731/yt5s.com-10._The_Weeknd_-_Tears_In_The_Rain_HD_rpipgc.mp4"
    )
    Wanderlust_remix = Song(
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

    #Drake
    Champagne_Poetry = Song(
        name="Champagne Poetry",
        genre="hip-hop",
        duration=336,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756310/Albums/Certified%20Lover%20Boy/01_Champagne_Poetry_l6n2bs.m4a"
    )
    Papi_s_home = Song(
        name="Papi's Home",
        genre="hip-hop",
        duration=178,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756308/Albums/Certified%20Lover%20Boy/02_Papi_s_Home_qin6wl.m4a"
    )
    Girls_want_girls = Song(
        name="Girls want girls feat. Lil Baby",
        genre="hip-hop",
        duration=221,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756308/Albums/Certified%20Lover%20Boy/03_Girls_Want_Girls_feat._Lil_Baby_bumzxf.m4a"
    )
    In_the_bible = Song(
        name="In the Bible feat. Lil Durk",
        genre="hip-hop",
        duration=296,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756310/Albums/Certified%20Lover%20Boy/04_In_The_Bible_feat._Lil_Durk_GIV%C4%92ON_sjqw5a.m4a"
    )
    Love_all = Song(
        name="Love All Feat. Jay Z",
        genre="hip-hop",
        duration=228,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756307/Albums/Certified%20Lover%20Boy/05_Love_All_feat._JAY-Z_sz3wfm.m4a"
    )
    Fair_trade = Song(
        name="Champagne Poetry",
        genre="hip-hop",
        duration=291,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756309/Albums/Certified%20Lover%20Boy/06_Fair_Trade_feat._Travis_Scott_kypayn.m4a"
    )
    Way_too_sexy = Song(
        name="Way 2 Sexy feat. Future & Young Thug",
        genre="hip-hop",
        duration=257,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756309/Albums/Certified%20Lover%20Boy/07_Way_2_Sexy_feat._Future_Young_Thug_votpfb.m4a"
    )
    Tsu = Song(
        name="TSU",
        genre="hip-hop",
        duration=308,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756310/Albums/Certified%20Lover%20Boy/08_TSU_hjlel3.m4a"
    )
    N_too_deep = Song(
        name="N 2 Deep feat. Future",
        genre="hip-hop",
        duration=373,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756309/Albums/Certified%20Lover%20Boy/09_N_2_Deep_feat._Future_izhmlx.m4a"
    )
    Pipe_down = Song(
        name="Pipe Down",
        genre="hip-hop",
        duration=305,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756307/Albums/Certified%20Lover%20Boy/10_Pipe_Down_h5am4r.m4a"
    )
    Yerbas_heartbreak = Song(
        name="Champagne Poetry",
        genre="hip-hop",
        duration=133,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756306/Albums/Certified%20Lover%20Boy/11_Yebba_s_Heartbreak_1_g1govc.m4a"
    )
    Knife_Talk = Song(
        name="Knife Talk",
        genre="hip-hop",
        duration=240,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756306/Albums/Certified%20Lover%20Boy/13_Knife_Talk_feat._21_Savage_Project_Pat_ndspcy.m4a"
    )
    No_friends = Song(
        name="No Friends In The Industry",
        genre="hip-hop",
        duration=240,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756307/Albums/Certified%20Lover%20Boy/12_No_Friends_In_The_Industry_mvvt8p.m4a"
    )
    Seven_am = Song(
        name="Seven AM On Bridle Path",
        genre="hip-hop",
        duration=239,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756308/Albums/Certified%20Lover%20Boy/14_7am_On_Bridle_Path_z3lj6r.m4a"
    )
    Race_my_mind = Song(
        name="Race My Mind",
        genre="hip-hop",
        duration=259,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756306/Albums/Certified%20Lover%20Boy/17_Get_Along_Better_feat._Ty_Dolla_ign_yqeexz.m4a"
    )
    Fountains = Song(
        name="Fountains feat. Tems",
        genre="hip-hop",
        duration=192,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756308/Albums/Certified%20Lover%20Boy/15_Race_My_Mind_rzighh.m4a"
    )
    Get_along_better = Song(
        name="Get Along Better",
        genre="hip-hop",
        duration=219,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756306/Albums/Certified%20Lover%20Boy/13_Knife_Talk_feat._21_Savage_Project_Pat_ndspcy.m4a"
    )
    You_only_live_twice = Song(
        name="You Only Live Twice feat. Lil Wayne & Rick Ross",
        genre="hip-hop",
        duration=213,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756306/Albums/Certified%20Lover%20Boy/18_You_Only_Live_Twice_feat._Lil_Wayne_Rick_Ross_znpby3.m4a"
    )
    Imy = Song(
        name="IMY feat. Kid Cudi",
        genre="hip-hop",
        duration=252,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636756308/Albums/Certified%20Lover%20Boy/19_IMY2_feat._Kid_Cudi_jcrbpc.m4a"
    )
    Fans = Song(
        name="F*****g Fans",
        genre="hip-hop",
        duration=245,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636755921/Albums/Certified%20Lover%20Boy/20_F_____g_Fans_diueee.m4a"
    )
    The_remorse = Song(
        name="The Remorse",
        genre="hip-hop",
        duration=251,
        albumId=5,
        artistId=5,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636755921/Albums/Certified%20Lover%20Boy/21_The_Remorse_hml3xz.m4a"
    )

    #Doja Cat

    Woman = Song(
        name="Woman",
        genre="R&B",
        duration=232,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/01_Woman_kfjdgu.m4a"
    )
    naked = Song(
        name="Naked Massage",
        genre="R&B",
        duration=223,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/02_Naked_masgwr.m4a"
    )
    payday = Song(
        name="Payday feat. Young Thug",
        genre="R&B",
        duration=212,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/03_Payday_feat._Young_Thug_ni3hiv.m4a"
    )
    Get_into_it = Song(
        name="Get into it",
        genre="R&B",
        duration=218,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/04_Get_Into_It_Yuh_pcxrhw.m4a"
    )
    Need_To_Know = Song(
        name="Need to Know",
        genre="R&B",
        duration=310,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/05_Need_To_Know_wupayn.m4a"
    )
    I_Don_t_Do_Drugs = Song(
        name="I don't do drugs feat. Ariana Grande",
        genre="R&B",
        duration=188,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/06_I_Don_t_Do_Drugs_feat._Ariana_Grande_ukwb56.m4a"
    )
    Love_To_Dream = Song(
        name="I don't do drugs feat. Ariana Grande",
        genre="R&B",
        duration=186,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397275/Albums/Planet%20Her/07_Love_To_Dream_boetne.m4a"
    )
    You_Right = Song(
        name="You Right",
        genre="R&B",
        duration=210,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397275/Albums/Planet%20Her/08_You_Right_zkaxcj.m4a"
    )
    Been_Like_This = Song(
        name="Been Like This",
        genre="R&B",
        duration=177,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397274/Albums/Planet%20Her/09_Been_Like_This_evt8ew.m4a"
    )
    Options = Song(
        name="Options",
        genre="R&B",
        duration=159,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/10_Options_feat._JID_l4dwc5.m4a"
    )
    Imagine = Song(
        name="Imagine",
        genre="R&B",
        duration= 148,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397273/Albums/Planet%20Her/11_Imagine_ojjqlz.m4a"
    )
    Alone = Song(
        name="Alone",
        genre="R&B",
        duration=228,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397276/Albums/Planet%20Her/12_Alone_q495cr.m4a"
    )
    Alone = Song(
        name="Alone",
        genre="R&B",
        duration=228,
        albumId=6,
        artistId=6,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397276/Albums/Planet%20Her/12_Alone_q495cr.m4a"
    )

    #Zhu

    Lost_it = Song(
        name="Lost It",
        genre="electronic",
        duration=178,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518369/Albums/Dreamland/01_Lost_It_atgvqo.m4a"
    )
    Distant_lights = Song(
        name="Distant Lights",
        genre="electronic",
        duration=242,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518369/Albums/Dreamland/02_Distant_Lights_krrti0.m4a"
    )
    Blue_dream = Song(
        name="Blue Dream",
        genre="electronic",
        duration=126,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518368/Albums/Dreamland/03_Blue_Dream_zxbyzl.m4a"
    )
    How_does_it_feel = Song(
        name="How Does It Feel",
        genre="electronic",
        duration=186,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518369/Albums/Dreamland/04_How_Does_It_Feel_feat._Channel_Tres_bz4l5n.m4a"
    )
    Sky_is_crying = Song(
        name="Sky Is Crying",
        genre="electronic",
        duration=264,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518371/Albums/Dreamland/05_Sky_Is_Crying_r5kugc.m4a"
    )
    Sweet_like_honey = Song(
        name="Sweet Like Honey",
        genre="electronic",
        duration=243,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518371/Albums/Dreamland/06_Sweet_Like_Honey_irmixm.m4a"
    )
    Yours = Song(
        name="Yours",
        genre="electronic",
        duration=257,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518371/Albums/Dreamland/07_Yours_knwy3p.m4a"
    )
    Soco = Song(
        name="SOCO",
        genre="electronic",
        duration=214,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518369/Albums/Dreamland/08_SOCO_x8klyu.m4a"
    )
    Only = Song(
        name="ONLY",
        genre="electronic",
        duration=230,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518369/Albums/Dreamland/09_ONLY_rt6vy3.m4a"
    )
    Zhudio = Song(
        name="Lost It",
        genre="electronic",
        duration=228,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518370/Albums/Dreamland/10_Zhudio54_wr3ksy.m4a"
    )
    Good_for_u = Song(
        name="Good 4 U feat. Kota The Friend",
        genre="electronic",
        duration=260,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518371/Albums/Dreamland/11_Good4U_feat._Kota_the_Friend_x5cdxk.m4a"
    )
    I_Need_That = Song(
        name="I Need That",
        genre="electronic",
        duration=239,
        albumId=7,
        artistId=7,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636518371/Albums/Dreamland/12_I_Need_That_t4mvbm.m4a"
    )
    #Nora En Pure
    Homebound = Song(
        name="Homebound",
        genre="electronic",
        duration=210,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772246/Albums/Homebound/01_Homebound_rzmzx6.m4a"
    )
    Dry_sobbing = Song(
        name="Dry Sobbing",
        genre="electronic",
        duration=224,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772246/Albums/Homebound/02_Dry_Sobbing_nexvfd.m4a"
    )
    Epiphany = Song(
        name="Epiphany",
        genre="electronic",
        duration=211,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772246/Albums/Homebound/03_Epiphany_ahphss.m4a"
    )
    Homebound_club_mix = Song(
        name="Dry Sobbing",
        genre="electronic",
        duration=465,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772247/Albums/Homebound/04_Homebound_Club_Mix_qtetpo.m4a"
    )
    Dry_sobbing_club_mix = Song(
        name="Dry Sobbing",
        genre="electronic",
        duration=224,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772246/Albums/Homebound/02_Dry_Sobbing_nexvfd.m4a"
    )
    Epiphany_club_mix = Song(
        name="Epiphany Club Mix",
        genre="electronic",
        duration=224,
        albumId=8,
        artistId=8,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636772246/Albums/Homebound/06_Epiphany_Club_Mix_ylv6ee.m4a"
    )
    #Mos Def
    Astronomy = Song(
        name="Astronomy",
        genre="hip-hop",
        duration=206,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495441/Albums/BlackStar/01_Astronomy_8th_Light_nslsu2.mp3"
    )
    Definition = Song(
        name="Definition",
        genre="hip-hop",
        duration=208,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495441/Albums/BlackStar/02_Definition_c602ak.mp3"
    )
    Re_definition = Song(
        name="Re-definition",
        genre="hip-hop",
        duration=184,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/03_RE__Definition_gzscky.mp3"
    )
    Childrens_story = Song(
        name="Children's Story",
        genre="hip-hop",
        duration=213,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/04_Children_s_Story_iqxt9t.mp3"
    )
    Brown_skin = Song(
        name="Brown Skin Lady",
        genre="hip-hop",
        duration=348,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495443/Albums/BlackStar/05_Brown_Skin_Lady_orgr3p.mp3"
    )
    B_boys = Song(
        name="B boys will b boys",
        genre="hip-hop",
        duration=158,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495441/Albums/BlackStar/06_B_Boys_Will_B_Boys_m2sjkd.mp3"
    )
    kos = Song(
        name="K.O.S. Determination",
        genre="hip-hop",
        duration=311,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/07_K.O.S._Determination_dhaaax.mp3"
    )
    
    Hater_players = Song(
        name="Hater Players",
        genre="hip-hop",
        duration=250,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/08_Hater_Players_lagtl0.mp3"
    )
    Yo_yeah = Song(
        name="Yo Yeah",
        genre="hip-hop",
        duration=72,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495441/Albums/BlackStar/09_Yo_Yeah_lnkrbm.mp3"
    )
    Respiration = Song(
        name="Respiration",
        genre="hip-hop",
        duration=345,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/10_Respiration_togrmx.mp3"
    )
    Thieves_In_Night = Song(
        name="Theives In The Night",
        genre="hip-hop",
        duration=318,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495442/Albums/BlackStar/11_Thieves_in_the_Night_bfjy01.mp3"
    )
    Twice_in_lifetime = Song(
        name="Twice Inna Lifetime",
        genre="hip-hop",
        duration=338,
        albumId=9,
        artistId=9,
        song_link="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636495443/Albums/BlackStar/12_Twice_Inna_Lifetime_l9eidt.mp3"
    )
    #The Weeknd, individual songs
    



    db.session.add(Professional)
    db.session.add(The_town)
    db.session.add(Adaption)
    db.session.add(Love_in_the_sky)
    db.session.add(Belong_to_the_world)
    db.session.add(Live_for)
    db.session.add(Wanderlust)
    db.session.add(Kiss_land)
    db.session.add(Pretty)
    db.session.add(Tears_in_the_rain)
    db.session.add(Wanderlust_remix)
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
    db.session.add(I_Don_t_Do_Drugs)
    db.session.add(Love_To_Dream)
    db.session.add(You_Right)
    db.session.add(Been_Like_This)
    db.session.add(Options)
    db.session.add(Imagine)
    db.session.add(Alone)
    db.session.add(Professional)
    db.session.add(The_town)
    db.session.add(Adaption)
    db.session.add(Love_in_the_sky)
    db.session.add(Belong_to_the_world)
    db.session.add(Live_for)
    db.session.add(Wanderlust)
    db.session.add(Kiss_land)
    db.session.add(Pretty)
    db.session.add(Tears_in_the_rain)
    db.session.add(Wanderlust_remix)
    
    db.session.add(Champagne_Poetry)
    db.session.add(Papi_s_home)
    db.session.add(Girls_want_girls)
    db.session.add(In_the_bible)
    db.session.add(Love_all)
    db.session.add(Fair_trade)
    db.session.add(Way_too_sexy)
    db.session.add(Tsu)
    db.session.add(N_too_deep)
    db.session.add(Pipe_down)
    db.session.add(Yerbas_heartbreak)
    db.session.add(No_friends)
    db.session.add(Knife_Talk)
    db.session.add(Seven_am)
    db.session.add(Race_my_mind)
    db.session.add(Fountains)
    db.session.add(Get_along_better)
    db.session.add(You_only_live_twice)
    db.session.add(Imy)
    db.session.add(Fans)
    db.session.add(The_remorse)

    db.session.add(Lost_it)
    db.session.add(Distant_lights)
    db.session.add(Blue_dream)
    db.session.add(How_does_it_feel)
    db.session.add(Sky_is_crying)
    db.session.add(Sweet_like_honey)
    db.session.add(Yours)
    db.session.add(Soco)
    db.session.add(Only)
    db.session.add(Zhudio)
    db.session.add(Good_for_u)
    db.session.add(I_Need_That)

    db.session.add(Homebound)
    db.session.add(Dry_sobbing)
    db.session.add(Epiphany)
    db.session.add(Homebound_club_mix)
    db.session.add(Dry_sobbing_club_mix)
    db.session.add(Epiphany_club_mix)

    db.session.add(Astronomy)
    db.session.add(Definition)
    db.session.add(Re_definition)
    db.session.add(Childrens_story)
    db.session.add(Brown_skin)
    db.session.add(B_boys)
    db.session.add(kos)
    db.session.add(Hater_players)
    db.session.add(Yo_yeah)
    db.session.add(Respiration)
    db.session.add(Thieves_In_Night)
    db.session.add(Twice_in_lifetime)

    


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
