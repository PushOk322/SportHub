import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../data/AuthContext.js'; // Import your AuthContext

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import useFetch from '../../hooks/UseFetch';

import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import PasswordInput from '../../components/SmallComponents/Inputs/PasswordInput';
import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogSideContent from '../../components/BigComponents/LogInComponents/LogSideContent';
import SuccessErrorCard from '../../components/MediumComponents/Cards/SuccessErrorCard';

import siteLogo from '../../img/site-logo.svg';
import imgUploadIcon from '../../img/img-upload-icon.svg';

const PersonalInfo = () => {
    const [successErrorState, setSuccessErrorState] = useState(0);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const userSign = useSelector(state => state.userSign.userSign[0]);
    // console.log("🚀 ~ file: PersonalInfo.jsx:30 ~ PersonalInfo ~ userSign:", userSign)
    //console.log("🚀 ~ file: PersonalInfo.jsx:32 ~ PersonalInfo ~  token:", user)



    const [backgroundImage, setBackgroundImage] = useState(null);

    //console.log("🚀 ~ file: PersonalInfo.jsx:37 ~ PersonalInfo ~ backgroundImage:", backgroundImage)
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    console.log("🚀 ~ file: PersonalInfo.jsx:40 ~ PersonalInfo ~ date:", date)



    const handleLogin = async () => {
        const parts = date.split('-');

        const newDateVar = `${parts[1]}-${parts[2]}-${parts[0]}`;
        console.log("🚀newDateVar:", newDateVar);

        const formPreviewData = new FormData();
        formPreviewData.append('files', backgroundImage);

        let previewId;

        try {
            const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
            //   console.log("upload of the Preview is successful", responsePreview);
            previewId = responsePreview.data[0].id;
            //   console.log("🚀 ~ file: PersonalInfo.jsx:54 ~ handleLogin ~ previewId:", previewId);
            const formDataInfo = new FormData();

            // formData.append('user_avatar', previewId);
            // formData.append('user_cover', coverId);
            formDataInfo.append('date_of_birth', date);
            formDataInfo.append('user_gender', gender);

            try {
                const responseInfo = await axios.put(`https://paul-sporthub-app.onrender.com/api/users/${userSign.user_id}`,formDataInfo , {
                    headers: {
                        Authorization: `Bearer ${userSign.jwt}`,
                    },
                });
                setSuccessErrorState(1);

                setTimeout(() => {
                    setSuccessErrorState(0);
                    navigate("/LogIn");
                }, 1000);
            } catch (error) {
                console.error("info creation error: ", error);
            }
        } catch (error) {
            setSuccessErrorState(2);
            setTimeout(() => {
                setSuccessErrorState(0);
                console.error("preview upload error: ", error);
            }, 2000);
        }
    };


    const handleBack = () => { 
        navigate(-1);
    }



    function updateBackgroundImage(event) {
        const uploadedImage = event.target.files[0];
        setBackgroundImage(uploadedImage); // Store the image URL
    }

    const avatarBoxStyle = {
        backgroundImage: backgroundImage === null ? '#FFF' : `url(${URL.createObjectURL(backgroundImage)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>
            <SuccessErrorCard popUpState={successErrorState}></SuccessErrorCard>

            <div className="wrapper">
                <div className="personal-info__progress-bar">
                    <div className="personal-info__progress-thumb"></div>
                </div>

                <div className="personal-info">
                    <div className="personal-info__title">Personal Information</div>
                    <div className="personal-info__avatar-box">
                        <div className="personal-info__avatar-upload-box" style={avatarBoxStyle}>
                            <input type="file" className="personal-info__avatar-input" onChange={updateBackgroundImage} />
                            <img src={imgUploadIcon} alt="" className="personal-info__upload-icon" />
                        </div>
                        <div className="personal-info__avatar-text-box">
                            <div className="personal-info__avatar-title">
                                Information about adding photo
                            </div>
                            <div className="personal-info__avatar-description">
                                Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </div>
                        </div>
                    </div>
                    <div className="personal-info__gender">
                        <div className="personal-info__heading">Gender</div>
                        <div className="personal-info__gender-container">
                            <div className="personal-info__gender-item" onClick={() => { setGender("male") }}>
                                <div className={gender === "male" ? 'personal-info__gender-radio active' : 'personal-info__gender-radio'}></div>
                                <div className="personal-info__gender-text">Male</div>
                            </div>
                            <div className="personal-info__gender-item" onClick={() => { setGender("female") }}>
                                <div className={gender === "female" ? 'personal-info__gender-radio active' : 'personal-info__gender-radio'}></div>
                                <div className="personal-info__gender-text">Female</div>
                            </div>
                            <div className="personal-info__gender-item" onClick={() => { setGender("none") }}>
                                <div className={gender === "none" ? 'personal-info__gender-radio active' : 'personal-info__gender-radio'} ></div>
                                <div className="personal-info__gender-text">None</div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info__date-container">
                        <LogInput placeholder="MM.DD.YYYY" type="date" label="Date of birthday" id="email-input" setInputValue={setDate}></LogInput>
                    </div>
                    <div className="personal-info__buttons">
                        <OrangeButton back={true} text="Back" marginTop={0} handleLogin={handleBack}></OrangeButton>
                        <OrangeButton text="Next" marginTop={0} handleLogin={handleLogin}></OrangeButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;
