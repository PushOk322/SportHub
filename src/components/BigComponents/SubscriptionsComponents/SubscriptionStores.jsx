import React, { useState } from 'react';
import './subscription-components.scss';
import { useNavigate } from "react-router-dom";

import StoreCard from '../../MediumComponents/Cards/StoreCard';

import threeDots from '../../../img/dots-icon.svg';
import playIcon from '../../../img/play-icon.svg';
import greyLinkIcon1 from '../../../img/grey-link-icon-1.svg';
import greyLinkIcon2 from '../../../img/grey-link-icon-2.svg';
import greyLinkIcon3 from '../../../img/grey-link-icon-3.svg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentPlaylist } from '../../../data/store/currentPlaylistSlice';

const SubscriptionStores = (props) => {
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

            <div class="subscription-stores">
                {
                    props.storeObj.map((storeData, index) => {
                        const modifiedStoreData = {
                            ...storeData,

                            store_preview: storeData.store_preview[0].url,
                            store_name: storeData.store_name,
                            store_description: storeData.store_description,
                        };
                        return (
                            <StoreCard key={index} storeObj={modifiedStoreData}></StoreCard>
                        );
                    })
                }
            </div>

        </>
    );
};

export default SubscriptionStores;
