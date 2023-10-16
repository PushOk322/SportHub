import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUserSign } from '../../data/store/userSIgnSlice';

import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import PasswordInput from '../../components/SmallComponents/Inputs/PasswordInput';
import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogSideContent from '../../components/BigComponents/LogInComponents/LogSideContent';

import siteLogo from '../../img/site-logo.svg';

const SignUp = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let username = firstName + " " + lastName;

    const users = useSelector(state => state.users.users);
    //console.log("🚀 ~ file: LogIn.jsx:33 ~ LogIn ~ users:", users)
    const dispatch = useDispatch();

    const handleLogin = async () => {
        //console.log("pressed");
        try {
            const response = await axios.post('http://localhost:1337/api/auth/local/register', {
                username: username,
                email: email,
                password: password,
            });
            console.log("🚀 ~ file: SignUp.jsx:39 ~ handleLogin ~ response:", response.data)
            dispatch(loginUserSign(response.data));


            navigate('/PersonalInfo');
        } catch (error) {
           console.log("🚀 ~ file: SignUp.jsx:45 ~ handleLogin ~ error:", error)
           
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

                        <div className="login__title sign-up">Sign up</div>

                        <div className="login__box">
                            <LogInput placeholder="Your First Name" type="text" label="First Name" id="fisrtName-input" setInputValue={setFirstName}></LogInput>
                            <LogInput placeholder="Your Last Name" type="text" label="Last Name" id="lastName-input" setInputValue={setLastName}></LogInput>
                            <LogInput placeholder="Your Email" type="email" label="Email" id="email-input" setInputValue={setEmail}></LogInput>
                            <PasswordInput placeholder="Your password" label="Password" id="password-input" setInputValue={setPassword} forgot={false}></PasswordInput>
                        </div>

                        <OrangeButton text="Sign up" marginTop={0} handleLogin={handleLogin}></OrangeButton>

                        <div className="login__registration-link">
                            Already have an account?
                            <Link to="/LogIn">
                                Sign in
                            </Link>
                        </div>

                        <div className="login__terms sign-up">
                            By proceeding, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
                        </div>
                    </div>

                </div>

                {/*  */}
            </div>
        </>
    );
};

export default SignUp;
