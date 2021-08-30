const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');

router.post("/", async (req, res, next) => {
    const { name, difficulty, season, countryId} = req.body;
    try {
        const [activity, created]=await Activity.findOrCreate({where:{
            name
            },
            defaults:{
                name,
                difficulty,
                season
            }
        })
        console.log(created)
        await activity.setCountries(countryId)
        res.json(activity)
    } catch (error) {
        next(error)        
    }
})



module.exports = router;