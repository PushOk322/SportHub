import React, { useState } from 'react';
import './subscription-components.scss';
import { useNavigate } from "react-router-dom";

import VideoCard from '../../MediumComponents/Cards/VideoCard';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';
import greyLinkIcon1 from '../../../img/grey-link-icon-1.svg';
import greyLinkIcon2 from '../../../img/grey-link-icon-2.svg';
import greyLinkIcon3 from '../../../img/grey-link-icon-3.svg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../../data/store/currentPlaylistSlice';

const SubscriptionInfo = (props) => {
    const navigate = useNavigate();

    const currentPlaylist = useSelector(state => state.currentPlaylists.currentPlaylists);
    const dispatch = useDispatch();

    const handleRerouteView = () => {
        dispatch(addCurrentPlaylist(props.playlistObj));
        navigate("/PlaylistView");
    }
    // console.log("🚀", props.videoObj)
    return (
        <>

            <div className="subscription-info">
                <div className="subscription-info__info">
                    <div className="subscription-info__head">
                        <div className="subscription-info__info-box first">
                            <div className="subscription-info__box-title">
                                Business Name
                            </div>
                            <div className="subscription-info__box-text">
                                {props.videoObj.user_first_name ? (
                                    props.videoObj.user_first_name + props.videoObj.user_last_name
                                ) : "The user didn't provide the name"}
                            </div>
                        </div>
                        <div className="subscription-info__info-box first">
                            <div className="subscription-info__box-title">
                                Address
                            </div>
                            <div className="subscription-info__box-text">
                                {props.videoObj.user_address ? (
                                    props.videoObj.user_address
                                ) : "The user didn't provide the address"}
                            </div>
                        </div>
                    </div>
                    <div className="subscription-info__info-box">
                        <div className="subscription-info__box-title">
                            About
                        </div>
                        <div className="subscription-info__box-text">
                            {props.videoObj.user_description ? (
                                    props.videoObj.user_description
                                ) : "The user didn't provide the description"}
                        </div>
                    </div>
                </div>
                <div className="subscription-info__links">
                    <div className="subscription-info__links-title">My social media</div>
                    <div className="subscription-info__links-list">
                        <div className="subscription-info__links-item">
                            <img src={greyLinkIcon1} alt="" className="subscription-info__link-icon" />
                            Facebook
                        </div>
                        <div className="subscription-info__links-item">
                            <img src={greyLinkIcon2} alt="" className="subscription-info__link-icon" />
                            Instagram
                        </div>
                        <div className="subscription-info__links-item">
                            <img src={greyLinkIcon3} alt="" className="subscription-info__link-icon" />
                            Twitter
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SubscriptionInfo;
