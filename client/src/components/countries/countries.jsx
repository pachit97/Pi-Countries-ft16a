import React, { useState } from 'react';
import Country from './country';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../actions/actions';

const Countries = () => {
    const dispatch = useDispatch()
    const { countries } = useSelector(state => state )
    

    return (
        <div >
            <div >
                {countries.map((e) => (
                    <Country
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