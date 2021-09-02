import React, { useState,useEffect } from 'react';
import Countries from '../countries/countries';
import { getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCountries()) // aca llamo a mi funcion para traer todas las countries
    },[dispatch]);

    
    
    return (
        <div>
            <Link to="/Home/createActivity">Crear actividad</Link>
         <Countries/>   
        </div>
    )
}

export default Home;