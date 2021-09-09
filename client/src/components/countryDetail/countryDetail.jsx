import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountriesDetail } from "../../actions/actions"
import { Link } from 'react-router-dom';
import Activity from "../activity/activity"
import "./countryDetail.css"


const DetailCountry = () => {
    const countriesDetail = useSelector(state => state.countriesDetail)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountriesDetail(id))
    },[dispatch])

    return (
        <div className="detailTotal" >
            <div className="detailLink">
                <Link className="detailClick" to='/home'>Home</Link>
            </div>
            <div className="detailContainer">
                <div className="elcountry">Country detail</div>
                <div className="detailName">{countriesDetail.name}</div>
                <img className="imagenn" src = {countriesDetail.image} alt="no image" />
                <div className="detail">ID: {countriesDetail.id}</div>
                <div className="detail">Continent: {countriesDetail.continent}</div>
                <div className="detail">Capital: {countriesDetail.capital}</div>
                <div className="detail">Area: {countriesDetail.area} Km2</div>
                <div className="detail">Population: {countriesDetail.population}</div>
                <Activity className="activityDetail" countryName={countriesDetail.name} activities={countriesDetail.activities}/>
            </div>
        </div>
    )
}
export default DetailCountry;