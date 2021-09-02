import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../../actions/actions';


const CreateActivity = () => {
    const dispatch = useDispatch()
    const [activities, setActivities] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
    })

    const handleOnChange = (e) => setActivities({
        ...activities,
        [e.target.name] : e.target.value
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(activities))
        setActivities("")
    }




    return (
        <form onSubmit={handleOnSubmit}>
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
            <button>Crear</button>
            </div>
        </form>
    )
}

export default CreateActivity
