const Pet = require('../models/pet.model'); 
module.exports = {
  createPet: (req,res) => {
    Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err=>res.status(400).json(err))
  },
  getPets: (req,res) => { 
    Pet.find(req.body).sort({"type":1})
      .then(pet => res.json(pet))
      .catch(err=> res.json(err))
  }, 
  getOnePet: (req,res) => { 
    Pet.findOne({_id:req.params.id})
    .then(pet => res.json(pet))
    .catch(err=> res.json(err))
  }, 
  deletePet: (req,res) => {
    Pet.deleteOne({_id:req.params.id})
    .then(pet => res.json(pet))
    .catch(err=> res.json(err))
  }, 
  updatePet: (req,res) => { 
    Pet.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(pet => res.json(pet))
    .catch(err=> res.status(400).json(err))
  }
}
