const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');

router.post("/", async (req, res, next) => {
    const { name, difficulty, season, duration, country} = req.body;
    try {
        const [activity, created]=await Activity.findOrCreate({
          where: {
            name
            },
            defaults:{
                name,
                difficulty,
                season,
                duration
            }
        })
        let myCountry = await Country.findOne({
          where:{
            id: country.slice(0, 3).toUpperCase()
          }
        })
        console.log(activity)
        await activity.addCountries(myCountry)
        res.json(activity)
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