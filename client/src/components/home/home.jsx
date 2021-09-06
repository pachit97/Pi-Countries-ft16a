import React, { useState,useEffect } from 'react';
import Countries from '../countries/countries';
import { getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav/nav';
import "./home.css"


const Home = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const countriesCopy = useSelector(state => state.countriesCopy)

    const onClick = () => {
        dispatch(getAllCountries())
    }

    return (
        <div className="homeDiv">
            <div className="homeLink">
            <h3 className="countriesApp" onClick={onClick}>Countries App</h3>
            <h3 className="linkToHome" ></h3>
            <h3 className="linkToActivity"><Link className="linkToActivity" to="/Home/createActivity">Crear actividad</Link></h3>
            </div>
            <Nav/>
            <Countries/>   
        </div>
    )
}

export default Home;