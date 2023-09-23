import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./main.scss";

import { useDispatch } from 'react-redux';
import { logoutUser } from '../../data/store/userSlice';

const Main = () => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="main" style={{color: "white"}} onclick={()=>{dispatch(logoutUser())}}> Logout</div>
        </>
    );
};

export default Main;
