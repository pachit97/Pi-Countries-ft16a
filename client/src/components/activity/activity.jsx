import React from "react"
import "./activity.css"

const Activity = ({activities, countryName}) =>{
    if(activities && activities.length){
    return(
        <div className="lagrantabla">
            <h3>Activities to do in {countryName}</h3>
            <table className="tabla">
                <thead>
                <tr>
                    <th>Name |</th>
                    <th>Duration (m) |</th>
                    <th>Season |</th>
                    <th>Difficulty </th>
                </tr>
                </thead>
                <tbody>
                {activities && activities.map((a)=>
                <tr key={a.id} >
                    <td>{a.name}</td>
                    <td>{a.duration}</td>
                    <td>{a.season}</td>
                    <td>{a.difficulty}</td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
    } else{
        return (
            <h2>
            This city has no activities...</h2>
        )
    }
}

export default Activity;