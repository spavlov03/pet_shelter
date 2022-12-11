const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');
const PetSchema = mongoose.Schema({
  name:{
    type:String,
    minLength: [3,"Name must be at least 3 characters"], 
    required: [true,"Name is required"], 
    unique: true
  }, 
  type:{
    type:String,
    minLength: [3,"Type must be at least 3 characters"], 
    required: [true,"Type is required"]  
  }, 
  description:{
    type:String,
    minLength: [3,"Description must be at least 3 characters"], 
    required: [true,"Description is required"]  
  } ,
  skill1: {
    type: String,
  },
  skill2: {
  type: String,
  },
  skill3: {
  type: String,
  },
  likes:{
    type:Number
  }

  
},{timestamps:true}); 

PetSchema.plugin(uniqueValidator,{message:"The name {VALUE} is already used."}); 
const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet