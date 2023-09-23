import React, { useState } from 'react';
import './video-card.scss';
import { useNavigate } from "react-router-dom";


import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';

const VideoCard = (props) => {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleDeleteClick = () => {
        // Add your delete logic here
        // For example, you can call a function to delete the video
        // props.onDelete(props.videoObj[props.videoIndex].id);
        setMenuVisible(false);
    };

    const handlePlayClick = () => {
        // Add your play logic here
        // For example, you can navigate to a video player page
        // using react-router
        // history.push(`/video/${props.videoObj[props.videoIndex].id}`);
        navigate("/VideoPlayer");
    };


    const videoLengthInSeconds = props.videoObj.video_length;
    const minutes = Math.floor(videoLengthInSeconds / 60);
    const seconds = videoLengthInSeconds % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


    // Calculate the time difference in hours
    const createdAt = new Date(props.videoObj.createdAt);
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - createdAt) / (1000 * 60 * 60)); // in hours

    

    return (
        <div className={props.cardSize==="big" ? "video-card big":"video-card"}>
            <div className={props.showControls==="no" ? "video-card__custom-controls hidden":"video-card__custom-controls"}>

                <div
                    className="video-card__menu-button"
                    onClick={() => setMenuVisible(!menuVisible)}
                >
                    <img src={threeDots} alt="" className="video-card__three-dots-icon" />
                </div>
                {menuVisible && (
                    <div className="video-card__menu-dropdown">
                        <div className="video-card__menu-item" onClick={handleDeleteClick}>
                            Delete
                        </div>
                    </div>
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
                src={"http://localhost:1337" + props.videoObj.video_url}
                poster={"http://localhost:1337" + props.videoObj.video_preview}
            ></video>

            <div className="video-card__texts">
                <div className="video-card__video-name">
                    {props.videoObj.video_name}
                </div>
                <div className="video-card__video-post-time">
                    {`${timeDifference} hours ago`} {/* Display the time difference */}
                </div>
            </div>



        </div>
    );
};

export default VideoCard;
