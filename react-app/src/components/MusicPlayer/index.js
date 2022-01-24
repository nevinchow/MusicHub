// import AudioPlayer from "react-modular-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import "./musicPlayer.css";
import { useState } from "react";
import { stopSong } from "../../store/musicPlayer";
import { useDispatch } from "react-redux";

const Player = ({ queue }) => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const song = useSelector((state) => state.song);
  let isPlaying = useSelector((state) => state.player);
  const [currentSong, setCurrentSong] = useState(0);
  let trackNumber = currentSong + 1;

  if (!queue.length) return null;
  let playlist = [];
  queue.map((song) => {
    const artist = Object.keys(artists).find(
      (artistId) => +artistId === song.artistId
    );
    const nextSong = {
      src: song.song_link,
      title: song.name,
      artist: artists[artist],
    };

    playlist.push(nextSong);
  });

  return (
    <>
      <footer className="player-footer">
        <div className="player-container">
          <div className="song-info">
            <p className="song-info-details">#{trackNumber}</p>
            <p className="song-info-details">{playlist[currentSong].title}</p>
            <p className="song-info-details">
              {playlist[currentSong].artist.name}
            </p>
          </div>
          <AudioPlayer
            className="audioPlayer"
            autoPlay={true}
            src={playlist[currentSong].src}
            // preload={playlist}
            autoPlayAfterSrcChange={true}
            onPlay={(e) => console.log("onPlay")}
            // onEnded={() => setCurrentSong((i) => i + 1 )}
            // showSkipControls={true}
            onClick={() => setCurrentSong(currentSong)}
            // onClickNext={() => setCurrentSong((i) => i + 1)}

            onPause={() => {
              dispatch(stopSong());
            }}
            onEnded={() => {
              if (!playlist[currentSong + 1]) {
                setCurrentSong(0);
              } else {
                setCurrentSong(currentSong + 1);
              }
            }}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={() => {
              if (!playlist[currentSong + 1]) {
                setCurrentSong(0);
              } else {
                setCurrentSong(currentSong + 1);
              }
            }}

            // other props here
          />
        </div>
      </footer>
    </>
  );
};

export default Player;
