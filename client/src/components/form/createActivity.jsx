import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../../actions/actions';
import { Link } from 'react-router-dom';
import "./createActivity.css"

const CreateActivity = () => {
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const [validate, setValidate] = useState()
    const [activities, setActivities] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })

    const handleOnChange = (e) => setActivities({
        ...activities,
        [e.target.name] : e.target.value
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!activities.name.length || !activities.difficulty.length || !activities.season || !activities.duration.length || !activities.country.length){
            setError(false)
            alert("You must complete all the fields")
        }else{
            setError(true)
            dispatch(postActivity(activities))
        }
        
    }

    return (
        <form className="Formu" onSubmit={handleOnSubmit}>
            <Link className="button" to='/home'>Home</Link>
            <div className="dentro">
            <div>
            <h3 className="create">Create an activity</h3>
            <label className="theName">Name:</label>
            <input className="inputName" onChange={handleOnChange} name="name" type="text" value={activities.name} ></input>
            </div>

            <div>
            <label className="theDifficulty">Difficulty:</label>
            <input className="inputDifficulty" onChange={handleOnChange} type="text" name="difficulty" value={activities.difficulty} placeholder="between 1 and 5"></input>
            </div>

            <div>
            <label className="theDuration" >Duration:</label>
            <input className="inputDuration" onChange={handleOnChange} name="duration" value={activities.duration} type="text" placeholder="in minutes"></input>
            </div>
            
            <div>
            <label className="theSeason">Season:</label>
            <select className="selectSeason" onChange={handleOnChange} name="season">
                <option>-</option>
                <option value='summer'>{'summer'}</option>
                <option value='autumn'>{'autumn'}</option>
                <option value='winter'>{'winter'}</option>
                <option value='spring'>{'spring'}</option>
            </select>
            </div>
            <div>
                    <select className="opciones" onChange={handleOnChange} name="country" id="countries" multiple>
                        {
                            countries.map(country => {
                                return (
                                    <option key={country.id} value={(country.id)}>{country.name}</option>
                                )
                            })
                        }

                    </select>
                </div>
            <div>
            <button className="elgranboton">Crear</button>
            </div>
            {
                error ? <div>The activity was created</div> : <div></div>
            }
            </div>
        </form>
    )
}

export default CreateActivity
