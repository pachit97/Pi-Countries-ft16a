import React from 'react';
import Countries from '../countries/countries';
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