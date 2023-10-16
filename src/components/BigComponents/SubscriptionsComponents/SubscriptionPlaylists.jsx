import React, { useState } from 'react';
import './subscription-components.scss';
import { useNavigate } from "react-router-dom";

import VideoCard from '../../MediumComponents/Cards/VideoCard';
import PlaylistRow from '../../MediumComponents/Rows/PlaylistRow';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../../data/store/currentPlaylistSlice';

const SubscriptionPlaylists = (props) => {
    const navigate = useNavigate();

    const [sort, setSort] = useState("mind");

    console.log("playlistObj", props.playlistObj)
    return (
        <>

            <div className="subscription-playlists">
                <div className="sort">
                    <div className={sort === "mind" ? "sort__button active" : " sort__button"} onClick={() => { setSort("mind") }}>Mind</div>
                    <div className={sort === "body" ? "sort__button active" : " sort__button"} onClick={() => { setSort("body") }}>Body</div>
                    <div className={sort === "soul" ? "sort__button active" : " sort__button"} onClick={() => { setSort("soul") }}>Soul</div>
                </div>

                <div className="playlists-container">
                    {props.playlistObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        props.playlistObj.map((playlistData, index) => {
                            const modifiedPlaylistData = {
                                ...playlistData,

                                playlist_name: playlistData.playlist_name,
                                playlist_videos: playlistData.videos,

                            };

                            let modifiedVideoData = null; // Initialize as null
                            
                            if (playlistData.videos) { // Check if playlistData.videos is defined
                                // Create a modifiedVideoData object that combines all videos from playlistData.videos
                                modifiedVideoData = playlistData.videos.map(video => ({
                                    ...video,
                                    video_url: video.video_file[0].url,
                                    video_preview: video.video_preview.url,
                                    video_name: video.video_name,
                                    createdAt: video.createdAt,
                                    video_length: video.video_length,
                                }));
                            }
                            console.log("🚀 ~ file: SubscriptionPlaylists.jsx:46 ~ props.playlistObj.map ~ modifiedVideoData:", modifiedVideoData)


                            switch (sort) {
                                case "mind":
                                    if (playlistData.playlist_type === "mind") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        // //console.log("🚀 ~ file: Playlists.jsx:102 ~ playlistObj.map ~ playlistObj.playlist_videos:", playlistObj)
                                        return (
                                            <PlaylistRow key={index} videoObj={modifiedVideoData} playlistObj={modifiedPlaylistData} videoIndex={index} sort="mind" />

                                        );
                                    }
                                    break;
                                case "soul":
                                    if (playlistData.playlist_type === "soul") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        return (
                                            <PlaylistRow key={index} videoObj={modifiedVideoData} playlistObj={modifiedPlaylistData} videoIndex={index} sort="soul" />
                                        );
                                    }
                                    break;
                                case "body":
                                    if (playlistData.playlist_type === "body") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        return (
                                            <PlaylistRow key={index} videoObj={modifiedVideoData} playlistObj={modifiedPlaylistData} videoIndex={index} sort="body" />
                                        );
                                    }
                                    break;
                                default:
                                    return null; // Return nothing for other cases
                            }
                        })
                    )}
                </div>
            </div>



        </>
    );
};

export default SubscriptionPlaylists;
