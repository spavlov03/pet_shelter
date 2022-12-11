const petControllers = require('../controllers/pet.controllers');
const PetControllers = require('../controllers/pet.controllers'); 
module.exports = (app) => { 
  app.post('/api/pet',PetControllers.createPet); 
  app.get('/api/pets',PetControllers.getPets); 
  app.get('/api/pet/:id',PetControllers.getOnePet);
  app.delete('/api/pet/:id',PetControllers.deletePet);
  app.put('/api/pet/:id',PetControllers.updatePet);

}