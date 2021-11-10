import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    autoPlay
    src="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636478427/Albums/Miss%20Anthropocene/04_Violence_d7zgx8.m4a"
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
);

export default Player;