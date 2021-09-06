import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY, GET_ACTIVITY, ASC, DES, ASCPOP, DESPOP, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY} from '../actionsNames';

export function getAllCountries(){
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/api/countries')
        dispatch({ type: GET_COUNTRIES, payload: res.data })
    }
}

export function getCountry(name){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/api/countries?name=${name}`)
        dispatch({ type: GET_COUNTRY, payload: res.data })
    }
}

export function getCountriesDetail(id){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/api/countries/${id}`)
        dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data })
    }
}

export function sortCountryASC(){
    return {
        type: ASC
    }
}
export function sortCountryDES(){
    return {
        type: DES
    }
}
export function sortCountryCANT_ASCPOP(){
    return {
        type: ASCPOP
    }
}
export function sortCountryCANT_DESPOP(){
    return {
        type: DESPOP
    }
}
export function filterByContinent(continent){
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}
export function filterByActivity(payload){
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}
export function postActivity(activities){
    return async (dispatch) => {
        await axios.post('http://localhost:3001/api/activities', activities)   
        }
}