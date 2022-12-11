const mongoose = require('mongoose');

mongoose.set('strictQuery',false)

mongoose.connect("mongodb://localhost/petShelter",()=> {
  console.log('Connected to MongoDB!')
})

