// import AudioPlayer from "react-modular-audio-player";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from "react-redux";
import "./musicPlayer.css";
import { useState } from 'react';

const Player = ({queue}) => {
  const artists = useSelector((state) => state.artist)
  const isPlaying = useSelector((state) => state.player)
  const [currentSong, setCurrentSong] = useState(0);

  
  if(!queue.length) return null
  let playlist = [];

    queue.map((song) => {
    const artist = Object.values(artists).find((artistId) => +artistId === +song.artistId)
    const nextSong = {
      src: song.song_link,
      title: song.name,
      artist}

    playlist.push(nextSong)
  })
  
  
  return (
    <>
        <AudioPlayer
        autoPlay={isPlaying}
        src={playlist[currentSong].src}
        autoPlayAfterSrcChange={true}
        onPlay={e => console.log("onPlay")}
        onEnded={() => setCurrentSong(i => i + 1)}
        showSkipControls={true}
        onClickNext={() => setCurrentSong(i => i + 1)}
        // other props here
      />
    </>
  );
} 

export default Player;
