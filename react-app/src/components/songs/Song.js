import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOneSong, addNextSong } from "../../store/musicQueue";

const Song = ({songId, playlistId}) => {
    const song = useSelector((state) => state.songs[songId]);
    // const userPlaylists = useSelector(state) => state.userPlaylists;
    


}