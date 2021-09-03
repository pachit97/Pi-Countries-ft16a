import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountriesDetail } from "../../actions/actions"
import { Link } from 'react-router-dom';


const DetailCountry = () => {
    const countriesDetail = useSelector(state => state.countriesDetail)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountriesDetail(id))
    },[dispatch])

    return (
        <div >
            <div>
                <Link  to='/home'>Home</Link>
            </div>
            <div >
                <h1>Name: {countriesDetail.name}</h1>
                <img src = {countriesDetail.image} alt="no image" style={{width:300}}/>
                <h5>id: {countriesDetail.id}</h5>
                <h3>Continent: {countriesDetail.continent}</h3>
                <h3>Capital: {countriesDetail.capital}</h3>
                <h4>Area: {countriesDetail.area} Km2</h4>
                <h4>Population: {countriesDetail.population}</h4>
            </div>
        </div>
    )
}
export default DetailCountry;