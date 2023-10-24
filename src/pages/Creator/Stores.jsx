import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./stores.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../../components/Page-Size-Components/Header';
import StoreCard from '../../components/MediumComponents/Cards/StoreCard';

import OrangeButton from '../../components/SmallComponents/Buttons/OrangeButton';

import { useDispatch } from 'react-redux';
import { addStore } from '../../data/store/storeSlice';


import plusIcon from '../../img/plus-icon.svg';

const Stores = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [sort, setSort] = useState("mind");



    const storeObj = useSelector(state => state.stores.stores);

    useEffect(() => {
        loadStores();
    }, []);


    const loadStores = async () => {
        try {
            const response = await axios.get(`https://paul-sporthub-app.onrender.com/api/stores/?populate=*`);

            //console.log("🚀 response:", response)

            const dispatchPromises = response.data.data.map((storeData, index) => {
                return dispatch(addStore({ dataPath: storeData, index }));
            });

            await Promise.all(dispatchPromises.filter(Boolean)); // Filter out null promises

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleClick = async () => {
        navigate("/AddStore");
    };




    // //console.log("🚀 ~ file: CreatorMain.jsx:23 ~ CreatorMain ~ videoobj:", videoObj)
    return (
        <>

            <div className="wrapper">
                <Header videosButtons={true}></Header>

                <div className="stores__head">
                    <div className="v-p__container">
                        <div className="v-p__title">
                            Your store
                        </div>


                        <div className="v-p__orange-button" onClick={() => { navigate("/AddStore") }}>
                            <OrangeButton text="Add new" plus={true} marginTop={0} handleLogin={handleClick} width={180} maxWidth={180}></OrangeButton>
                        </div>

                        <div className="v-p__button-mobile" onClick={() => { navigate("/AddStore") }}>
                            <img src={plusIcon} alt="" className="v-p__plus-icon" />
                        </div>
                    </div>
                </div>
                <div className="stores-container">
                    {storeObj.length === 0 ? (
                        // Display a loading message or any other content while loading
                        <p style={{ color: "#fff" }}>Loading...</p>
                    ) : (
                        // Render VideoCard components when videoObj is not empty
                        storeObj.map((storeData, index) => {
                            return (
                                <StoreCard key={index} storeObj={storeData}></StoreCard>
                            );
                        })
                    )}
                </div>
                
            </div>

        </>
    );
};

export default Stores;
