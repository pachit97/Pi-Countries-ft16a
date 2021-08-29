const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');


router.get("/", async(req, res) => {
    const myCountries = await Country.findAll() 
    if(myCountries.length > 1){ 
        return res.json(myCountries).status(200);
    }else{
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
        await Country.bulkCreate(apiCountriesMap) 
        const myCountriesCreate = await Country.findAll()
        return res.json(myCountriesCreate).status(200);
    }
})

router.get("/:idPais", async (req, res) => {
    let { idPais } = req.params
    let traigo = await Country.findAll()
    console.log(traigo)
    const myId = await Country.findOne({ where: { id: idPais } });
    console.log(myId)
if (myId === null) {
  res.send('Not found!');
} else {
  res.json(myId)
}
})

module.exports = router;