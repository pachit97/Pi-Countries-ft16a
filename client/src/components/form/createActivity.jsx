import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../../actions/actions';
import { Link } from 'react-router-dom';


const CreateActivity = () => {
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()
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
        dispatch(postActivity(activities))
        
    }




    return (
        <form onSubmit={handleOnSubmit}>
            <Link  to='/home'>Home</Link>
            <div>
            <label>Name:</label>
            <input onChange={handleOnChange} name="name" type="text" value={activities.name} ></input>
            </div>

            <div>
            <label>Difficulty:</label>
            <input onChange={handleOnChange} type="text" name="difficulty" value={activities.difficulty} placeholder="between 1 and 5"></input>
            </div>

            <div>
            <label>Duration:</label>
            <input onChange={handleOnChange} name="duration" value={activities.duration} type="text" placeholder=""></input>
            </div>
            
            <div>
            <label>Season:</label>
            <select onChange={handleOnChange} name="season">
                <option>-</option>
                <option value='summer'>{'summer'}</option>
                <option value='autumn'>{'autumn'}</option>
                <option value='winter'>{'winter'}</option>
                <option value='spring'>{'spring'}</option>
            </select>
            </div>
            <div>
                    <select onChange={handleOnChange} name="country" id="countries" multiple>
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
            <button>Crear</button>
            </div>
        </form>
    )
}

export default CreateActivity
