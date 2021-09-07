import React from "react"
import {Link} from "react-router-dom"
import "./country.css"
const Country = ({image, name, continent, id}) =>{
    return (
            <div className="container">
        <Link className="Link" to={`/countries/${id}`}>
                <h3 className="name2">{name}</h3>   
        </Link>
                    <div className="imagen">
                        <img className="img" src={image} alt="no image" style={{width:180}}/>
                    </div>
                <h3 className="continent">{continent}</h3>
            </div>
    )
}

export default Country