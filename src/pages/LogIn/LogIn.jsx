import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useNavigate } from "react-router-dom";


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../data/store/userSlice';


import LogInput from '../../components/SmallComponents/Inputs/LogInput';
import PasswordInput from '../../components/SmallComponents/Inputs/PasswordInput';
import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';
import LogSideContent from '../../components/BigComponents/LogInComponents/LogSideContent';

import siteLogo from '../../img/site-logo.svg';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();


    // const { login } = useAuth(); // Use the signUp function directly from AuthContext

    const users = useSelector(state => state.users.users);
    console.log("🚀 ~ file: LogIn.jsx:33 ~ LogIn ~ users:", users)
    const dispatch = useDispatch();

    // const loginUser = () => {
        
    // }



   


    const handleLogin = async () => {
        console.log("pressed");
        try {
            const response = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password,
            });
            // Handle successful login here
            console.log('Logged in:', response.data);


            console.log('User Avatar', response.data.user_avatar);



            dispatch(loginUser(response.data));



            if (response.data.user.customer_role === "user") {
                navigate("/UserMain");
            } else if (response.data.user.customer_role === "creator") {
                navigate("/CreatorMain");
            }
        } catch (error) {
            // Handle login error here
            console.error('Login error:', error);
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

                        <div className="login__title">Sign in</div>

                        <div className="login__box">
                            <LogInput placeholder="Your Email" type="email" label="Email" id="email-input" setInputValue={setEmail}></LogInput>
                            <PasswordInput placeholder="Your password" label="Password" id="password-input" setInputValue={setPassword} forgot={true}></PasswordInput>
                        </div>

                        <OrangeButton text="Sign in" marginTop={0} handleLogin={handleLogin}></OrangeButton>

                        <div className="login__registration-link">
                            Don’t have an account?
                            <Link to="/SignUp">
                                Sign up
                            </Link>
                        </div>

                        <div className="login__terms">
                            By proceeding, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
                        </div>
                    </div>

                </div>

                {/* <div className="height"></div> */}
            </div>
        </>
    );
};

export default LogIn;
