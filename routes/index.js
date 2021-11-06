const router = require('express').Router({mergeParams:true})

const charactersRouter = require("./characters.js")
const locationsRouter = require("./locations.js")

router.use("/",charactersRouter)
router.use("/",locationsRouter)



module.exports = router;