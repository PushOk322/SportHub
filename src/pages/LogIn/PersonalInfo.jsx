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

import siteLogo from '../../img/site-logo.svg';
import imgUploadIcon from '../../img/img-upload-icon.svg';

const PersonalInfo = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const userSign = useSelector(state => state.userSign.userSign[0]);
    console.log("🚀 ~ file: PersonalInfo.jsx:30 ~ PersonalInfo ~ userSign:", userSign)
    //console.log("🚀 ~ file: PersonalInfo.jsx:32 ~ PersonalInfo ~  token:", user)



    const [backgroundImage, setBackgroundImage] = useState(null);

    //console.log("🚀 ~ file: PersonalInfo.jsx:37 ~ PersonalInfo ~ backgroundImage:", backgroundImage)
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    // //console.log("🚀 ~ file: PersonalInfo.jsx:39 ~ PersonalInfo ~ date:", date)


    const handleLogin = async () => {

        const formPreviewData = new FormData();
        formPreviewData.append('files', backgroundImage);

        try {
            const responsePreview = await axios.post("https://paul-sporthub-app.onrender.com/api/upload", formPreviewData);
            //console.log("upload of the Preview is successful");
            const previewId = responsePreview.data[0].id;

            try {




                const responseInfo = await axios.put(`https://paul-sporthub-app.onrender.com/api/users/${userSign.user_id}`, {
                    data: {
                        user_gender: gender,
                        user_avatar: previewId,
                        date_of_birth: date,
                    }
                },
                    {
                        headers: {
                            Authorization: `Bearer ${userSign.jwt}`, // Include the JWT token in the headers
                        },
                    });
                //console.log("info creation success");
                navigate("/LogIn");
            } catch (error) {
                //console.log("info creation error: ", error);
            }
        } catch (error) {
            //console.log("preview upload error: ", error);
        }
    };







    function updateBackgroundImage(event) {
        const uploadedImage = event.target.files[0];
        setBackgroundImage(uploadedImage); // Store the image URL
    }

    const avatarBoxStyle = {
        backgroundImage: backgroundImage === null ?   '#FFF':`url(${URL.createObjectURL(backgroundImage)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>
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
                        <OrangeButton back={true} text="Back" marginTop={0} ></OrangeButton>
                        <OrangeButton text="Next" marginTop={0} handleLogin={handleLogin}></OrangeButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;
