const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');

let llamada = async() => {
    let apiCountries = await axios.get('https://restcountries.eu/rest/v2/all')
  apiCountriesMap = apiCountries.data.map(country =>{
    return{
      id: country.alpha3Code,
      name:country.name,
      image:country.flag,
      continent:country.region,
      capital:country.capital,
      area:country.area,
      population:country.population
    }
  })
  let mibase = await Country.bulkCreate(apiCountriesMap) 
}


router.get("/", async(req, res) => {
    const myCountries = await Country.findAll() // trae todo lo de la tabla diet
    console.log(myCountries)
    if(myCountries.length > 1){ // porque me trae el arreglo pero esta vacio entonces le pongo length
        return res.json(myCountries).status(200);
    }else{
        llamada()
        return res.json(await Country.findAll()).status(200);
    }
})

module.exports = router;