import React, { useState,useEffect } from 'react';
import Countries from '../countries/countries';
import { getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch]);

    
    
    return (
        <div>
         <Countries/>   
        </div>
    )
}

export default Home;