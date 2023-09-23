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
const AddPlaylist = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const videoObj = useSelector(state => state.videos.videos);

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

    const addToPlaylist = (video) => {
        if (!addedVideos.some(addedVideo => addedVideo.video_id === video.video_id)) {

            setAddedVideos([...addedVideos, video]);
            console.log("🚀 ~ file: AddPlaylist.jsx:126 ~ addToPlaylist ~ addedVideos:", addedVideos)
        }
    };

    const removeFromPlaylist = (video) => {
        const updatedPlaylist = addedVideos.filter(addedVideo => addedVideo.id !== video.id);
        setAddedVideos(updatedPlaylist);
    };

    const [addedVideos, setAddedVideos] = useState([]);

    const options = ["mind", "soul", "body"];
    const [selectedCategory, setSelectedCategory] = useState('');
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');

    const handleUpload = async () => {

        try {
            const response = await axios.post("http://localhost:1337/api/playlists", {
                data: {
                    playlist_name: playlistName,
                    playlist_description: playlistDescription,
                    playlist_type: selectedCategory,
                }
            });
            console.log("info creation success", response);
            let playlistId = response.data.data.id;
            const videoIds = addedVideos.map(video => video.video_id);
            console.log("🚀 ~ file: AddPlaylist.jsx:102 ~ handleUpload ~ videoIds:", videoIds)
            try {
                const responseRelation = await axios.put(`http://localhost:1337/api/playlists/${playlistId}`, {
                    data: {
                        videos: {
                            set: videoIds,
                        }
                    }
                });
                console.log("info creation success");

            } catch (error) {
                console.log("info creation error: ", error);
            }
        } catch (error) {
            console.log("info creation error: ", error);
        }
    };

    const [showAddVideoContainer, setShowAddVideoContainer] = useState(false);

    // Control the number of displayed added videos
    const maxDisplayedVideos = 3; // Change this number as needed

    return (
        <div className="wrapper" style={{ color: "white" }}>
            <Header videosButtons={true} />
            <div className="add-playlist">
                <div className="add-video__head">
                    <div className="add-video__head-title">
                        Create new playlist
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
                    <div className={`add-playlist__inputs ${window.innerWidth < 650 ? (showAddVideoContainer ? 'hidden' : 'visible') : ''}`}>
                        <LogInput question={true} placeholder="Enter playlist name" type="email" label="Playlist name" id="email-input" setInputValue={setPlaylistName} maxWidth={430}></LogInput>
                        <LogInput textarea={true} question={true} placeholder="Description" type="email" label="Description" id="email-input" setInputValue={setPlaylistDescription} maxWidth={430}></LogInput>
                        <GreyDrop id="custom-dropdown"
                            label="Category"
                            selectedOption={selectedCategory}
                            setSelectedOption={setSelectedCategory}
                            options={options}
                            question={false}>
                        </GreyDrop>
                        {window.innerWidth > 650 && addedVideos.length > 0 && (
                            <div className="add-playlist__added-videos">
                                <div className="add-playlist__add-video-heading">Selected</div>
                                <div className="add-playlist__added-videos-container">
                                    {addedVideos.slice(0, maxDisplayedVideos).map((addedVideo, index) => (
                                        <div className="add-playlist__added-video" key={index}>
                                            {addedVideo.video_name}
                                            <img src={removeIcon} className="add-playlist__remove-video" onClick={() => removeFromPlaylist(addedVideo)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {window.innerWidth < 650 && (
                        <div className="add-playlist__show-more"onClick={() => setShowAddVideoContainer(!showAddVideoContainer)}>
                            <button >
                                {showAddVideoContainer ? 'Hide selection' : 'Select video'}
                            </button>
                        </div>
                    )}
                    {window.innerWidth < 650 && addedVideos.length > 0 && (
                        <div className="add-playlist__added-videos mobile">
                            <div className="add-playlist__add-video-heading mobile">Selected</div>
                            <div className="add-playlist__added-videos-container mobile">
                                {": "+ addedVideos.length}
                            </div>
                        </div>
                    )}
                    <div
                        className={`add-playlist__add-video-container ${window.innerWidth < 650 ? (showAddVideoContainer ? 'visible' : 'hidden') : ''}`}
                    >
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
                                    const isAdded = addedVideos.some(addedVideo => addedVideo.video_id === videoData.video_id);
                                    return (
                                        <div className={`add-playlist__video-card-container ${isAdded ? 'added' : ''}`} key={index} onClick={() => { if (addedVideos.some(addedVideo => addedVideo.video_id === videoData.video_id)) { removeFromPlaylist(videoData) } else { addToPlaylist(videoData) } }}>
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
            <div className="height"></div>
        </div >
    );
};

export default AddPlaylist;
