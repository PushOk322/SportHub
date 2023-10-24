import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './add-video.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addVideo } from '../../data/store/videoSlice';

import Header from '../../components/Page-Size-Components/Header';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import GreyDrop from '../../components/SmallComponents/DropDowns/GreyDrop';
import SuccessErrorCard from '../../components/MediumComponents/Cards/SuccessErrorCard';

import uploadIcon from '../../img/upload-big-icon.svg';
import threeDots from '../../img/dots-icon.svg';


import videoFileAsset from '../../img/videos/video.mp4';
import videoPreview from '../../img/video-preview-2.png';

const AddVideo = () => {
    const navigate = useNavigate();

    const storedUser = sessionStorage.getItem('currentUser');
    const parsedUser = JSON.parse(storedUser);
    // console.log("🚀 parsedUser:", parsedUser)


    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const fileInputRef = useRef(null);

    const handlePreviewInputClick = () => {
        if (filePreviewRef.current) {
            filePreviewRef.current.click();
        }
    };
    const filePreviewRef = useRef(null);


    const dispatch = useDispatch();
    const videoObj = useSelector(state => state.videos.videos);


    const handleVideoInputChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Store the video file in state
            setVideoFile(file);
            setVideoFieldsVisible(true);
            setVideo(true);

        }
    };

    const handleClick = async () => {
        // Navigate to the AddVideo page, you can implement this part
    };

    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file); // Store the image URL
    };

    const options = ["mind", "soul", "body"];

    const [videoMenu, setVideoMenu] = useState();

    const [video, setVideo] = useState(false);
    const [videoFieldsVisible, setVideoFieldsVisible] = useState(false);

    const [videoFile, setVideoFile] = useState(null);
    // //console.log("🚀 ~ file: AddVideo.jsx:56 ~ AddVideo ~ selectedVideo:", videoFile)
    const [selectedImage, setSelectedImage] = useState(null);
    const [videoTitle, setVideoTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    //console.log("🚀 ~ file: AddVideo.jsx:104 ~ AddVideo ~ selectedOption:", selectedOption)

    const [videoDescription, setVideoDescription] = useState('');
    const [videoShopLink, setVideoShopLink] = useState('');


    const [successErrorState, setSuccessErrorState] = useState(0);


    const handleUpload = async () => {
        //console.log("pressed");
        const formData = new FormData();
        formData.append('files', videoFile);

        let videoId; // Declare videoId here so it's accessible throughout the function

        try {
            const responseVideo = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formData);
            //console.log("upload of the Video is successful");
            videoId = responseVideo.data[0].id; // Assign the value here

            const formPreviewData = new FormData();
            formPreviewData.append('files', selectedImage);

            try {
                const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
                //console.log("upload of the Preview is successful");
                const previewId = responsePreview.data[0].id;

                try {




                    const responseInfo = await axios.post("https://paul-sporthub-app.onrender.com/api/videos", {
                        data: {
                            video_file: videoId,
                            video_name: videoTitle,
                            video_length: 1000,
                            video_type: selectedOption,
                            video_preview: previewId,
                            video_descripion: videoDescription,
                            video_shop_link: videoShopLink,
                            video_creator: {
                                set: [parsedUser[0].id]
                            }
                        }
                    });
                    //console.log("info creation success");
                    setSuccessErrorState(1);

                    setTimeout(() => {
                        setSuccessErrorState(0);


                        navigate("/CreatorMain");
                    }, 1000);
                } catch (error) {
                    //console.log("info creation error: ", error);
                }
            } catch (error) {
                //console.log("preview upload error: ", error);
            }
        } catch (error) {
            setSuccessErrorState(2);
            setTimeout(() => {
                setSuccessErrorState(0);
            }, 2000);
        }
    };

    return (
        <>
        <SuccessErrorCard popUpState={successErrorState}></SuccessErrorCard>
        <div className="wrapper" style={{ color: "white" }}>
            <Header videosButtons={true} />
            <div className="add-video">
                <div className="add-video__head">
                    <div className="add-video__head-title">
                        Adding a new video
                    </div>

                    <div className="add-video__head-buttons">
                        <button className={video ? "add-video__publish-button active" : "add-video__publish-button "} onClick={() => { handleUpload() }}>Publish</button>
                        <div className={video ? "add-video__menu-button active" : "add-video__menu-button"} onClick={() => { setVideoMenu(!videoMenu) }}>
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

                {!videoFieldsVisible ? ( // Display upload area if no video selected
                    <div className="add-video__upload">
                        <div className="add-video__upload">
                            <input
                                type="file"
                                className="add-video__upload-input"
                                accept="video/*"
                                onChange={handleVideoInputChange}
                                ref={fileInputRef} // Attach the ref to the file input
                                style={{ display: 'none' }} // Hide the file input
                            />
                            <div className="add-video__upload-statics">
                                <img src={uploadIcon} className="add-video__upload-static-img" alt="Upload Icon" />
                                <div className="add-video__upload-static-title">
                                    Drag and drop videos to upload
                                </div>
                                <div className="add-video__upload-static-button">
                                    <OrangeButton
                                        text="Or choose files"
                                        plus={false}
                                        marginTop={0}
                                        handleLogin={handleFileInputClick} // Pass the click handler here
                                        width={180}
                                    />
                                </div>
                                <div className="add-video__upload-static-title mobile">
                                    New video
                                </div>
                                <div className="add-video__upload-static-button mobile">
                                    <OrangeButton
                                        text="Choose files"
                                        plus={false}
                                        marginTop={0}
                                        handleLogin={handleFileInputClick} // Pass the click handler here
                                        width={180}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="add-video__player-container">

                        <video
                            controls
                            className="add-video__video-player"
                            src={URL.createObjectURL(videoFile)}

                        >
                            Your browser does not support the video tag.
                        </video>


                        <div className="add-video__fields">
                            <div className="add-video__inputs">
                                <LogInput question={true} placeholder="Video Name" type="email" label="Title" id="email-input" setInputValue={setVideoTitle} maxWidth={430}></LogInput>
                                <GreyDrop id="custom-dropdown"
                                    label="Category"
                                    selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption}
                                    options={options}
                                    question={false}></GreyDrop>
                                <LogInput textarea={true} question={true} placeholder="Description" type="email" label="Description" id="email-input" setInputValue={setVideoDescription} maxWidth={430}></LogInput>
                                <LogInput question={true} placeholder="Add link on product" type="email" label="Add Shopify link" id="email-input" setInputValue={setVideoShopLink} maxWidth={430}></LogInput>
                            </div>
                            <div className="add-video__preview-container">
                                <input
                                    type="file"
                                    className="add-video__preview-input"
                                    accept="image/*"
                                    ref={filePreviewRef}
                                    onChange={handleImageInputChange}
                                />
                                {!selectedImage ? (
                                    <div className="add-video__preview-static" >
                                        <img src={uploadIcon} alt="Upload Icon" className="add-video__preview-static-icon" />
                                        <div className="add-video__preview-static-title">Drag and drop photo to upload</div>
                                        <div className="add-video__preview-static-text">
                                            Information about adding a photo. Amet minim mollit non deserunt ullamco est sit
                                        </div>

                                        <div className="add-video__preview-static-title mobile">
                                            Upload the image preview
                                        </div>

                                        <div className="add-video__preview-button">
                                            <OrangeButton
                                                text="Choose files"
                                                plus={false}
                                                marginTop={0}
                                                handleLogin={handlePreviewInputClick} // Pass the click handler here
                                                width={180}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                                {selectedImage && (
                                    <div
                                        className="add-video__preview-image"
                                        style={{ backgroundImage: `url(${URL.createObjectURL(selectedImage)})` }}
                                    ></div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            </div >
        </>
    );
};

export default AddVideo;
