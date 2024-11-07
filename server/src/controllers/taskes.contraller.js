const Task = require('../models/taskes.models');



const getTodo = async (req,res) => {
    const toDo = await Task.find()
    res.send(toDo);

}

module.exports ={
    getTodo
}