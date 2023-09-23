import React, { useState } from 'react';
import './password-input.scss';
import { Link } from 'react-router-dom';

import eyeIcon from '../../../img/eye-icon.svg';

const PasswordInput = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false); // Start with password hidden

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleInputChange = (event) => {
        props.setInputValue(event.target.value);
    };

    return (
        <>
            <div className="password-input__container">
                <div className="password-input__head">
                    <label htmlFor={props.id} className="password-input__label">
                        {props.label}
                    </label>
                    {props.forgot && (
                        <Link to="/ForgotPassword">
                            <div className="password-input__forgot">Forgot password?</div>
                        </Link>
                    )}
                </div>
                <div className="password-input__input-box">
                    <input
                        id={props.id}
                        type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
                        className="password-input__input"
                        placeholder={props.placeholder}
                        onChange={handleInputChange}
                    />
                    <img
                        src={eyeIcon}
                        alt=""
                        className={
                            passwordVisible
                                ? 'password-input__eye active'
                                : 'password-input__eye'
                        }
                        onClick={togglePasswordVisibility} // Call the toggle function on click
                    />
                </div>
            </div>
        </>
    );
};

export default PasswordInput;
