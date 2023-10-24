import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './edit-profile.scss';
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
import uploadIconBrown from '../../img/upload-icon-brown.svg';
import threeDots from '../../img/dots-icon.svg';
import checkIcon from '../../img/check-icon.svg';

import trashIcon from '../../img/trash-icon.svg';

import videoFileAsset from '../../img/videos/video.mp4';
import videoPreview from '../../img/video-preview-2.png';

const EditProfile = () => {
    const [successErrorState, setSuccessErrorState] = useState(0);

    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        setProfilePreview(file); // Store the image URL
    };

    function changeImagePreview() {
        setProfilePreview(null);

        // Activate the input for adding a new file
        const fileInput = document.querySelector(".edit-profile__preview-input.preview");
        // fileInput.value = null; // Clear the selected file in the input (important for some browsers)

        fileInput.click();
    }

    function deleteImagePreview() {
        // Implement logic to delete the chosen photo and reset the text section.
        // You can remove the current image, reset the file input, and set the initial text here.
        setProfilePreview(null); // Reset profileCover to null to remove the current image
    }

    function handleCoverInputChange(event) {
        const file = event.target.files[0];
        setProfileCover(file); // Store the image file in state
    }

    function changeImage() {
        setProfileCover(null);

        // Activate the input for adding a new file
        const fileInput = document.querySelector(".edit-profile__preview-input.cover");
        // fileInput.value = null; // Clear the selected file in the input (important for some browsers)
        fileInput.click();
    }

    function deleteImage() {
        // Implement logic to delete the chosen photo and reset the text section.
        // You can remove the current image, reset the file input, and set the initial text here.
        setProfileCover(null); // Reset profileCover to null to remove the current image
    }


    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userObj = useSelector(state => state.users.users);
    console.log("🚀 ~ file: EditProfile.jsx:89 ~ EditProfile ~ userObj:", userObj)

    // Define the function to get and validate the stored playlist data
    const getStoredUser = () => {
        try {
            // Check if currentUser is available in Redux
            const currentUser = useSelector(state => state.users.users);
            if (currentUser && currentUser.length > 0) {
                // Save currentUser to local storage
                sessionStorage.setItem(`currentUser`, JSON.stringify(currentUser));
                return currentUser; // Return the Redux data
            } else {
                // If not available in Redux, check local storage
                const storedUser = sessionStorage.getItem('currentUser');
                if (storedUser) {
                    // Parse the stored data
                    const parsedUser = JSON.parse(storedUser);
                    // Use the stored playlist
                    // You can update the Redux state here if needed
                    return parsedUser;
                } else {
                    // If not available in Redux or local storage, return null
                    return null;
                }
            }
        } catch (error) {
            setSuccessErrorState(2);
            setTimeout(() => {
                setSuccessErrorState(0);
            }, 2000);
            return null; // Return null in case of an error
        }
    };

    // Call the function to get the stored playlist data
    const storedUser = getStoredUser();

    // Now you can access the properties of the stored playlist
    const currentProfilePreview = storedUser ? storedUser[0].user_avatar : "No info";
    console.log("🚀 ~ file: EditProfile.jsx:108 ~ EditProfile ~ currentProfilePreview:", currentProfilePreview)
    const currentProfileCover = storedUser ? storedUser[0].user_cover : "No info";
    const currentProfileFirstName = storedUser ? storedUser[0].user_first_name : "No info";
    const currentProfileGender = storedUser ? storedUser[0].user_gender : "No info";
    const currentProfileLastName = storedUser ? storedUser[0].user_last_name : "No info";
    const currentProfileDate = storedUser ? storedUser[0].date_of_birth : "No info";
    const currentProfileAddress = storedUser ? storedUser[0].user_address : "No info";
    const currentProfileLLC = storedUser ? storedUser[0].user_LLC : "No info";
    const currentProfileDescription = storedUser ? storedUser[0].user_description : "No info";
    const currentProfileVimeo = storedUser ? storedUser[0].user_vimeo : "No info";
    const currentProfileInstagram = storedUser ? storedUser[0].user_instagram : "No info";
    const currentProfileFacebook = storedUser ? storedUser[0].user_facebook : "No info";
    const currentProfileTwitter = storedUser ? storedUser[0].user_twitter : "No info";

    const [profilePreview, setProfilePreview] = useState('');
    const [profileCover, setProfileCover] = useState('');
    const [profileFirstName, setProfileFirstName] = useState(currentProfileFirstName || '');
    const [profileGender, setProfileGender] = useState(currentProfileGender || '');
    const [profileLastName, setProfileLastName] = useState(currentProfileLastName || '');
    const [profileDate, setProfileDate] = useState(currentProfileDate || '');
    const [profileAddress, setProfileAddress] = useState(currentProfileAddress || '');
    const [profileLLC, setProfileLLC] = useState(currentProfileLLC || '');
    const [profileDescription, setProfileDescription] = useState(currentProfileDescription || '');
    const [profileVimeo, setProfileVimeo] = useState(currentProfileVimeo || '');
    const [profileInstagram, setProfileInstagram] = useState(currentProfileInstagram || '');
    const [profileFacebook, setProfileFacebook] = useState(currentProfileFacebook || '');
    const [profileTwitter, setProfileTwitter] = useState(currentProfileTwitter || '');





    const handleUpload = async () => {
        //console.log("pressed");

        const formPreviewData = new FormData();
        formPreviewData.append('files', profilePreview);

        if (profilePreview !== '') {
            const formPreviewData = new FormData();
            formPreviewData.append('files', profilePreview);

            try {
                const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
                const previewId = responsePreview.data[0].id;
                // Only append user_avatar if profilePreview is not empty
                formData.append('user_avatar', previewId);
            } catch (error) {
                setSuccessErrorState(2);
                setTimeout(() => {
                    setSuccessErrorState(0);
                    console.log("preview upload error: ", error);
                }, 2000);
            }
        }

        // Check if profileCover is not empty
        if (profileCover !== '') {
            const formCoverData = new FormData();
            formCoverData.append('files', profileCover);

            try {
                const responseCover = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formCoverData);
                const coverId = responseCover.data[0].id;
                // Only append user_cover if profileCover is not empty
                formData.append('user_cover', coverId);
            } catch (error) {
                setSuccessErrorState(2);
                setTimeout(() => {
                    setSuccessErrorState(0);
                    console.log("cover upload error: ", error);
                }, 2000);
            }
        }
        // try {
        //     const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
        //     //console.log("upload of the Preview is successful");
        //     const previewId = responsePreview.data[0].id;

        //     const formCoverData = new FormData();
        //     formCoverData.append('files', profileCover);

        //     try {
        // const responseCover = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formCoverData);
        // //console.log("upload of the Cover is successful");
        // const coverId = responseCover.data[0].id;


        const formData = new FormData();

        // formData.append('user_avatar', previewId);
        // formData.append('user_cover', coverId);
        formData.append('user_first_name', profileFirstName);
        formData.append('user_last_name', profileLastName);
        formData.append('date_of_birth', profileDate);
        formData.append('user_address', profileAddress);
        formData.append('user_LLC', profileLLC);
        formData.append('user_description', profileDescription);
        formData.append('user_vimeo', profileVimeo);
        formData.append('user_instagram', profileInstagram);
        formData.append('user_facebook', profileFacebook);
        formData.append('user_twitter', profileTwitter);


        try {
            const responseInfo = await axios.put(`https://paul-sporthub-app.onrender.com/api/users/${userObj[0].id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${userObj[0].jwt}`, // Include the JWT token in the headers
                    },
                }
            );
            console.log("info update success", responseInfo);
            setSuccessErrorState(1);

            setTimeout(() => {
                setSuccessErrorState(0);


                navigate("/Playlists");
            }, 1000);
        } catch (error) {
            setSuccessErrorState(2);
            setTimeout(() => {
                setSuccessErrorState(0);
            }, 2000);
        }
        //     } catch (error) {
        //         console.log("cover upload error: ", error);
        //     }
        // } catch (error) {
        //     console.log("preview upload error: ", error);
        // }
    };



    return (
        <>
            <SuccessErrorCard popUpState={successErrorState}></SuccessErrorCard>
            <div className="wrapper" style={{ color: "white" }}>
                <Header videosButtons={true} />
                <div className="edit-profile">
                    <div className="edit-profile__head">
                        <div className="edit-profile__head-title">
                            Edit profile
                        </div>
                        <div className="edit-profile__save-button">
                            <OrangeButton text="Save" plus={false} marginTop={0} handleLogin={handleUpload} width={180}></OrangeButton>
                        </div>
                    </div>
                    <div className="edit-profile__line"></div>
                    <div className="edit-profile__fields">
                        <div className="edit-profile__img-row">
                            <div className="edit-profile__preview">
                                <div className="edit-profile__preview-container">
                                    <input
                                        type="file"
                                        className="edit-profile__preview-input preview"
                                        accept="image/*"
                                        onChange={handleImageInputChange}
                                    />

                                    {profilePreview ? (
                                        <div
                                            className="edit-profile__preview-image"
                                            style={{ backgroundImage: `url(${URL.createObjectURL(profilePreview)})` }}
                                        ></div>
                                    ) : (
                                        <div
                                            className="edit-profile__preview-image"
                                            style={{ backgroundImage: `url(${currentProfilePreview})` }}
                                        ></div>
                                    )}

                                </div>
                                {profilePreview ? (
                                    <div className="edit-profile__when-chosen">
                                        <div className="edit-profile__when-chosen-container">
                                            <div className="edit-profile__when-chosen-file-name">
                                                <img src={checkIcon} alt="" className="edit-profile__when-chosen-check-icon" />
                                                {profilePreview.name}
                                            </div>
                                            <button className="edit-profile__when-chosen-cheange-button" onClick={changeImagePreview}>Change File</button>
                                        </div>
                                        <button className="edit-profile__when-chosen-delete-button" onClick={deleteImagePreview}>
                                            <img src={trashIcon} alt="" className="edit-profile__when-chosen-trash-icon" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="edit-profile__preview-texts" id="imagePreviewTexts">
                                        <div className="edit-profile__preview-texts-title">Information about adding photo</div>
                                        <div className="edit-profile__preview-texts-description">
                                            Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="edit-profile__preview">
                                <div className="edit-profile__preview-container">
                                    <input
                                        type="file"
                                        className="edit-profile__preview-input cover"
                                        accept="image/*"
                                        onChange={handleCoverInputChange}
                                    />

                                    <div className="edit-profile__cover-template">
                                        {profileCover ? (
                                            <div
                                                className="edit-profile__preview-image cover"
                                                style={{ backgroundImage: `url(${URL.createObjectURL(profileCover)})` }}
                                            ></div>
                                        ) : (
                                            <div
                                                className="edit-profile__preview-image cover"
                                                style={{ backgroundImage: `url(${currentProfileCover})` }}
                                            ></div>
                                        )}



                                        <div className={`edit-profile__cover-line ${profileCover && "active"}`}>

                                        </div>
                                        <div className="edit-profile__cover-line-container">
                                            <div className={`edit-profile__cover-line small ${profileCover && "active"}`}>

                                            </div>
                                            <div className={`edit-profile__cover-line small ${profileCover && "active"}`}>

                                            </div>
                                            <div className={`edit-profile__cover-line small ${profileCover && "active"}`}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {profileCover ? (
                                    <div className="edit-profile__when-chosen">
                                        <div className="edit-profile__when-chosen-container">
                                            <div className="edit-profile__when-chosen-file-name">
                                                <img src={checkIcon} alt="" className="edit-profile__when-chosen-check-icon" />
                                                {profileCover.name}
                                            </div>
                                            <button className="edit-profile__when-chosen-cheange-button" onClick={changeImage}>Change File</button>
                                        </div>
                                        <button className="edit-profile__when-chosen-delete-button" onClick={deleteImage}>
                                            <img src={trashIcon} alt="" className="edit-profile__when-chosen-trash-icon" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="edit-profile__preview-texts" id="imagePreviewTexts">
                                        <div className="edit-profile__preview-texts-title">Information about adding cover</div>
                                        <div className="edit-profile__preview-texts-description">
                                            Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                        </div>
                                    </div>

                                )}

                            </div>
                        </div>



                        <div className="edit-profile__inputs">
                            <div className="edit-profile__input-row">
                                <LogInput value={profileFirstName} setInputValue={setProfileFirstName} question={false} placeholder="Your First Name" type="text" label="First Name" id="store-name-input" maxWidth={436} width={100}></LogInput>
                                <div className="edit-profile__gender-box">
                                    <div className="edit-profile__gender-label">
                                        Gender
                                    </div>
                                    <div className="edit-profile__gender-container">
                                        <div className="edit-profile__gender-item" onClick={() => { setProfileGender("male") }}>
                                            <div className={profileGender === "male" ? 'edit-profile__gender-radio active' : 'edit-profile__gender-radio'}></div>
                                            <div className="edit-profile__gender-text">Male</div>
                                        </div>
                                        <div className="edit-profile__gender-item" onClick={() => { setProfileGender("female") }}>
                                            <div className={profileGender === "female" ? 'edit-profile__gender-radio active' : 'edit-profile__gender-radio'}></div>
                                            <div className="edit-profile__gender-text">Female</div>
                                        </div>
                                        <div className="edit-profile__gender-item" onClick={() => { setProfileGender("none") }}>
                                            <div className={profileGender === "none" ? 'edit-profile__gender-radio active' : 'edit-profile__gender-radio'} ></div>
                                            <div className="edit-profile__gender-text">None</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="edit-profile__input-row">
                                <LogInput value={profileLastName} setInputValue={setProfileLastName} question={false} placeholder="Your Last Name" type="text" label="Last Name" id="store-name-input" maxWidth={436} width={100}></LogInput>
                                <LogInput value={profileDate} setInputValue={setProfileDate} placeholder="MM.DD.YYYY" type="date" label="Date of birthday" id="email-input" maxWidth={436} width={100}></LogInput>
                            </div>
                            <div className="edit-profile__input-row">
                                <LogInput value={profileAddress} setInputValue={setProfileAddress} question={false} placeholder="Your Address" type="text" label="Address" id="store-name-input" maxWidth={436} width={100}></LogInput>
                                <LogInput value={profileLLC} setInputValue={setProfileLLC} question={false} placeholder="Your LLC" type="text" label="LLC" id="store-name-input" maxWidth={436} width={100}></LogInput>
                            </div>
                            <div className="edit-profile__input-row">
                                <LogInput value={profileDescription} setInputValue={setProfileDescription} question={false} placeholder="Your Description" type="text" label="Description" id="store-name-input" maxWidth={920} width={100}></LogInput>
                            </div>
                            <div className="edit-profile__input-row">
                                <LogInput value={profileVimeo} setInputValue={setProfileVimeo} question={false} placeholder="Add your Vimeo account" type="text" label="Vimeo account" id="store-name-input" maxWidth={436} width={100}></LogInput>
                                <LogInput value={profileInstagram} setInputValue={setProfileInstagram} question={false} placeholder="Add your Instagram account" type="text" label="Instagram account" id="store-name-input" maxWidth={436} width={100}></LogInput>
                            </div>
                            <div className="edit-profile__input-row">
                                <LogInput value={profileFacebook} setInputValue={setProfileFacebook} question={false} placeholder="Add your Facebook  account" type="text" label="Facebook  account" id="store-name-input" maxWidth={436} width={100}></LogInput>
                                <LogInput value={profileTwitter} setInputValue={setProfileTwitter} question={false} placeholder="Add your Twitter account" type="text" label="Twitter account" id="store-name-input" maxWidth={436} width={100}></LogInput>
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </>
    );
};

export default EditProfile;
