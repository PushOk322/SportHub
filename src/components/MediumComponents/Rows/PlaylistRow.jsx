import React, { useState } from 'react';
import './playlist-row.scss';
import { useNavigate } from "react-router-dom";


import VideoCard from '../Cards/VideoCard';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../../data/store/currentPlaylistSlice';

const PlaylistRow = (props) => {
    const navigate = useNavigate();

    const currentPlaylist = useSelector(state => state.currentPlaylists.currentPlaylists);
    console.log("🚀 ~ file: PlaylistRow.jsx:20 ~ PlaylistRow ~ currentPlaylist:", currentPlaylist)
    const dispatch = useDispatch();

    const handleReroute = () => {
        dispatch(addCurrentPlaylist(props.playlistObj));
        console.log("🚀 ~ file: PlaylistRow.jsx:25 ~ handleReroute ~ playlistObj:",props.playlistObj)
        
        navigate("/PlaylistView")
    }



    return (
        <>
            <div className="playlist-video-row">
                {
                    props.videoObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        <>
                            <div className="playlist-row">
                                <div className="playlist-row__head">
                                    <div className="playlist-row__playlist-name">
                                        {props.playlistObj.playlist_name}
                                    </div>
                                    <div className="playlist-row__view-button" onClick={() => { handleReroute() }}>View all</div>
                                </div>
                                <div className="playlist-row__videos">
                                    {
                                        props.videoObj.slice(0, 7).map((videoData, index) => {
                                            // console.log("videoObj"+props.videoObj)
                                            // if (index>4) { return };
                                            switch (props.sort) {
                                                case "mind":
                                                    if (videoData.video_type === "mind") {
                                                        // console.log(`Rendering VideoCard ${index}`);
                                                        return (

                                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />

                                                        );
                                                    }
                                                    break;
                                                case "soul":
                                                    if (videoData.video_type === "soul") {
                                                        // console.log(`Rendering VideoCard ${index}`);
                                                        return (

                                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />

                                                        );
                                                    }
                                                    break;
                                                case "body":
                                                    if (videoData.video_type === "body") {
                                                        // console.log(`Rendering VideoCard ${index}`);
                                                        return (

                                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />

                                                        );
                                                    }
                                                    break;
                                                default:
                                                    return null; // Return nothing for other cases
                                            }
                                        })
                                    }
                                </div>
                            </div >
                        </>
                    )}
            </div>
        </>
    );
};

export default PlaylistRow;
