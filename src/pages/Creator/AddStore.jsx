import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './add-store.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addVideo } from '../../data/store/videoSlice';

import Header from '../../components/Page-Size-Components/Header';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import GreyDrop from '../../components/SmallComponents/DropDowns/GreyDrop';

import uploadIcon from '../../img/upload-big-icon.svg';
import threeDots from '../../img/dots-icon.svg';


import videoFileAsset from '../../img/videos/video.mp4';
import videoPreview from '../../img/video-preview-2.png';

const AddStore = () => {
    const navigate = useNavigate();



    const dispatch = useDispatch();
    const storeObj = useSelector(state => state.stores.stores);

    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file); // Store the image URL
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [storeTitle, setStoreTitle] = useState('');
    const [storeDescription, setStoreDescription] = useState('');
    const [storeShopLink, setStoreShopLink] = useState('');





    const handleUpload = async () => {
        //console.log("pressed");


        const formPreviewData = new FormData();
        formPreviewData.append('files', selectedImage);

        try {
            const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
            //console.log("upload of the Preview is successful");
            const previewId = responsePreview.data[0].id;

            try {
                const responseInfo = await axios.post("https://paul-sporthub-app.onrender.com/api/stores", {
                    data: {
                        store_name: storeTitle,
                        store_preview: previewId,
                        store_description: storeDescription,
                        store_link: storeShopLink,
                    }
                });
                //console.log("info creation success");
                navigate("/Stores");
            } catch (error) {
                //console.log("info creation error: ", error);
            }
        } catch (error) {
            //console.log("preview upload error: ", error);
        }
    };

    return (
        <div className="wrapper" style={{ color: "white" }}>
            <Header videosButtons={true} />
            <div className="add-store">
                <div className="add-store__head">
                    <div className="add-store__head-title">
                        Adding store
                    </div>
                    <div className="add-store__save-button">
                        <OrangeButton text="Save" plus={false} marginTop={0} handleLogin={handleUpload} width={180}></OrangeButton>
                    </div>
                </div>
                <div className="add-store__fields">
                    <div className="add-store__preview">
                        <div className="add-store__preview-container">
                            <input
                                type="file"
                                className="add-store__preview-input"
                                accept="image/*"
                                onChange={handleImageInputChange}
                            />

                            {!selectedImage ? (
                                <div className="add-store__preview-static" >
                                    <img src={uploadIcon} alt="Upload Icon" className="add-store__preview-static-icon" />
                                </div>
                            ) : null}
                            {selectedImage && (
                                <div
                                    className="add-store__preview-image"
                                    style={{ backgroundImage: `url(${URL.createObjectURL(selectedImage)})` }}
                                ></div>
                            )}
                        </div>
                        <div className="add-store__preview-texts">
                            <div className="add-store__preview-texts-title">Information about adding photo</div>
                            <div className="add-store__preview-texts-description">Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </div>
                        </div>
                    </div>
                    <div className="add-store__inputs">
                        <LogInput question={false} placeholder="Store title" type="text" label="Store title" id="store-name-input" setInputValue={setStoreTitle} maxWidth={436}></LogInput>
                        <LogInput question={false} placeholder="Store link" type="text" label="Store link" id="store-link-input" setInputValue={setStoreDescription} maxWidth={436}></LogInput>
                        <LogInput textarea={true} question={false} placeholder="Description" type="text" label="Description" id="store-desc-input" setInputValue={setStoreShopLink} maxWidth={436}></LogInput>
                    </div>

                </div>

            </div>
            
        </div >
    );
};

export default AddStore;
