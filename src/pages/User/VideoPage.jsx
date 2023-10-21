import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./video-page.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';
import UserSubscriptions from '../../components/BigComponents/UserSubscriptions';

import VideoCard from '../../components/MediumComponents/Cards/VideoCard';
import Comment from '../../components/MediumComponents/Comment';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import { useDispatch } from 'react-redux';
import { addVideo } from '../../data/store/videoSlice';
import { addCurrentSubscription } from '../../data/store/currentSubscriptionSLice';
import { addComment } from '../../data/store/commentSlice';


import backArrow from '../../img/back-arrow-icon.svg';
import shopIcon from '../../img/shop-icon.svg';
import likeIcon from '../../img/like-icon.svg';
import dislikeIcon from '../../img/dislike-icon.svg';
import likeIconActive from '../../img/like-icon-active.svg';
import commentIcon from '../../img/comment-icon.svg';
import commentsIconActive from '../../img/comment-icon-active.svg';
import videoMenuIcon from '../../img/video-menu-icon.svg';

const VideoPage = () => {

    const navigate = useNavigate();

    const [sort, setSort] = useState("mind");


    const [sideBar, setSideBar] = useState("Show sidebar");

    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    // Function to handle liking the video
    // Function to handle liking the video
    const handleLikeClick = async () => {
        if (!liked) {
            // If not liked, set liked to true and disliked to false
            if (disliked) {
                await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                    data: {
                        video_dislikes: storedVideoObj[0].video_dislikes - 1
                    }
                });
            }
            setLiked(true);
            setDisliked(false);
            await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                data: {
                    video_likes: storedVideoObj[0].video_likes + 1
                }
            });
        } else {
            // If already liked, toggle back to neutral
            await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                data: {
                    video_likes: storedVideoObj[0].video_likes - 1
                }
            });

            setLiked(false);
        }

    };

    // Function to handle disliking the video
    const handleDislikeClick = async () => {
        if (!disliked) {
            // If not disliked, set disliked to true and liked to false
            if (liked) {
                await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                    data: {
                        video_likes: storedVideoObj[0].video_likes - 1
                    }
                });
            }
            setDisliked(true);
            setLiked(false);
            await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                data: {
                    video_dislikes: storedVideoObj[0].video_dislikes + 1
                }
            });
        } else {
            // If already disliked, toggle back to neutral
            await axios.put(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}`, {
                data: {
                    video_dislikes: storedVideoObj[0].video_dislikes - 1
                }
            });

            setDisliked(false);
        }

    };


    const getStoredVideoObj = () => {
        try {

            // Check if currentPlaylist is available in Redux
            const videoObj = useSelector(state => state.currentVideos.currentVideos);
            if (videoObj && videoObj.length > 0) {
                // Save currentPlaylist to local storage

                sessionStorage.setItem(`videoObj`, JSON.stringify(videoObj));



                return videoObj; // Return the Redux data


            } else {
                // If not available in Redux, check local storage
                const storedVideoObj = sessionStorage.getItem('videoObj');
                if (storedVideoObj) {
                    // Parse the stored data
                    const parsedVideoObj = JSON.parse(storedVideoObj);
                    // Use the stored playlist
                    // You can update the Redux state here if needed
                    return parsedVideoObj;
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
    const [storedVideoObj, setStoredVideoObj] = useState(getStoredVideoObj());
    // console.log("🚀 ~ file: VideoPage.jsx:144 ~ VideoPage ~ storedVideoObj:", storedVideoObj)


    // console.log("🚀 ~ file: VideoPage.jsx:67 ~ VideoPage ~ storedVideoObj:", storedVideoObj)

    const createdAt = new Date(storedVideoObj[0].createdAt);
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - createdAt) / (1000 * 60 * 60)); // in hours

    const initialText = storedVideoObj[0]?.video_description; // Use optional chaining to handle null or undefined

    const [showFullText, setShowFullText] = useState(false);

    // Function to toggle the showFullText state
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    // Render the text based on showFullText state or show a default message if no description
    const renderText = initialText
        ? showFullText
            ? initialText
            : initialText.slice(0, 3)
        : "The video has no description";



    // Determine which icon to show based on like and dislike states
    const likeIconSrc = liked ? likeIconActive : likeIcon;
    const dislikeIconSrc = disliked ? likeIconActive : likeIcon;


    useEffect(() => {
        loadVideos();
    }, []);


    const videoObj = useSelector(state => state.videos.videos);
    // console.log("🚀 ~ file: UserMain.jsx:32 ~ UserMain ~ videoObj:", videoObj)

    const loadVideos = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/videos/?populate[0]=video_creator&populate[1]=video_creator.user_avatar&populate[2]=video_preview&populate[3]=video_file.video_preview`);
            // console.log("🚀 ~ file: CreatorMain.jsx:35 ~ loadVideos ~ response:", response)

            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addVideo({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };



    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



    const handleSubClick = async () => {

        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/users/${storedVideoObj[0].video_creator_id}?populate[0]=user_avatar&populate[1]=user_cover`);
            console.log("🚀get creator response:", response)
            const temporaryObject = {
                blocked: response.data.blocked,
                confirmed: response.data.confirmed,
                createdAt: response.data.createdAt,
                customer_role: response.data.customer_role,
                date_of_birth: response.data.date_of_birth,
                email: response.data.email,
                id: response.data.id,
                provider: response.data.provider,
                updatedAt: response.data.updatedAt,
                user_LLC: response.data.user_LLC,
                user_address: response.data.user_address,
                user_avatar: response.data.user_avatar,
                user_description: response.data.user_description,
                user_facebook: response.data.user_facebook,
                user_first_name: response.data.user_first_name,
                user_gender: response.data.user_gender,
                user_instagram: response.data.user_instagram,
                user_last_name: response.data.user_last_name,
                user_twitter: response.data.user_twitter,
                user_vimeo: response.data.user_vimeo,
                username: response.data.username,
            };
            dispatch(addCurrentSubscription(temporaryObject));


        } catch (error) {
            console.error('An error occurred:', error);
        }



        navigate("/SubscriptionView");
    }



    const [showComments, setShowComments] = useState(false); // Step 1: Comments button state

    const loadComments = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/videos/${storedVideoObj[0].video_id}?populate[0]=video_comments&populate[1]=video_comments.comment_author&populate[2]=video_comments.comment_author.user_avatar&populate[3]=video_comments.comment_replies&populate[4]=video_comments.comment_replies.comment_author&populate[5]=video_comments.comment_replies.comment_author.user_avatar`);

            console.log("🚀 response:", response)

            const dispatchPromises = response.data.data.attributes.video_comments.data.map((commentsData, index) => {
                return dispatch(addComment({ dataPath: commentsData, index }));
            });
            
            // Here, addComment should be an action creator that dispatches an action to add the comment data to your Redux store.
            

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const toggleComments = () => {
        setShowComments(!showComments);

        if (showComments === false) {
            loadComments();
        }
    };





    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper-user">
                <div className="wrapper-user user-header">
                    <Header videosButtons={false} notifications={false}></Header>
                </div>
                <div className="video">
                    <div className="video__head">
                        <div className="video__head-block">
                            <div className="video__back-button" onClick={() => { navigate(-1) }}>
                                <img src={backArrow} alt="" className="video__back-arrow" />
                            </div>
                            <div className="video__author" onClick={() => { handleSubClick() }}>
                                <img src={storedVideoObj[0].video_creator_avatar} alt="" className="video__author-avatar" />
                                <div className="video__author-info">
                                    <div className="video__author-name">
                                        {storedVideoObj[0].video_creator_username}
                                    </div>
                                    <div className="video__author-subs">145.3K subscribers</div>
                                </div>
                            </div>
                        </div>
                        <div className="video__head-block">
                            <div className="video__subscribe-button">
                                Subscribe
                            </div>
                            <div className="video__shop-button">
                                <img src={shopIcon} alt="" className="video__shop-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="video__subscribe-button mobile">
                        Subscribe
                    </div>

                    <video
                        className="video__video-player"
                        src={storedVideoObj[0].video_url}
                        poster={storedVideoObj[0].video_preview}
                        controls
                    ></video>


                    <div className="video__about">
                        <div className="video__video-name">
                            {storedVideoObj[0].video_name}
                        </div>
                        <div className="video__clickable-box mobile">
                            <div className="video__text-info mobile">145.3K views</div>
                            <div className="video__text-info mobile">
                                {timeDifference}h ago
                            </div>
                        </div>
                        <div className="video__clickable-container">
                            <div className="video__clickable-box">
                                <div className="video__likes-container">
                                    <div className="video__likes-block" onClick={handleLikeClick}>
                                        <img src={likeIconSrc} alt="" className="video__like-icon" />
                                        <div className="video__likes-count">
                                            {storedVideoObj[0].video_likes}
                                        </div>
                                    </div>
                                    <div className="video__likes-line"></div>
                                    <div className="video__likes-block" onClick={handleDislikeClick}>
                                        <img src={dislikeIconSrc} alt="" className="video__like-icon dis" />
                                        <div className="video__likes-count">
                                            {storedVideoObj[0].video_dislikes}
                                        </div>
                                    </div>
                                </div>
                                <div className={`video__comments-button ${showComments ? 'active' : ''}`} onClick={toggleComments}>
                                    {showComments ? (
                                        /* Render your new comments icon here when showComments is true */
                                        <img src={commentsIconActive} alt="New Comments" className="video__comments-icon" />
                                    ) : (
                                        /* Render the default comments icon here when showComments is false */
                                        <img src={commentIcon} alt="Comments" className="video__comments-icon" />
                                    )}
                                </div>
                            </div>
                            <div className="video__clickable-box">
                                <div className="video__text-info">145.3K views</div>
                                <div className="video__text-info">
                                    {timeDifference}h ago
                                </div>
                                <div className="video__menu-button" onClick={() => { toggleDropdown() }}>
                                    <img src={videoMenuIcon} alt="" className="video__menu-icon" />
                                    {isOpen && (
                                        <div className="video__dropdown-content">
                                            {/* Add your dropdown menu items here */}
                                            <div className="video__menu-item">View Later</div>
                                            <div className="video__menu-item">Not Interested</div>
                                            {/* Add more items as needed */}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="video__description">
                            {renderText}
                            <span onClick={toggleText}>
                                {showFullText ? " Show less" : " Show more"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="video-lower-container">
                {showComments ? (
                    /* Render the comments container when showComments is true */
                    <div className="comments__container">
                        <Comment></Comment>
                    </div>
                ) : (
                    /* Render the video list container when showComments is false */
                    <div className="video-list__container">
                        <div className="video-list">
                            <div className="video-list__name">
                                Video List Name
                            </div>
                            <div className="video-list__videos">
                                {videoObj.length === 0 ? (
                                    // Display a loading message or any other content while loading
                                    <p style={{ color: "#fff" }}>Loading...</p>
                                ) : (
                                    // Render VideoCard components when videoObj is not empty
                                    videoObj.map((videoData, index) => {
                                        return (
                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} userView={true} userCard={true} />
                                        );

                                    })
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </>
    );
};

export default VideoPage;
