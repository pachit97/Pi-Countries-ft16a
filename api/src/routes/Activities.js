const { Router } = require('express');
const express = require('express');
const router = Router();

router.get("/as", (req, res) => {
res.send("dsads")
})

module.exports = router;