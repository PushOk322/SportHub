import React, { useState, useEffect } from 'react';
import "./user-subscriptions.scss";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentSubscription } from '../../data/store/currentSubscriptionSLice';

const UserSubscriptions = (props) => {
    const navigate = useNavigate();

    const [userSubs, setUserSubs] = useState([]);
    console.log("🚀 ~ file: UserSubscriptions.jsx:13 ~ UserSubscriptions ~ userSubs:", userSubs)

    useEffect(() => {
        loadVideos();
    }, []);

    const loadVideos = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/users/${props.userObj[0].id}?populate[0]=user_subscriptions&populate[1]=user_subscriptions.user_avatar`);

            console.log("🚀 response:", response)

            setUserSubs(response.data.user_subscriptions);

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    const currentSubscriptionObj = useSelector(state => state.currentSubscriptions.currentSubscriptions);
    const dispatch = useDispatch();

    const handleSubClick = (subObj) => {
        console.log("🚀 ~ file: UserSubscriptions.jsx:36 ~ handleSubClick ~ subObj:", subObj)
        
        dispatch(addCurrentSubscription(subObj));
        navigate("/SubscriptionView");
    }

    // console.log("🚀 ~ file: UserSubscriptions.jsx:25 ~ loadVideos ~ userSubs:", userSubs)
    return (
        <>
            <div className="subs">
                <div className="subs__heading">My subscription</div>
                <div className="subs__list">
                    {userSubs.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>You are not subscribed to anyone</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        userSubs.map((subData, index) => (
                            <div className="subs__item" key={index} onClick={() => {
                                handleSubClick(subData);
                                if (props.fetchFunc) { props.fetchFunc() }
                            }}>
                                <img src={ subData.user_avatar.url} alt="" className="subs__avatar" />
                                <div className="subs__sub-name">
                                    {subData.username}

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default UserSubscriptions;
