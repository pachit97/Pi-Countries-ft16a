const { Router } = require('express');
const express = require('express');
const router = Router();
const { Country , Activity } = require('../db.js');

router.post("/", async (req, res) => {
    const { name, difficulty, season, id} = req.body;
    const [activity, wasCreated] = await Activity.findOrCreate({
        where: { name: name },
        defaults: {name, difficulty, season}
      })

     res.json(activity)
})



module.exports = router;