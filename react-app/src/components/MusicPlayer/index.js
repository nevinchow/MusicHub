import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";

// import styled from "styled-components";
import "./musicPlayer.css";

  

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => {
  const queue = useSelector((state) => state.musicQueue);
  return (
    <>
      {console.log(queue, "THIS IS A TEST")}

      <AudioPlayer
        className="audio-player"
        autoPlayAfterSrcChange={true}
        src="https://res.cloudinary.com/dexkxkrfp/video/upload/v1636396215/Albums/Surrender/05_Alive_mbqvdv.m4a"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </>
  );
} 


  //  autoPlayAfterSrcChange={true}
  //       src={queue[0].song_link}

// const playerCSS = styled.div`
// `;

export default Player;
