import React, { useState } from 'react';
import './subscription-components.scss';
import { useNavigate } from "react-router-dom";

import VideoCard from '../../MediumComponents/Cards/VideoCard';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../../data/store/currentPlaylistSlice';

const SubscriptionVideos = (props) => {
    const navigate = useNavigate();

    const currentPlaylist = useSelector(state => state.currentPlaylists.currentPlaylists);
    const dispatch = useDispatch();

    const handleRerouteView = () => {
        dispatch(addCurrentPlaylist(props.playlistObj));
        navigate("/PlaylistView");
    }
    // console.log("🚀", props.videoObj)
    return (
        <>

            <div className="subscription-videos-box">
                {
                    props.videoObj.map((videoData, index) => {

                        // Create a temporary instance with modified fields
                        const modifiedVideoData = {
                            ...videoData,

                            video_url: videoData.video_file[0].url,
                            video_preview: videoData.video_preview.url
                        };

                        return (
                            <VideoCard key={index} videoObj={modifiedVideoData} videoIndex={index} />
                        );
                    })
                }
            </div>



        </>
    );
};

export default SubscriptionVideos;
