const mongoose = require('mongoose')


const taskesSchema =new mongoose.Schema({
      title:{
        type:String,
        require:true,
      },
      status:{
        type:String,
        require:true,
      },
      date:{
        type:String,
        require:true,
      }
      
});

module.exports = mongoose.model('Task',taskesSchema);










