import React, { useState } from 'react';
import './store-card.scss';
import { useNavigate } from "react-router-dom";


import externalIcon from '../../../img/external-icon.svg';

const StoreCard = (props) => {
    const navigate = useNavigate();



    return (
        <div className="store-card">
            <div className="store-card__top-container">
                <img src={"http://localhost:1337" + props.storeObj.store_preview} alt="" className="store-card__store-avatar" />
                <div className="store-card__main">
                    <div className="store-card__title">
                        {props.storeObj.store_name}
                    </div>
                    <div className="store-card__description">
                        {props.storeObj.store_description}
                    </div>
                </div>
            </div>

            <button className="store-card__visit-button">
                Visit store
                <img src={externalIcon} alt="" className="store-card__icon" />
            </button>
        </div>
    );
};

export default StoreCard;
