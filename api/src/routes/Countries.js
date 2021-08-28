  
const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const {
    API_KEY
  } = process.env;

router.get("/", async(req, res) => {
    try{
        const llamada = await axios.get("https://restcountries.eu/rest/v2/all")
        return res.json(llamada)
    }catch{
        res.send("fallastes")
    }
})

module.exports = router;