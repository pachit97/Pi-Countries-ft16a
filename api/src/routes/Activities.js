const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');
const { Op } = require('sequelize');

router.post("/", async (req, res, next) => {
    const { name, difficulty, season, duration, country} = req.body;
    try {
        const [activity, wasCreated] = await Activity.findOrCreate({
          where: { 
            name: name,
            difficulty: difficulty,
            season: season,
            duration: duration
          },
          defaults: {
            name: name,
            difficulty: difficulty,
            season: season,
            duration: duration
            }
        })

        console.log(activity)
        await activity.addCountries(country)
        if(wasCreated){
          res.send("the activity was created successfully")
        }else{
          res.send("esta actividad ya existe")
        }
    } catch (error) {
        next(error)        
    }
})


//if(difficulty.length < 1 || difficulty.length > 5){
  //  res.send("the difficulty must be a number between 1 and 5")
//}
//else if(season.length < 6 || season.length > 6){
  //  res.send("the season must be summer, autumn, winter or spring")
//}
//else if(countryId.length !== 3){
  //  res.send("the length of the id must be 3 alphabetic characters")
//}


module.exports = router;