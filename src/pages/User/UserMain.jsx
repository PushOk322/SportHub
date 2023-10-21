import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./user-main.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';
import UserSubscriptions from '../../components/BigComponents/UserSubscriptions';

import VideoCard from '../../components/MediumComponents/Cards/VideoCard';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import { useDispatch } from 'react-redux';
import { addVideo } from '../../data/store/videoSlice';
import { addUserViewLater } from '../../data/store/userViewLaterSlice';
import { addUserLatest } from '../../data/store/userLatestSlice';
import { deleteVideo } from '../../data/store/videoSlice';

import userCard1 from '../../img/user-card-1.png';
import userCard2 from '../../img/user-card-2.png';
import userCard3 from '../../img/user-card-3.png';
import plusIcon from '../../img/plus-icon.svg';

const UserMain = () => {

    const navigate = useNavigate();

    const [sort, setSort] = useState("mind");


    const [sideBar, setSideBar] = useState("Show sidebar");

    const dispatch = useDispatch();


    const getStoredUserObj = () => {
        try {
            // Check if currentPlaylist is available in Redux
            const userObj = useSelector(state => state.users.users);
            if (userObj && userObj.length > 0) {
                // Save currentPlaylist to local storage
                sessionStorage.setItem(`userObj`, JSON.stringify(userObj));
                return userObj; // Return the Redux data
            } else {
                // If not available in Redux, check local storage
                const storedUserObj = sessionStorage.getItem('userObj');
                if (storedUserObj) {
                    // Parse the stored data
                    const parsedUserObj = JSON.parse(storedUserObj);
                    // Use the stored playlist
                    // You can update the Redux state here if needed
                    return parsedUserObj;
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
    const storedUserObj = getStoredUserObj();
    // console.log("🚀 ~ file: UserMain.jsx:33 ~ UserMain ~ userObj:", storedUserObj)
    //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)

    useEffect(() => {
        loadVideos();
    }, []);


    const videoObj = useSelector(state => state.videos.videos);
    // console.log("🚀 ~ file: UserMain.jsx:32 ~ UserMain ~ videoObj:", videoObj)

    const loadVideos = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/videos/?populate[0]=video_creator&populate[1]=video_creator.user_avatar&populate[2]=video_preview&populate[3]=video_file.video_preview`);
            console.log("🚀 loadVideos ~ response:", response)

            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addVideo({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const userViewLaterObj = useSelector(state => state.userViewLaters.userViewLaters);
    // console.log("ViewLaterObj:", userViewLaterObj)
    const loadVideosViewLater = async () => {
        try {
            const responseViewLater = await axios.get(`https://paul-sporthub-app.onrender.com/api/users/${storedUserObj[0].id}?populate[0]=user_view_later&populate[1]=user_view_later.video_file&populate[2]=user_view_later.video_preview&populate[3]=user_view_later.video_creator.user_avatar`,
                {
                    headers: {
                        Authorization: `Bearer ${storedUserObj[0].jwt}`, // Include the JWT token in the headers
                    },
                });
            console.log("view-later-responce", responseViewLater)

            const dispatchPromises = responseViewLater.data.user_view_later.map((videoData, index) => {
                return dispatch(addUserViewLater({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const userLatestObj = useSelector(state => state.userLatests.userLatests);
    // console.log("LatestObj:", userLatestObj)
    const loadVideosLatest = async () => {
        try {
            const responseLatest = await axios.get(`https://paul-sporthub-app.onrender.com/api/users/${storedUserObj[0].id}?populate[0]=user_latest&populate[1]=user_latest.video_file&populate[2]=user_latest.video_preview&populate[3]=user_latest.video_creator.user_avatar`,
                {
                    headers: {
                        Authorization: `Bearer ${storedUserObj[0].jwt}`, // Include the JWT token in the headers
                    },
                });
            console.log("latest-responce", responseLatest)

            const dispatchPromises = responseLatest.data.user_latest.map((videoData, index) => {
                return dispatch(addUserLatest({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    const [videoButtons, setVideoButtons] = useState(1);
    // console.log("🚀 ~ file: UserMain.jsx:92 ~ UserMain ~ videoButtons:", videoButtons)

    const handleHome = async () => {
        setVideoButtons(1);
        loadVideos()
    };

    const handleViewLater = async () => {
        setVideoButtons(2);
        loadVideosViewLater()
    };
    const handleLatest = async () => {
        setVideoButtons(3);
        loadVideosLatest()
    };


    const handleViewLaterClick = async (id) => {
        console.log("🚀 ~ file: UserMain.jsx:158 ~ handleViewLaterClick ~ id:", id)
        try {
            const responseRelation = await axios.put(`https://paul-sporthub-app.onrender.com/api/users/${storedUserObj[0].id}`,
                {
                    data: {
                        user_view_later: {
                            connect: id,
                        }

                    }
                });
            console.log("🚀 ~ file: UserMain.jsx:160 ~ handleViewLaterClick ~ responseRelation:", responseRelation)

        } catch (error) {
            console.log("info creation error: ", error);
        }
    };

    const handleNotInterestedClick = async (id) => {
        dispatch(deleteVideo(id));
    };



    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper-user">
                <div className="wrapper-user user-header">
                    <Header videosButtons={false} notifications={false}></Header>
                </div>


                <div className="user-main-container">
                    <div className={sideBar === "Show sidebar" ? "user-main-container__sidebar" : "user-main-container__sidebar active"}>
                        <div className="user-main-container__videos-buttons">
                            <div className={videoButtons === 1 ? "user-main-container__button active" : "user-main-container__button"} onClick={() => { handleHome() }}>Home</div>
                            <div className={videoButtons === 2 ? "user-main-container__button active" : "user-main-container__button"} onClick={() => { handleViewLater() }}>Latest</div>
                            <div className={videoButtons === 3 ? "user-main-container__button active" : "user-main-container__button"} onClick={() => { handleLatest() }}>View later </div>
                            <div className="user-main-container__line"></div>
                        </div>
                        <UserSubscriptions userObj={storedUserObj}></UserSubscriptions>
                    </div>
                    {videoButtons === 1 && (
                        <div className="user-main-container__content">
                            <button className="user-main-container__sidebar-button" onClick={() => { if (sideBar === "Show sidebar") { setSideBar("Hide sidebar") } else { setSideBar("Show sidebar") } }}>
                                {sideBar}
                            </button>
                            <div className="user-main-container__cards">
                                <img src={userCard1} alt="" className="user-main-container__user-card" onClick={() => { navigate("/CreatorMain") }} />
                                <img src={userCard2} alt="" className="user-main-container__user-card" onClick={() => { navigate("/CreatorMain") }} />
                                <img src={userCard3} alt="" className="user-main-container__user-card" onClick={() => { navigate("/CreatorMain") }} />
                            </div>
                            <div className="video-card-container-user">
                                <div className="video-card-container-user__video-list-heading">Video List</div>
                                <div className="video-card-container-user__videos-box">
                                    {videoObj.length === 0 ? (
                                        // Display a loading message or any other content while loading
                                        <p style={{ color: "#fff" }}>Loading...</p>
                                    ) : (
                                        // Render VideoCard components when videoObj is not empty
                                        videoObj.map((videoData, index) => {
                                            return (
                                                <VideoCard key={index} videoObj={videoData} videoIndex={index} userView={true} userCard={true} handleViewLater={handleViewLaterClick} handleNotInterested={handleNotInterestedClick} />
                                            );

                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {videoButtons === 2 && (
                        <div className="user-main-container__content">
                            <button className="user-main-container__sidebar-button" onClick={() => { if (sideBar === "Show sidebar") { setSideBar("Hide sidebar") } else { setSideBar("Show sidebar") } }}>
                                {sideBar}
                            </button>
                            <div className="video-card-container-user">
                                <div className="video-card-container-user__video-list-heading">Latest</div>
                                <div className="video-card-container-user__videos-box">
                                    {userViewLaterObj.length === 0 ? (
                                        // Display a loading message or any other content while loading
                                        <p style={{ color: "#fff" }}>Loading...</p>
                                    ) : (
                                        // Render VideoCard components when videoObj is not empty
                                        userViewLaterObj.map((videoData, index) => {
                                            return (
                                                <VideoCard key={index} videoObj={videoData} videoIndex={index} userView={true} userCard={true} />
                                            );

                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {videoButtons === 3 && (
                        <div className="user-main-container__content">
                            <button className="user-main-container__sidebar-button" onClick={() => { if (sideBar === "Show sidebar") { setSideBar("Hide sidebar") } else { setSideBar("Show sidebar") } }}>
                                {sideBar}
                            </button>
                            <div className="video-card-container-user">
                                <div className="video-card-container-user__video-list-heading">View later </div>
                                <div className="video-card-container-user__videos-box">
                                    {userLatestObj.length === 0 ? (
                                        // Display a loading message or any other content while loading
                                        <p style={{ color: "#fff" }}>Loading...</p>
                                    ) : (
                                        // Render VideoCard components when videoObj is not empty
                                        userLatestObj.map((videoData, index) => {
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





                
            </div>

        </>
    );
};

export default UserMain;
