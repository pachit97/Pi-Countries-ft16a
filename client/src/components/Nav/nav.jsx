import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterByActivity, getCountry, getAllCountries, filterByContinent, sortCountryASC, sortCountryCANT_ASCPOP, sortCountryCANT_DESPOP, sortCountryDES } from '../../actions/actions';
import { ASC, DES, ASCPOP, DESPOP, GET_COUNTRY } from '../../actionsNames';
import { useSelector, useDispatch } from 'react-redux';
import "./nav.css"

export function Nav() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const countriesCopy = useSelector(state => state.countriesCopy)

    const inputCountry = (event) =>{
        dispatch(getCountry(event.target.value))
    }

    const [activity, setActivity] = useState("");
    const inputActivity = (e) => {
        setActivity(e.target.value)
    }
    const onClickActivity = () => {
        dispatch(filterByActivity(activity))
    }

    const onChangeOrder = (event) => {
        event.preventDefault()
        if(event.target.value === ASC){
            dispatch(sortCountryASC())
        }
        if(event.target.value === DES){
            dispatch(sortCountryDES())
        }
        if(event.target.value == "none"){
            dispatch(getAllCountries())
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
        if(event.target.value == "none"){
            dispatch(getAllCountries())
        }
    }

    const onChangeContinent = (event) => {
        dispatch(filterByContinent(event.target.value))

    }
    
    // como muestro mi otro arreglo countriesfilter en vez de countries cuando entra a filtrado por continente


    return(
        <div className="NavigationBar">
            <div>Filter</div>
        <div className="order">
            <select onChange={onChangeOrder}>
                <optgroup label="Alphabetical Order">
                    <option value="none">A-Z</option>
                    <option value={ASC}>Ascending</option>
                    <option value={DES}>Descending</option>
                </optgroup>
            </select>
        </div>
        <div className="population">
            <select onChange={onChangePopulation}>
                <optgroup label="Order by population quantity">
                    <option value="none">Population</option>
                    <option value={ASCPOP}>ascending</option>
                    <option value={DESPOP}>descending</option>
                </optgroup>
            </select>
        </div>
        <div className="continent">
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
        <div>
            Search
        </div>
        <div className="name">
                <input type="text" placeholder="Search by name" className="inputCountry" onChange={inputCountry}/>
        </div>
        <div>
            <input className="inputActivity" type="text" placeholder="Search by activity" onChange={inputActivity}/>
            <button className="buttonActivity" onClick={onClickActivity}>Search</button>
        </div>
        </div>
    )
}