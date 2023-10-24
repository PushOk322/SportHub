import React, { useState } from 'react';
import './success-error-card.scss';



import errorIcon from "../../../img/error-icon.svg";
import successIcon from "../../../img/success-icon.svg";


const SuccessErrorCard = (props) => {




    return (
        <div className={`success-card${props.popUpState === 0 ? ' unactive' : props.popUpState === 1 ? ' success' : props.popUpState === 2 ? ' error' : ''}`}>
            {
                props.popUpState === 1 ? "Success" : props.popUpState === 2 ? "Error" : null
            }

            {
                props.popUpState === 1 ? <img src={successIcon} alt="" className="success-card__icon" /> : props.popUpState === 2 ? <img src={errorIcon} alt="" className="success-card__icon" /> : null
            }

        </div>
    );
};

export default SuccessErrorCard;
