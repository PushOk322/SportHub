import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useNavigate } from "react-router-dom";


import useFetch from '../../hooks/UseFetch';

import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import PasswordInput from '../../components/SmallComponents/Inputs/PasswordInput';
import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogSideContent from '../../components/BigComponents/LogInComponents/LogSideContent';

import siteLogo from '../../img/site-logo.svg';

const ForgotPassword = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const handlePass = async () => {
        console.log("pressed");
        try {
            const response = await axios.post('http://localhost:1337/api/auth/forgot-password', {
                email: email,
            });

            //tishkovets.pavlo@gmail.com
            console.log(response)

            setStep(2);
        } catch (error) {
            console.log(email)
            // Handle login error here
            alert('Login error:', error.response);
        }
    };



    const [step, setStep] = useState(1);

    return (
        <>
            <div className="wrapper">
                <div className="background-elipse log-1"></div>
                <div className="background-elipse log-2"></div>

                <div className="login">

                    <div className="login__left">
                        <LogSideContent></LogSideContent>
                    </div>

                    <div className="login__log-window forgot">
                        <img src={siteLogo} alt="" className="login__logo" />

                        <div className={step === 1 ? "login__forgot-step active" : "login__forgot-step"}>

                            <div className="login__title forgot">Forgot your password?</div>
                            <div className="login__undertitle">Enter your email address and we'll send you instructions
                                on how to reset your password</div>

                            <div className="login__box">
                                <LogInput placeholder="Your Email" type="email" label="Email" id="email-input" setInputValue={setEmail}></LogInput>
                            </div>

                            <OrangeButton text="Send Email" marginTop={0} handleLogin={handlePass}></OrangeButton>

                        </div>

                        <div className={step === 2 ? "login__forgot-step active" : "login__forgot-step"}>

                            <div className="login__title check">Please check your inbox</div>
                            <div className="login__undertitle">Check your email <span>{email}</span> for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.</div>
                            <div className="login__receive-fail">
                                Didn't receive the email? <div>Go to Support</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
