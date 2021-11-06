
const LocationSchema = require("../models/Location.js")


const getLocation = (req,res)=>{
    LocationSchema.findOne({
        "_id":req.params.id
    }).exec()
    .then(results=>{
        res.status(200).json(results)
    })
    .catch(error=>{
        res.status(500).send(error)
    })
    
}

const getLocations = (req,res)=>{
    LocationSchema.find({}).exec()
    .then(results=>{
        res.status(200).json(results)
    })
    .catch(error=>{
        res.status(500).send(error)
    })
}

const postLocations = (req,res)=>{
    let location = new LocationSchema(req.body)
    location.save()
    .then(result=>{
        res.set('content-location',"/api/v1/locations")
        res.status(201).json({
            url: `/api/v1/locations/${location._id}`,
            data: location
        })
    })
    .catch(error=>{
        res.status(500).send(error)
    })
}

module.exports = {getLocation, getLocations, postLocations}