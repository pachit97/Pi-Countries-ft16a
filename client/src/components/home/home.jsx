import React, { useState,useEffect } from 'react';
import Countries from '../countries/countries';
import { getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav/nav';
import "./home.css"


const Home = () => {
    return (
        <div className="homeDiv">
            <Nav/>
            <Countries/>   
        </div>
    )
}

export default Home;