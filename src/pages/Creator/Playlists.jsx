import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./playlists.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';
import PlaylistRow from '../../components/MediumComponents/Rows/PlaylistRow';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import { useDispatch } from 'react-redux';
import { addPlaylist } from '../../data/store/playlistSlice';


import plusIcon from '../../img/plus-icon.svg';

const Playlists = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [sort, setSort] = useState("mind");

   

    const playlistObj = useSelector(state => state.playlists.playlists);
    console.log("🚀 playlistobj:", playlistObj)

    useEffect(() => {
        loadVideos();
    }, []);


    const loadVideos = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/playlists?populate[videos][populate][0]=video_file&populate[videos][populate][1]=video_preview`);

            console.log("🚀 response:", response)

            const dispatchPromises = response.data.data.map((playlistData, index) => {
                return dispatch(addPlaylist({ dataPath: playlistData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleClick = async () => {
        navigate("/Playlists");
    };




    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper">
                <Header videosButtons={true}></Header>

                <div className="v-p__container">
                    <div className="v-p">
                        <div className="v-p__button " onClick={()=>{navigate("/CreatorMain")}}>Your video</div>
                        <div className="v-p__button active">Playlists</div>
                    </div>
                    <div className="v-p__orange-button" onClick={()=>{navigate("/AddPlaylist")}}>
                        <OrangeButton text="Create new playlist" plus={true} marginTop={0} handleLogin={handleClick} width={217} maxWidth={217}></OrangeButton>
                    </div>

                    <div className="v-p__button-mobile">
                        <img src={plusIcon} alt="" className="v-p__plus-icon" />
                    </div>
                </div>

                <div className="sort">
                    <div className={sort === "mind" ? "sort__button active" : " sort__button"} onClick={() => { setSort("mind") }}>Mind</div>
                    <div className={sort === "body" ? "sort__button active" : " sort__button"} onClick={() => { setSort("body") }}>Body</div>
                    <div className={sort === "soul" ? "sort__button active" : " sort__button"} onClick={() => { setSort("soul") }}>Soul</div>
                </div>

                <div className="playlists-container">
                    {playlistObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        playlistObj.map((playlistData, index) => {

                            switch (sort) {
                                case "mind":
                                    if (playlistData.playlist_type === "mind") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        // //console.log("🚀 ~ file: Playlists.jsx:102 ~ playlistObj.map ~ playlistObj.playlist_videos:", playlistObj)
                                        return (
                                            <PlaylistRow key={index} videoObj={playlistData.playlist_videos} playlistObj={playlistData} videoIndex={index} sort="mind"/>
                                            
                                        );
                                    }
                                    break;
                                case "soul":
                                    if (playlistData.playlist_type === "soul") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        return (
                                            <PlaylistRow key={index} videoObj={playlistData.playlist_videos} playlistObj={playlistData} videoIndex={index} sort="soul"/>
                                        );
                                    }
                                    break;
                                case "body":
                                    if (playlistData.playlist_type === "body") {
                                        // //console.log(`Rendering Playlist ${index}`);
                                        return (
                                            <PlaylistRow key={index} videoObj={playlistData.playlist_videos} playlistObj={playlistData} videoIndex={index} sort="body" />
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

export default Playlists;
