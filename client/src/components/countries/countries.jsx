import React, { useState } from 'react';
import Country from './country';


import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../actions/actions';

const Countries = () => {
    var {countries}  = useSelector(state => state )
    
    return (
        <div >
            <div >
                {countries.map((e) => (
                    <Country key={e.id}
                        id={e.id}
                        image={e.image}
                        name={e.name}
                        continent={e.continent}
                    />
                ))}
            </div>
        </div>
    )
                
}

export default Countries