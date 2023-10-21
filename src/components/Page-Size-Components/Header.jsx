import React, { useState, useEffect } from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Search from '../SmallComponents/Inputs/Search';

import siteLogo from '../../img/site-logo.svg';
import notifyIcon from '../../img/notification-icon.svg';
import editIcon from '../../img/edit-icon.svg';
import diamondIcon from '../../img/diamond-icon.svg';
import logoutIcon from '../../img/logout-icon.svg';
import userAvatar from '../../img/creator-avatar.svg';

import OrangeButton from '../SmallComponents/Buttons/OrangeButton';
import { logoutUser } from '../../data/store/userSlice';


const Header = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    // const user = useSelector(state => state.users.users[0]);
    const userObj = useSelector(state => state.users.users);
    // console.log("🚀 ~ file: EditProfile.jsx:89 ~ EditProfile ~ userObj:", userObj)

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
            // Handle any errors here if needed
            console.error(error);
            return null; // Return null in case of an error
        }
    };

    // Call the function to get the stored playlist data
    const storedUser = getStoredUser();



    const currentProfileRole = storedUser ? storedUser[0].user_role : null;
    // Now you can access the properties of the stored playlist
    const currentProfileAvatar = storedUser ? storedUser[0].user_avatar : null;
    console.log("🚀 ~ file: Header.jsx:67 ~ Header ~ currentProfileAvatar:", currentProfileAvatar)

    const handleClick = () => {
        navigate("/LogIn");
    }

    const handleLogoClick = () => {
        if (currentProfileRole === "user") {
            navigate("/UserMain");
        } else {
            navigate("/Creatormain");
        }
    }

    const [profileDrop, setProfileDrop] = useState(false);

    const [videoButtonActive, setVideoButtonActive] = useState(1);

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    return (
        <>
            <div className={burgerMenuActive ? "burger-menu open" : "burger-menu"} onClick={() => { setBurgerMenuActive(!burgerMenuActive) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={burgerMenuActive ? "burger-menu__menu active" : "burger-menu__menu"}>
                <div className="burger-menu__row">
                    Video
                </div>
                <div className="burger-menu__row">
                    Store
                </div>
                <div className="burger-menu__row">
                    <img src={`${currentProfileAvatar}`} alt="" className="burger-menu__icon" />
                    Profile
                </div>
                <div className="burger-menu__row">
                    <div className="header__notifications">
                        <img src={notifyIcon} alt="1" className="header__notifications-icon" />
                        <div className={props.notifications ? "header__notifications-number active" : "header__notifications-number"}>4</div>
                    </div>
                    Notification
                </div>
            </div>
            <div className="header">


                <img src={siteLogo} alt="" className="header__logo" onClick={() => { handleLogoClick() }} />

                <div className="header__buttons">
                    <div className="header__search-container">
                        <Search></Search>
                    </div>

                    <div className="header__notifications">
                        <img src={notifyIcon} alt="" className="header__notifications-icon" />
                        <div className={props.notifications ? "header__notifications-number active" : "header__notifications-number"}>4</div>
                    </div>

                    {props.videosButtons && (
                        <div className="header__videos-buttons">
                            <button className={videoButtonActive === 1 ? "header__video-button active" : "header__video-button"} onClick={() => { setVideoButtonActive(1) }}>Video</button>
                            <button className={videoButtonActive === 2 ? "header__video-button active" : "header__video-button"} onClick={() => { setVideoButtonActive(2); navigate("/Stores") }}>Store</button>
                        </div>
                    )}


                    {currentProfileAvatar === null ?
                        <OrangeButton width={120} marginTop={0} marginLeft={0} height={40} text="Sign in" handleLogin={handleClick}></OrangeButton>

                        :
                        <div className="header__profile">
                            <div className={profileDrop ? "header__profile-preview active" : "header__profile-preview"} onClick={() => { setProfileDrop(!profileDrop) }}>
                                <img src={`${currentProfileAvatar}`} alt="" className="header__profile-avatar" />
                                Profile
                            </div>
                            <div className={profileDrop ? "header__profile-dropdown active" : "header__profile-dropdown"}>
                                <Link to="/EditProfile">
                                    <div className="header__profile-row" onClick={() => { navigate("/EditProfile") }}>
                                        <img src={editIcon} alt="" className="header__profile-row-icon" />
                                        <div className="header__profile-row-text">Edit profile</div>
                                    </div>
                                </Link>
                                <Link to="/LogIn" onClick={() => { dispatch(logoutUser()) }}>
                                    <div className="header__profile-row">
                                        <img src={diamondIcon} alt="" className="header__profile-row-icon" />
                                        <div className="header__profile-row-text">Switch to <br />business account</div>
                                    </div>
                                </Link>
                                <div className="header__profile-line"></div>
                                <Link to="/LogIn" onClick={() => { dispatch(logoutUser()) }}>
                                    <div className="header__profile-row">
                                        <img src={logoutIcon} alt="" className="header__profile-row-icon" />
                                        <div className="header__profile-row-text">Log out</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }

                </div>


            </div>
        </>
    );
};

export default Header;



