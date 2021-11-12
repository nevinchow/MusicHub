import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {useSelector} from 'react-redux';

// import styled from "styled-components";
import './musicPlayer.css';

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS



const Player = ({queue}) => (
  <>
 {console.log(queue, 'THIS IS A TEST')}
  
  <AudioPlayer className="audio-player"
   Pause src='https://res.cloudinary.com/dso59ikqw/video/upload/v1636391731/yt5s.com-02._The_Weeknd_-_The_Town_HD_uf0k9v.mp4'
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
  </>
);

// const playerCSS = styled.div`
// `; 

export default Player;