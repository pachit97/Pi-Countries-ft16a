import React, { useState, useEffect } from 'react';
import Country from './country';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../actions/actions';
import "./countries.css"

const Countries = () => {
    const dispatch = useDispatch()
    var {countries}  = useSelector(state => state )
    useEffect(() => {
        dispatch(getAllCountries()) 
    },[dispatch]);
    
    const [currentPage, setCurrentPage] = useState(0);
    
    let next = () => {
        setCurrentPage(currentPage + 10)
    }

    let prev = () => {
        setCurrentPage(currentPage - 10)
    }
    const filtrado = (currentPage === 0 ) ? countries.slice(currentPage, currentPage + 9) : (countries.slice(currentPage - 1, currentPage + 9));

    

    const reinicio = () => {
        setCurrentPage(0)
    }


    return (
        <div className="home">
            <div className="countries">
                { filtrado?.map((e) => (
                    <Country key={e.id}
                        id={e.id}
                        image={e.image}
                        name={e.name}
                        continent={e.continent}
                    />
                ))}
            </div>
            <div>
               {currentPage !== 0 ? <button className="botonesNavegacion" onClick={prev}>PREV PAGE</button> : <div></div> }
               {currentPage !== 250 ? <button className="botonesNavegacion" onClick={next}>NEXT PAGE</button> : <div></div>}
               {currentPage !== 249 ? <button className="botonPanico" onClick={reinicio}>INICIO</button> : <div></div>}
            </div>
        </div>
    )
                
}

export default Countries