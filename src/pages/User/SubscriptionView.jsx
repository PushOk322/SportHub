import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./subscription-view.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';
import UserSubscriptions from '../../components/BigComponents/UserSubscriptions';

import VideoCard from '../../components/MediumComponents/Cards/VideoCard';
import SubscriptionVideos from '../../components/BigComponents/SubscriptionsComponents/SubscriptionVideos';
import SubscriptionInfo from '../../components/BigComponents/SubscriptionsComponents/SubscriptionInfo';
import SubscriptionStores from '../../components/BigComponents/SubscriptionsComponents/SubscriptionStores';
import SubscriptionPlaylists from '../../components/BigComponents/SubscriptionsComponents/SubscriptionPlaylists';

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
import eyeIcon from '../../img/info-eye-icon.svg';
import peopleIcon from '../../img/people-icon.svg';
import cameraIcon from '../../img/camera-icon.svg';

import { addCurrentSubscription } from '../../data/store/currentSubscriptionSLice';

const SubscriptionView = () => {

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
    // console.log("🚀 ~ file: SubscriptionView.jsx:75 ~ SubscriptionView ~ storedUserObj:", storedUserObj)

    const getCurrentSubscriptionObj = () => {
        try {
            // Check if currentPlaylist is available in Redux
            const currentSubscriptionObj = useSelector(state => state.currentSubscriptions.currentSubscriptions);
            if (currentSubscriptionObj && currentSubscriptionObj.length > 0) {
                // Save currentPlaylist to local storage
                sessionStorage.removeItem(`currentSubscriptionObj`);
                sessionStorage.setItem(`currentSubscriptionObj`, JSON.stringify(currentSubscriptionObj));
                return currentSubscriptionObj; // Return the Redux data
            } else {
                // If not available in Redux, check local storage
                const storedUserObj = sessionStorage.getItem('currentSubscriptionObj');
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
    const storedCurrentSubscriptionObj = getCurrentSubscriptionObj();
    console.log("🚀 ~ file: SubscriptionView.jsx:107 ~ SubscriptionView ~ storedCurrentSubscriptionObj:", storedCurrentSubscriptionObj)


    useEffect(() => {
        loadSubscriptedUser();
        loadVideos();
    }, []);


    // console.log("🚀 ~ file: SubscriptionView.jsx:114 ~ SubscriptionView ~ currentSubscriptionObj:", currentSubscriptionObj)

    const [subscriptionObj, setSubscriptionObj] = useState([]);
    // console.log("🚀 ~ file: SubscriptionView.jsx:108 ~ SubscriptionView ~ subscriptionObj:", subscriptionObj)

    const loadSubscriptedUser = async () => {
        try {
            const responseUser = await axios.get(`http://localhost:1337/api/users/${storedCurrentSubscriptionObj[0].id}?populate[0]=user_avatar&populate[1]=user_subscripteds&populate[2]=user_cover&populate[3]=created_videos&populate[4]=created_videos.video_file&populate[5]=created_videos.video_preview&populate[6]=user_stores&populate[7]=user_stores.store_name&populate[8]=user_stores.store_description&populate[9]=user_stores.store_preview&populate[10]=user_playlists&populate[11]=user_playlists.playlist_name&populate[12]=user_playlists.playlist_type&populate[13]=user_playlists.videos&populate[14]=user_playlists.videos.video_file&populate[15]=user_playlists.videos.video_name&populate[16]=user_playlists.videos.video_preview&populate[17]=user_playlists.videos`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${storedUserObj[0].jwt}`, // Include the JWT token in the headers
                //     },
                // }
            );
            console.log("view-later-responce", responseUser)

            setSubscriptionObj(responseUser.data);

            // const dispatchPromises = responseViewLater.data.user_view_later.map((videoData, index) => {
            //     return dispatch(addUserViewLater({ data: videoData, index }));
            // });

            // await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const fetchSubscriptedUser = async () => {
        loadSubscriptedUser();
    };


    let subscriptionCount = 0;

    if (subscriptionObj.user_subscripteds) {
        subscriptionCount = Object.keys(subscriptionObj.user_subscripteds).length;
    }

    let videosCount = 0;

    if (subscriptionObj.created_videos) {
        videosCount = Object.keys(subscriptionObj.created_videos).length;
    }










    const videoObj = useSelector(state => state.videos.videos);
    // console.log("🚀 ~ file: UserMain.jsx:32 ~ UserMain ~ videoObj:", videoObj)

    const loadVideos = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/videos/?populate[0]=video_creator&populate[1]=user_subscripteds&populate[2]=video_creator.user_avatar&populate[3]=video_preview&populate[4]=video_file.video_preview`);
            console.log("🚀 ~ file: CreatorMain.jsx:35 ~ loadVideos ~ response:", response)

            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addVideo({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };



    const handleHome = async () => {
        navigate("/UserMain");
    };




    const [subscribeButton, setSubscribeButton] = useState("Subscribe");

    const handleSubClick = () => {
        if (subscribeButton === "Subscribe") {
            setSubscribeButton("Unsubscribe")
        } else {
            setSubscribeButton("Subscribe")
        }
    };


    const [subNav, setSubNav] = useState(1);






    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper-user">
                <div className="wrapper-user user-header">
                    <Header videosButtons={false} notifications={false}></Header>
                </div>


                <div className="user-main-container">
                    <div className={sideBar === "Show sidebar" ?  "user-main-container__sidebar ": "user-main-container__sidebar active"} >
                        <div className="user-main-container__videos-buttons" onClick={() => { handleHome() }}>
                            <div className="user-main-container__button" >Home</div>
                            <div className="user-main-container__button">Latest</div>
                            <div className="user-main-container__button" >View later </div>
                            <div className="user-main-container__line"></div>
                        </div>
                        <UserSubscriptions userObj={storedUserObj} fetchFunc={fetchSubscriptedUser}></UserSubscriptions>
                    </div>
                    <div className="user-subscriptions">
                        <button className="user-main-container__sidebar-button" onClick={() => { if (sideBar === "Show sidebar") { setSideBar("Hide sidebar") } else { setSideBar("Show sidebar") } }}>
                            {sideBar}
                        </button>
                        <div className="user-subscriptions__cover" style={{
                            backgroundImage: `url(${subscriptionObj.user_cover && ("http://localhost:1337" + subscriptionObj.user_cover.url)})`,
                        }}
                        >
                            <div className="user-subscriptions__cover-container">
                                <div className="user-subscriptions__account">
                                    <img src={(subscriptionObj.user_avatar && ("http://localhost:1337" + subscriptionObj.user_avatar.url))} alt="" className="user-subscriptions__account-avatar" />
                                    <div className="user-subscriptions__account-name">
                                        {
                                            subscriptionObj.username
                                        }
                                    </div>
                                </div>
                                <div className="user-subscriptions__info-blocks">
                                    <div className="user-subscriptions__info-block">
                                        <img src={peopleIcon} alt="" className="user-subscriptions__info-icon" />
                                        <div className="user-subscriptions__info-texts">
                                            <div className="user-subscriptions__info-number">
                                                {subscriptionCount}
                                            </div>
                                            <div className="user-subscriptions__info-num-text">Subscribers</div>
                                        </div>
                                    </div>
                                    <div className="user-subscriptions__info-block">
                                        <img src={cameraIcon} alt="" className="user-subscriptions__info-icon" />
                                        <div className="user-subscriptions__info-texts">
                                            <div className="user-subscriptions__info-number">
                                                {videosCount}
                                            </div>
                                            <div className="user-subscriptions__info-num-text">Videos</div>
                                        </div>
                                    </div>
                                    <div className="user-subscriptions__info-block">
                                        <img src={eyeIcon} alt="" className="user-subscriptions__info-icon" />
                                        <div className="user-subscriptions__info-texts">
                                            <div className="user-subscriptions__info-number">15k</div>
                                            <div className="user-subscriptions__info-num-text">Views</div>
                                        </div>
                                    </div>
                                </div>
                                <button className={`user-subscriptions__subscribe-button ${subscribeButton === "Unsubscribe" && "active"}`} onClick={() => { handleSubClick() }}>
                                    {subscribeButton}
                                </button>
                            </div>
                        </div>

                        <div className="user-subscriptions__content">
                            <div className="user-subscriptions__nav">
                                <div className={`user-subscriptions__nav-item ${subNav === 1 && "active"}`} onClick={() => { setSubNav(1) }}>
                                    Video
                                </div>
                                <div className={`user-subscriptions__nav-item ${subNav === 2 && "active"}`} onClick={() => { setSubNav(2) }}>
                                    Bio
                                </div>
                                <div className={`user-subscriptions__nav-item ${subNav === 3 && "active"}`} onClick={() => { setSubNav(3) }}>
                                    Store
                                </div>
                                <div className={`user-subscriptions__nav-item ${subNav === 4 && "active"}`} onClick={() => { setSubNav(4) }}>
                                    Playlists
                                </div>
                            </div>
                            <div className="user-subscriptions__author-content">
                                {
                                    subNav === 1 ? (
                                        subscriptionObj.created_videos ? (
                                            <SubscriptionVideos videoObj={subscriptionObj.created_videos}></SubscriptionVideos>
                                        ) : null
                                    ) : subNav === 2 ? (
                                        subscriptionObj ? (
                                            <SubscriptionInfo videoObj={subscriptionObj}></SubscriptionInfo>
                                        ) : null
                                    ) : subNav === 3 ? (
                                        subscriptionObj ? (
                                            <SubscriptionStores storeObj={subscriptionObj.user_stores}></SubscriptionStores>
                                        ) : null
                                    ) : subNav === 4 ? (
                                        subscriptionObj ? (
                                            <SubscriptionPlaylists playlistObj={subscriptionObj.user_playlists}></SubscriptionPlaylists>
                                        ) : null
                                    ) : (
                                        0 // This is the default case if subNav doesn't match any of the cases.
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </div>





                
            </div>

        </>
    );
};

export default SubscriptionView;
