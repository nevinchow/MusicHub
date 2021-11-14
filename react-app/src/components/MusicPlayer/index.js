// import AudioPlayer from "react-modular-audio-player";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from "react-redux";
import "./musicPlayer.css";
import { useState } from 'react';

const Player = ({queue}) => {
  const artists = useSelector((state) => state.artist)
  const song = useSelector((state) => state.song)
  const isPlaying = useSelector((state) => state.player)
  const [currentSong, setCurrentSong] = useState(0);
  let trackNumber = currentSong + 1

  
  if(!queue.length) return null
  let playlist = [];
    queue.map((song) => {
    const artist = Object.keys(artists).find((artistId) => +artistId === song.artistId)
    const nextSong = {
      src: song.song_link,
      title: song.name,
      artist: artists[artist]}

    playlist.push(nextSong)
  })
  console.log("playlist length", playlist.length, "current song", currentSong)
  
  
  return (
    <>
      <footer className="player-footer">
        <div className="player-container">
          <div className='song-info'>
            <p className="song-info-details">#{trackNumber}</p>
            <p className="song-info-details">{playlist[currentSong].title}</p>
            <p className="song-info-details">{playlist[currentSong].artist.name}</p>
          </div>
          <AudioPlayer className="audioPlayer"
            autoPlay={isPlaying}
            src={playlist[currentSong].src}
            autoPlayAfterSrcChange={true}
            onPlay={(e) => console.log("onPlay")}
            onEnded={() => {
              if(!playlist[currentSong + 1]) {
                console.log('conditional')
                setCurrentSong(-1)
              }
              setCurrentSong((i) => i + 1)}}
            showSkipControls={true}
            onClickNext={() => {
              if(!playlist[currentSong + 1]) {
                console.log('conditional')
                setCurrentSong(-1)
              }
              setCurrentSong((i) => i + 1)}}
            // other props here
          />
        </div>
      </footer>
    </>
  );
} 

export default Player;
