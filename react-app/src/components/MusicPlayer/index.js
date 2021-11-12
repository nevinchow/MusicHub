import AudioPlayer from "react-modular-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import "./musicPlayer.css";

const Player = () => {
  const queue = useSelector((state) => state.musicQueue);
  const artists = useSelector((state) => state.artist)
  let playlist = [{src: "none.m4a",
     title: "Add Songs To YOur Queue",
     artist: ""}]

 if(queue) {
    queue.map((song) => {
    const artist = Object.values(artists).find((artistId) => +artistId === +song.artistId)
    const nextSong = {
      src: song.song_link,
      title: song.name,
      artist}

    playlist.push(nextSong)
  })
  } else {
    playlist.push({src: "https://res.cloudinary.com/dexkxkrfp/video/upload/v1636397275/Albums/Planet%20Her/07_Love_To_Dream_boetne.m4a",
     title: "I don't do drugs feat. Ariana Grande",
     artist: "Drake"})
  }
  
  return (
    <>

      <AudioPlayer
        className="audio-player"
        audioFiles={playlist}
        // other props here
      />
    </>
  );
} 

export default Player;
