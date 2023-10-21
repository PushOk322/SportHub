import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";


import useFetch from '../../hooks/UseFetch';

import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import PasswordInput from '../../components/SmallComponents/Inputs/PasswordInput';
import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogSideContent from '../../components/BigComponents/LogInComponents/LogSideContent';

import siteLogo from '../../img/site-logo.svg';

const NewPassword = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Extract the "code" parameter from the URL fragment
    const queryParams = new URLSearchParams(location.search);
    const fragmentCode = queryParams.get('code');
    //console.log(fragmentCode)
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://paul-sporthub-app.onrender.com/api/auth/reset-password', {
                code: fragmentCode,
                password: password,
                passwordConfirmation: passwordConfirm,
            });

            navigate("/LogIn");
        } catch (error) {
            //console.log('Password reset error:', error);
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="background-elipse log-1"></div>
                <div className="background-elipse log-2"></div>

                <div className="login">

                    <div className="login__left">
                        <LogSideContent></LogSideContent>
                    </div>

                    <div className="login__log-window">
                        <img src={siteLogo} alt="" className="login__logo" />

                        <div className="login__title restore">Restore password</div>

                        <div className="login__box">
                            <PasswordInput placeholder="New password" label="New Password" id="password-input" setInputValue={setPassword} forgot={false}></PasswordInput>
                            <PasswordInput placeholder="Confirm password" label="Confirm Password" id="password-input-confirm" setInputValue={setPasswordConfirm} forgot={false}></PasswordInput>
                        </div>

                        <OrangeButton text="Save" marginTop={0} handleLogin={handleLogin}></OrangeButton>

                    </div>

                </div>
            </div>
        </>
    );
};

export default NewPassword;
