const mongoose = require('mongoose')


const taskesSchema =new mongoose.Schema({
      title:{
        type:String,
        require:true,
      },
      status:{
        type:String,
        require:true,
      }
});











