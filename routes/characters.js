const router = require('express').Router({mergeParams:true})
const {getCharacters,getCharacter,postCharacter}= require('../controllers/characterControllers.js')

//routers for heroes
router.get("/heroes",getCharacters)
router.get("/heroes/:id",getCharacter)
router.post("/heroes",postCharacter)

//routers for villains
router.get("/villains",getCharacters)
router.get("/villains/:id",getCharacter)
router.post("/villains",postCharacter)

module.exports = router




