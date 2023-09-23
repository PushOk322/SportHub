import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../data/AuthContext.js'; // Import your AuthContext

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../../data/store/userSlice';
import { updateUser } from '../../data/store/userSlice';
import userSlice from '../../data/store/userSlice';

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


    const user = useSelector(state => state.users.users[0]);
    console.log("🚀 ~ file: PersonalInfo.jsx:32 ~ PersonalInfo ~  token:", user)



    const [backgroundImage, setBackgroundImage] = useState([]);
   
    console.log("🚀 ~ file: PersonalInfo.jsx:37 ~ PersonalInfo ~ backgroundImage:", backgroundImage)
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    // console.log("🚀 ~ file: PersonalInfo.jsx:39 ~ PersonalInfo ~ date:", date)
    

    const handleLogin = async () => {
        console.log('pressed');
        try {
            const formData = new FormData();
            formData.append('gender', gender);
            formData.append('date', date);
            formData.append('user_avatar', backgroundImage);
            // console.log("🚀 ~ file: PersonalInfo.jsx:47 ~ handleLogin ~ formData:", formData.user_avatar)

            
            const response = await axios.put(
                `http://localhost:1337/api/users/${user.id}`, // Update the URL to your API endpoint
                formData ,
                {
                    headers: {
                        Authorization: `Bearer ${user.jwt}`, // Include the JWT token in the headers
                    },
                }
            );

            // Handle successful update here
            console.log('Well done!');
            console.log('Updated user profile', response.data);

            // You can navigate to another page or perform other actions as needed
            navigate('/UserMain'); // Navigate to the appropriate page
        } catch (error) {
            // Handle update error here
            console.error('An error occurred:', error);
        }
    };





    function updateBackgroundImage(event) {
        const uploadedImage = event.target.files[0];
        if (uploadedImage) {
            setBackgroundImage(`url(${URL.createObjectURL(uploadedImage)})`);
            console.log("🚀 ~ file: PersonalInfo.jsx:37 ~ PersonalInfo ~ backgroundImage:", backgroundImage)
        }
    }

    const avatarBoxStyle = {
        backgroundImage,
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
