import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterByActivity, getCountry, getAllCountries, filterByContinent, sortCountryASC, sortCountryCANT_ASCPOP, sortCountryCANT_DESPOP, sortCountryDES } from '../../actions/actions';
import { ASC, DES, ASCPOP, DESPOP, GET_COUNTRY } from '../../actionsNames';
import { useSelector, useDispatch } from 'react-redux';

export function Nav() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const countriesCopy = useSelector(state => state.countriesCopy)
    const [state, setState] = useState("");
    
    const inputCountry = (event) =>{
        setState(event.target.value)
    }

    const onClickCountry = () => {
        dispatch(getCountry(state))
    }

    const onChangeOrder = (event) => {
        event.preventDefault()
        if(event.target.value === ASC){
            dispatch(sortCountryASC())
        }
        if(event.target.value === DES){
            dispatch(sortCountryDES())
        }
    }

    const onChangePopulation = (event) => {
        event.preventDefault()
        if(event.target.value === ASCPOP){
            dispatch(sortCountryCANT_ASCPOP())
        }
        if(event.target.value === DESPOP){
            dispatch(sortCountryCANT_DESPOP())
        }
    }

    const onChangeContinent = (event) => {
        dispatch(filterByContinent(event.target.value))

    }
    
    // como muestro mi otro arreglo countriesfilter en vez de countries cuando entra a filtrado por continente


    return(
        <div>
            <div>FILTROS</div>
            
            <div>
                <input  required autoComplete="off" type="text" placeholder="Search by name" name="input" onChange={inputCountry}/>
                <button  onClick={onClickCountry}>Search</button>
            </div>
            
        <div>
            <select onChange={onChangeOrder}>
                <optgroup label="Alphabetical Order">
                    <option value="none">A-Z</option>
                    <option value={ASC}>Ascending</option>
                    <option value={DES}>Descending</option>
                </optgroup>
            </select>
        </div>
        <div>
            <select onChange={onChangePopulation}>
                <optgroup label="Order by population quantity">
                    <option value="none">Population</option>
                    <option value={ASCPOP}>ascending</option>
                    <option value={DESPOP}>descending</option>
                </optgroup>
            </select>
        </div>
        <div>
            <select onChange={onChangeContinent}>
                <optgroup label="Select a continent">
                    <option value="none">Continent</option>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Polar">Polar</option>
                </optgroup>
            </select>
        </div>
        </div>
    )
}