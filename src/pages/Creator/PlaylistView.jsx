import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./playlist-view.scss";
import { useNavigate } from "react-router-dom";

import Header from '../../components/Page-Size-Components/Header';

import VideoCard from '../../components/MediumComponents/Cards/VideoCard';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import threeDots from '../../img/dots-icon.svg';


import { addVideo } from '../../data/store/videoSlice';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../data/store/currentPlaylistSlice';

import plusIcon from '../../img/plus-icon.svg';

const PlaylistView = () => {

    const navigate = useNavigate();

    // Define the function to get and validate the stored playlist data
    const getStoredPlaylist = () => {
        try {
            // Check if currentPlaylist is available in Redux
            const currentPlaylist = useSelector(state => state.currentPlaylists.currentPlaylists);
            if (currentPlaylist && currentPlaylist.length > 0) {
                // Save currentPlaylist to local storage
                sessionStorage.setItem(`currentPlaylist`, JSON.stringify(currentPlaylist));
                return currentPlaylist; // Return the Redux data
            } else {
                // If not available in Redux, check local storage
                const storedPlaylist = sessionStorage.getItem('currentPlaylist');
                if (storedPlaylist) {
                    // Parse the stored data
                    const parsedPlaylist = JSON.parse(storedPlaylist);
                    // Use the stored playlist
                    // You can update the Redux state here if needed
                    return parsedPlaylist;
                } else {
                    // If not available in Redux or local storage, return null
                    return null;
                }
            }
        } catch (error) {
            // Handle any errors here if needed
            console.error(error);
            return null; // Return null in case of an error
        }
    };

    const currentPlaylist = useSelector(state => state.currentPlaylists.currentPlaylists);
    const dispatch = useDispatch();

    

    // Call the function to get the stored playlist data
    const storedPlaylist = getStoredPlaylist();

    // Now you can access the properties of the stored playlist
    const currentPlaylistName = storedPlaylist ? storedPlaylist[0].currentPlaylist_name : "No Playlist";
    const currentPlaylistDescription = storedPlaylist ? storedPlaylist[0].currentPlaylist_description : "No Playlist";
    const currentPlaylistCreatedAt = storedPlaylist ? storedPlaylist[0].createdAt : "No Playlist";
    const currentPlaylistVideos = storedPlaylist ? storedPlaylist[0].currentPlaylist_videos : "No Playlist";

    // Calculate the time difference in hours
    const createdAt = new Date(currentPlaylistCreatedAt);
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - createdAt) / (1000 * 60 * 60)); // in hours

    const initialText = currentPlaylistDescription;

    // State to track whether to show full text or truncated text
    const [showFullText, setShowFullText] = useState(false);

    // Function to toggle the showFullText state
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    // Render the text based on showFullText state
    const renderText = showFullText ? initialText : initialText.slice(0, 3);


    const handleClick = async () => {
        navigate("/AddVideo");
    };



    const [videoMenu, setVideoMenu] = useState();


    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div class="wrapper">
                <Header videosButtons={true}></Header>
                <div class="playlist-view">


                    <div class="add-video__head">
                        <div class="add-video__head-title">
                            {currentPlaylistName}
                        </div>
                        <div class="add-video__head-buttons">
                            <div class="add-video__menu-button active" onClick={() => { setVideoMenu(!videoMenu) }}>
                                <img src={threeDots} alt="" class="add-video__dots-icon" />
                            </div>
                            {videoMenu && (
                                <div class="add-video__drop-menu">
                                    <div class="add-video__drop-menu-option" onClick={() => { navigate("/EditPlaylist") }}>Edit playlist</div>
                                    <div class="add-video__drop-menu-option white" onClick={() => { window.location.reload(); }}>Delete</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="playlist-view__info">
                        <div class="playlist-view__video-number">{currentPlaylistVideos.length + " videos"}</div>
                        <div class="playlist-view__views-time">
                            <div class="playlist-view__views-time-item">145.3K views</div>
                            <div class="playlist-view__views-time-item">{timeDifference + "h ago"}</div>
                        </div>
                    </div>

                    <div class="playlist-view__description">
                        {renderText}
                        <span onClick={toggleText}>
                            {showFullText ? "Show less" : "Show more"}
                        </span>
                    </div>


                </div>
            </div>
            <div className="playlist-view__videos">
                <div class="playlist-view__videos-container">
                    {currentPlaylistVideos.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        currentPlaylistVideos.map((videoData, index) => {
                            return (
                                <VideoCard key={index} videoObj={videoData} videoIndex={index} />
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
};

export default PlaylistView;
