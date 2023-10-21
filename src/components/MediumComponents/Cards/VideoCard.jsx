import React, { useState } from 'react';
import './video-card.scss';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';


import { useDispatch } from 'react-redux';
import { addCurrentVideo } from '../../../data/store/currentVideoSlice';
const VideoCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleDeleteClick = () => {
        // Add your delete logic here
        // For example, you can call a function to delete the video
        // props.onDelete(props.videoObj[props.videoIndex].id);
        setMenuVisible(false);
    };


    const currentVideoObj = useSelector(state => state.currentVideos.currentVideos);
    
    const handlePlayClick = () => {
        
        
        console.log("🚀 ~ file: VideoCard.jsx:31 ~ handlePlayClick ~ props.videoObj:", props.videoObj)
        dispatch(addCurrentVideo(props.videoObj));
        navigate("/VideoPage");
        window.location.reload()
    };


    const videoLengthInSeconds = props.videoObj.video_length;
    const minutes = Math.floor(videoLengthInSeconds / 60);
    const seconds = videoLengthInSeconds % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


    // Calculate the time difference in hours
    const createdAt = new Date(props.videoObj.createdAt);
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - createdAt) / (1000 * 60 * 60)); // in hours

    // console.log("🚀 ~ file: VideoCard.jsx:86 ~ VideoCard ~ props.videoObj:", props.videoObj)


    return (
        <div className={`video-card ${props.cardSize === "big" ? "big" : ""}${props.userCard ? "user-view" : ""}`}>
            <div className={props.showControls === "no" ? "video-card__custom-controls hidden" : "video-card__custom-controls"}>

                <div
                    className="video-card__menu-button"
                    onClick={() => setMenuVisible(!menuVisible)}
                >
                    <img src={threeDots} alt="" className="video-card__three-dots-icon" />
                </div>
                {props.userView ? (
                    menuVisible && (
                        <div className="video-card__menu-dropdown">
                            <div className="video-card__menu-item" onClick={() => { props.handleViewLater(props.videoObj.video_id); setMenuVisible(false) }}>
                                View later
                            </div>
                            <div className="video-card__menu-item" onClick={() => { props.handleNotInterested(props.videoObj.video_id); setMenuVisible(false) }}>
                                Not interested
                            </div>
                        </div>
                    )
                ) : (
                    menuVisible && (
                        <div className="video-card__menu-dropdown">
                            <div className="video-card__menu-item" onClick={() => { handleDeleteClick }}>
                                Delete
                            </div>
                        </div>
                    )
                )}


                <div className="video-card__play-button" onClick={handlePlayClick}>
                    <img src={playIcon} alt="" className="video-card__play-icon" />
                </div>

                <div className="video-card__length">
                    {formattedTime}
                </div>
            </div>

            <video
                className="video-card__video"
                src={ props.videoObj.video_url}
                poster={ props.videoObj.video_preview}
            ></video>

            <div className="video-card__texts">
                <div className="video-card__video-name">
                    {props.videoObj.video_name}
                </div>
                <div className="video-card__video-post-time">
                    {props.userView ?
                        <>
                            <div className="video-card__video-info">
                                <div className="video-card__author">
                                    <img src={ props.videoObj.video_creator_avatar} alt="" className="video-card__author-avatar" />
                                    <div className="video-card__author-name">{props.videoObj.video_creator_username}</div>
                                </div>
                                <div className="video-card__time">{`${timeDifference} hours ago`}</div>
                            </div>
                        </>
                        : `${timeDifference} hours ago`}
                </div>

            </div>



        </div>
    );
};

export default VideoCard;
