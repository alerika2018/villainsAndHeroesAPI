const router = require("express").Router()

const {getLocation, getLocations, postLocations} = require("../controllers/locationControllers.js")

router.get("/locations",getLocations)

router.get("/locations/:id",getLocation)

router.post("/locations",postLocations)

module.exports = router