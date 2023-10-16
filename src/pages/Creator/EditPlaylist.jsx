import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './add-playlist.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addVideo } from '../../data/store/videoSlice';

import Header from '../../components/Page-Size-Components/Header';
import VideoCard from '../../components/MediumComponents/Cards/VideoCard';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import GreyDrop from '../../components/SmallComponents/DropDowns/GreyDrop';

import uploadIcon from '../../img/upload-big-icon.svg';
import threeDots from '../../img/dots-icon.svg';
import searchIcon from '../../img/search-icon.svg';
import removeIcon from '../../img/cross-icon.svg';
import videoActiveIcon from '../../img/video-active-icon.svg';
const EditPlaylist = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const videoObj = useSelector(state => state.videos.videos);

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

    // Call the function to get the stored playlist data
    const storedPlaylist = getStoredPlaylist();

    // Now you can access the properties of the stored playlist
    const currentPlaylistName = storedPlaylist ? storedPlaylist[0].currentPlaylist_name : "No Playlist";
    const currentPlaylistId = storedPlaylist ? storedPlaylist[0].currentPlaylist_id : "No Playlist";
    const currentPlaylistType = storedPlaylist ? storedPlaylist[0].currentPlaylist_type : "No Playlist";
    const currentPlaylistDescription = storedPlaylist ? storedPlaylist[0].currentPlaylist_description : "No Playlist";
    const currentPlaylistCreatedAt = storedPlaylist ? storedPlaylist[0].createdAt : "No Playlist";
    const currentPlaylistVideos = storedPlaylist ? storedPlaylist[0].currentPlaylist_videos : "No Playlist";

    const [playlistNameInput, setPlaylistNameInput] = useState(currentPlaylistName || '');
    const [playlistDescriptionInput, setPlaylistDescriptionInput] = useState(currentPlaylistDescription || '');
    const [selectedCategoryInput, setSelectedCategoryInput] = useState(currentPlaylistType || '');
    const [addedVideosList, setAddedVideosList] = useState(currentPlaylistVideos || []);
    console.log("🚀 ~ file: EditPlaylist.jsx:70 ~ EditPlaylist ~ addedVideosList:", addedVideosList)

    useEffect(() => {
        loadVideos();
    }, []);

    const loadVideos = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/videos/?populate=*`);
            const dispatchPromises = response.data.data.map((videoData, index) => {
                return dispatch(addVideo({ data: videoData, index }));
            });
            await Promise.all(dispatchPromises);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const [videoMenu, setVideoMenu] = useState();

    const [searchQuery, setSearchQuery] = useState('');


    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Lemon', 'Mango', 'Orange'];

    const handleInputChange = (event) => {
        try {
            const value = event.target.value;
            setInputValue(value);
            setSearchQuery(value);
            const filteredSuggestions = data.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } catch (error) {
            console.error('Error in handleInputChange:', error);
        }
    };

    const filteredVideos = videoObj.filter(video => {
        return video.video_name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log("🚀 ~ file: EditPlaylist.jsx:116 ~ filteredVideos ~ filteredVideos:", filteredVideos)

    const addToPlaylist = (video) => {
        if (!addedVideosList.some(addedVideo => addedVideo.video_id === video.video_id)) {

            setAddedVideosList([...addedVideosList, video]);
            //console.log("🚀 ~ file: AddPlaylist.jsx:126 ~ addToPlaylist ~ addedVideos:", addedVideos)
        }
    };

    const removeFromPlaylist = (video) => {
        const updatedPlaylist = addedVideosList.filter(addedVideo => addedVideo.video_id !== video.video_id);
        setAddedVideosList(updatedPlaylist);
    };



    const [addedVideos, setAddedVideos] = useState(addedVideosList);


    const options = ["mind", "soul", "body"];
    const [selectedCategory, setSelectedCategory] = useState('');
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');

    const handleUpload = async () => {

        try {
            const response = await axios.put(`http://localhost:1337/api/playlists/${currentPlaylistId}`, {
                data: {
                    playlist_name: playlistNameInput,
                    playlist_description: playlistDescriptionInput,
                    playlist_type: selectedCategoryInput,
                }
            });
            //console.log("info creation success", response);
            let playlistId = response.data.data.id;
            const videoIds = addedVideosList.map(video => video.video_id);
            console.log("🚀 ~ file: EditPlaylist.jsx:152 ~ handleUpload ~ videoIds:", videoIds)

            try {
                const responseRelation = await axios.put(`http://localhost:1337/api/playlists/${playlistId}`, {
                    data: {
                        videos: {
                            set: videoIds,
                        }
                    }
                });
                //console.log("info creation success");

            } catch (error) {
                //console.log("info creation error: ", error);
            }
        } catch (error) {
            //console.log("info creation error: ", error);
        }
    };
    const [showAddVideoContainer, setShowAddVideoContainer] = useState(false);
    return (
        <div className="wrapper" style={{ color: "white" }}>
            <Header videosButtons={true} />
            <div className="add-playlist">
                <div className="add-video__head">
                    <div className="add-video__head-title">
                        Edit playlist
                    </div>
                    <div className="add-video__head-buttons">
                        <button className="add-video__publish-button active" onClick={() => { handleUpload() }}>Save</button>
                        <div className="add-video__menu-button active" onClick={() => { setVideoMenu(!videoMenu) }}>
                            <img src={threeDots} alt="" className="add-video__dots-icon" />
                        </div>
                        {videoMenu && (
                            <div className="add-video__drop-menu">
                                <div className="add-video__drop-menu-option">Save as draft</div>
                                <div className="add-video__drop-menu-option white" onClick={() => { window.location.reload(); }}>Delete</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="add-playlist__main">

                    <div className="add-playlist__inputs">
                        {/* Update input fields with state values */}
                        <LogInput question={true} placeholder="Enter playlist name" type="email" label="Playlist name" id="playlist-name-input" value={playlistNameInput} setInputValue={setPlaylistNameInput} maxWidth={430}></LogInput>
                        <LogInput textarea={true} question={true} placeholder="Description" type="email" label="Description" id="playlist-description-input" value={playlistDescriptionInput} setInputValue={setPlaylistDescriptionInput} maxWidth={430}></LogInput>
                        <GreyDrop id="custom-dropdown"
                            label="Category"
                            selectedOption={selectedCategoryInput}
                            setSelectedOption={setSelectedCategoryInput}
                            options={options}
                            question={false}>
                        </GreyDrop>
                        {addedVideosList.map((addedVideo, index) => {
                            return (
                                <div className="add-playlist__added-video" key={index}>
                                    {addedVideo.video_name}
                                    <img
                                        src={removeIcon}
                                        className="add-playlist__remove-video"
                                        onClick={() => removeFromPlaylist(addedVideo)}
                                    />
                                </div>
                            );
                        })}


                        {/* Add a //console.log before the map function */}



                    </div>
                    {window.innerWidth < 650 && (
                        <div className="add-playlist__show-more" onClick={() => setShowAddVideoContainer(!showAddVideoContainer)}>
                            <button >
                                {showAddVideoContainer ? 'Hide selection' : 'Select video'}
                            </button>
                        </div>
                    )}
                    <div className={`add-playlist__add-video-container ${window.innerWidth < 650 ? (showAddVideoContainer ? 'visible' : 'hidden') : ''}`}>
                        <div
                            className='search active'
                            onClick={() => setInputVisible(true)}
                        >
                            <img src={searchIcon} alt="" className="search__icon" />
                            <input
                                type="text"
                                className='search__input active'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="add-playlist__videos">
                            {filteredVideos.length === 0 ? (
                                <p style={{ color: "#fff" }}>No matching videos found</p>
                            ) : (
                                filteredVideos.map((videoData, index) => {
                                    const isAdded = addedVideosList.some(addedVideo => addedVideo.video_id === videoData.video_id);
                                    return (
                                        <div className={`add-playlist__video-card-container ${isAdded ? 'added' : ''}`} key={index} onClick={() => { if (addedVideosList.some(addedVideo => addedVideo.video_id === videoData.video_id)) { removeFromPlaylist(videoData) } else { addToPlaylist(videoData) } }}>
                                            <img src={videoActiveIcon} alt="" className={`add-playlist__video-active ${isAdded ? 'added' : ''}`} />
                                            
                                            <VideoCard
                                                key={index}
                                                videoObj={videoData}
                                                videoIndex={index}
                                                cardSize="big"
                                                showControls="no"
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div >
    );
};

export default EditPlaylist;
