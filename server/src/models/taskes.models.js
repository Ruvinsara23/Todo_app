const mongoose = require('mongoose')


const taskesSchema =new mongoose.Schema({
      title:{
        type:String,
        require:true,
      },
      status:{
        type:String,
        require:true,
        default:"pending"
      },
      date:{
        type:Date,
        require:true,
        default:Date.now,
      }
      
});

module.exports = mongoose.model('Task',taskesSchema);










