import React, { useState, useEffect } from 'react';
import "./log-input.scss";

import questionIcon from '../../../img/questions-icon.svg';
import { icons } from 'react-icons';
const LogInput = (props) => {
    const handleInputChange = (event) => {
        props.setInputValue(event.target.value);
      };
    return (
        <>
            <div className="log-input__container" style={{maxWidth: props.maxWidth, width: props.width + "%"}}>
                <label htmlFor={props.id} className="log-input__label">
                    {props.label}
                    {props.question && (<img src={questionIcon} alt="" className="log-input__question-icon" />)}                    
                </label>

                {props.textarea ? 
                <textarea value={props.value} id={props.id} type={props.type} className="log-input__textarea" placeholder={props.placeholder} onChange={handleInputChange}/>
                :
                <input value={props.value} id={props.id} type={props.type} className="log-input" placeholder={props.placeholder} onChange={handleInputChange}/>
                }
            </div>
        </>
    );
};

export default LogInput;
