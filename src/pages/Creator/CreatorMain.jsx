import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./creator-main.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';

import VideoCard from '../../components/MediumComponents/Cards/VideoCard';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import { useDispatch } from 'react-redux';
import { addVideo } from '../../data/store/videoSlice';


import plusIcon from '../../img/plus-icon.svg';

const CreatorMain = () => {

    const navigate = useNavigate();
    
    const [sort, setSort] = useState("mind");

    const dispatch = useDispatch();

    const videoObj = useSelector(state => state.videos.videos);
    //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)

    useEffect(() => {
        loadVideos();
    }, []);


    const loadVideos = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/videos/?populate[0]=video_creator&populate[1]=video_creator.user_avatar&populate[2]=video_preview&populate[3]=video_file.video_preview`);

            console.log("🚀 ~ file: CreatorMain.jsx:35 ~ loadVideos ~ response:", response)

            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addVideo({ data: videoData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleClick = async () => {
        navigate("/AddVideo");
    };




    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper">
                <Header videosButtons={true}></Header>

                <div className="v-p__container">
                    <div className="v-p">
                        <div className="v-p__button active">Your video</div>
                        <div className="v-p__button" onClick={() => { navigate("/Playlists") }}>Playlists</div>
                        <div className="v-p__button" onClick={() => { navigate("/UserMain") }}>User main</div>
                    </div>
                    <div className="v-p__orange-button">
                        <OrangeButton text="Add new video" plus={true} marginTop={0} handleLogin={handleClick} width={180}></OrangeButton>
                    </div>

                    <div className="v-p__button-mobile" onClick={() => { navigate("/AddVideo") }}>
                        <img src={plusIcon} alt="" className="v-p__plus-icon" />
                    </div>
                </div>

                <div className="sort">
                    <div className={sort === "mind" ? "sort__button active" : " sort__button"} onClick={() => { setSort("mind") }}>Mind</div>
                    <div className={sort === "body" ? "sort__button active" : " sort__button"} onClick={() => { setSort("body") }}>Body</div>
                    <div className={sort === "soul" ? "sort__button active" : " sort__button"} onClick={() => { setSort("soul") }}>Soul</div>
                </div>

                <div className="video-card-container">
                    {videoObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        videoObj.map((videoData, index) => {

                            switch (sort) {
                                case "mind":
                                    if (videoData.video_type === "mind") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />
                                        );
                                    }
                                    break;
                                case "soul":
                                    if (videoData.video_type === "soul") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />
                                        );
                                    }
                                    break;
                                case "body":
                                    if (videoData.video_type === "body") {
                                        //console.log(`Rendering VideoCard ${index}`);
                                        return (
                                            <VideoCard key={index} videoObj={videoData} videoIndex={index} />
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

export default CreatorMain;
