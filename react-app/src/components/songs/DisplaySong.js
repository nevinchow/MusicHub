import { useParams } from "react-router"
import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux"
import { addSongToPlaylist } from "../../store/playlists_songs";
import { useSelector } from "react-redux";


function DisplaySong({songId}) {

console.log(songId)

        
    return (
        <> 
            <td>{songId}</td>
        </>
    )
}


export default DisplaySong

{/* 
                //turn duration to string
                trackNumber++;
                const minutes = Math.floor(song.duration / 60);
                const seconds = song.duration % 60;
                let newSeconds;
                if (seconds < 10) {
                  newSeconds = `0${seconds}`;
                } else {
                  newSeconds = seconds;
                }
                let trackTime = ``;
                if (minutes === 0) {
                  trackTime = `${minutes}: ${newSeconds}`;
                } else {
                  trackTime = `${minutes} : ${newSeconds}`;
                }
                //get album for song
                const thisAlbum = Object.keys(albums).find(
                  (oneAlbum) => song.albumId === +oneAlbum
                );

                //get artist for song
                const thisArtist = Object.keys(artists).find(
                  (oneArtist) => song.artistId === +oneArtist
                );

                return (
                  <tr
                    className="table-row"
                    // key={song.id}
                    onMouseEnter={showPlayButton}
                    onMouseLeave={hidePlayButton}
                  >
                    {play ? (
                      <td className="cell">
                        <Song songId={song.id} />
                      </td>
                    ) : (
                      <></>
                    )}
                    <td className="cell track">{trackNumber}</td>
                    <td className="cell">
                      <img
                        className="album-thumbnail"
                        src={albums[thisAlbum].imageURL}
                        alt={albums[thisAlbum].name}
                      ></img>
                    </td>
                    <td className="cell">
                      <div className="song-name-row">
                        <p>{song.name}</p>
                        <Link
                          className="song-info-links"
                          to={`/artist/${artists[thisArtist].id}`}
                        >
                          {artists[thisArtist].name}
                        </Link>
                      </div>
                    </td>
                    <td className="cell">
                      <Link
                        className="song-info-links"
                        to={`/albums/${albums[thisAlbum].id}`}
                      >
                        {albums[thisAlbum].title}
                      </Link>
                    </td>
                    <td className="cell">{trackTime}</td>
                    <td><button id={song.id} onClick={openSettings}>+</button> 
                    {settings ? <AddToPlaylist songId={songId}/> : <></>}
                    </td>
                
                  </tr>
                );
              })}
            </tbody> */}