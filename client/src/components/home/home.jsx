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
            <div className="homeLink">
            <h2 className="countriesApp">Countries App</h2>
            <h3 className="linkToHome"><Link to="/home">Home</Link></h3>
            <h3 className="linkToActivity"><Link to="/Home/createActivity">Crear actividad</Link></h3>
            </div>
            <Nav/>
            <Countries/>   
        </div>
    )
}

export default Home;