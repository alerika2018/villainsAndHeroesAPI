const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const CharacterSchema = new Schema({
    name:{type:String, required:true, maxLength: 30}, 
    powers: {type:[String], default: ["Super strength"], set:stringToArray},     
    // powers: {type:[String], default: ["Super strength"], set: p=> p.replace(/\s+/g, "").split(",")},   
    type:{type:String, enum:['hero', 'villain'], default:'hero'}, 
    hp:{type:Number, default:1}, 
  
}
,
{
    //  toObject: { virtuals: true },
    toJSON: { virtuals: true }
}
)

//setter function
function stringToArray (powers){
    return powers.replace(/\s+/g, "").split(",")
}

// virtual property
CharacterSchema.virtual('description').get(function(){
    let type=""
    if (this.type == "hero") 
        type= "is a noble "  
    else 
        type="is a nefaroius "
        
    return this.name + " is a " + type + this.type + " whose special powers are " + this.powers.join(", ")   
})

//static method
CharacterSchema.statics.findByType = function(type){
    return this.find({type: type})
}

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character; 