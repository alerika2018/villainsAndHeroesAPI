
// const createError = require('http-errors')

const CharacterSchema = require("../models/Character.js")

const getCharacters = (req,res)=>{
    const endPoint = req.path.replace("/","")
    let type = ""
    if (endPoint=="villains")
        type="villain"
    if (endPoint=="heroes")
        type="hero"
        
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let skipIndex
    
    if (isNaN(page) || isNaN(limit)) {
        page=0
        limit=0
        skipIndex=0
    }
    else
        skipIndex = (page - 1) * limit;
    
     CharacterSchema.findByType(type).
     lean()
     .select("name _id")
     .limit(limit)
    .skip(skipIndex)
     .exec()
    .then(results=>{
        res.status(200).json(results)
    })
    .catch(error=>{
        if(error.codeName=="BadValue")
            res.status(500).send("Error in query parameters ")
        else
            res.status(500).send(error)
    })
}

const getCharacter = (req,res,next)=>{
    
     
    
     CharacterSchema.findOne({ _id: req.params.id })
     .exec()
     .then((results) => {
       res.json(
           {
               "id":results.id,
               "name": results.name,
               "powers": results.powers,
               "type":results.type,
               "hp": results.hp,
               "description": results.description
           });
     })
     .catch((error) => {
            if (error.message.indexOf("Cast to ObjectId")!=-1)
                res.status(500).send("Id not found")
            else
            res.status(500).send(error);
     });
}

const postCharacter = (req,res)=>{
    const endPoint = req.path.replace("/","")
    let type = ""
    if (endPoint=="villains")
        type="villain"
    if (endPoint=="heroes")
        type="hero"
    let Character = new CharacterSchema(
        {
            "name": req.body.name,
            "powers": req.body.powers,
            "hp": req.body.hp,
            "type": type 
        }
        )
    Character.save() 
    
    .then(result=>{
        res.set('content-location',`/api/v1/${endPoint}`)
        res.status(201).json({
            url: `/api/v1/${endPoint}/${Character._id}`,
            data: Character,
        })
    })
    .catch(error=>{
        res.status(500).send(error)
    })
}

module.exports = {getCharacters,getCharacter,postCharacter}