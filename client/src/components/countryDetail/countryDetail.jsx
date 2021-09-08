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
                <h1>{countriesDetail.name}</h1>
                <img className="imagenn" src = {countriesDetail.image} alt="no image" />
                <h3>Id: {countriesDetail.id}</h3>
                <h3>Continent: {countriesDetail.continent}</h3>
                <h3>Capital: {countriesDetail.capital}</h3>
                <h3>Area: {countriesDetail.area} Km2</h3>
                <h3>Population: {countriesDetail.population}</h3>
                <Activity className="activityDetail" countryName={countriesDetail.name} activities={countriesDetail.activities}/>
            </div>
        </div>
    )
}
export default DetailCountry;