import React from "react"
import {Link} from "react-router-dom"
const Country = ({image, name, continent, id}) =>{
    return (
        <div >
            <Link to={`/countries/${id}`}>
            <h3 >{name}</h3>   
            </Link>
            <div >
                <img  src={image} alt="no image" style={{width:180}}/>
            </div>
            <h3 >{continent}</h3>
        </div>
       
    )
}

export default Country