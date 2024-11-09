const Task = require('../models/taskes.models');



const getTodo = async (req,res) => {
    const toDo = await Task.find()
    res.send(toDo);

}
const addToDo = async (req,res)=>{
    const {title} = req.body;
    try {
        const newTodo = new Task({title});
        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);
    }catch (error){
        res.status(500)
    }   

}
const updateTodo = async(req,res)=>{
    const {id} = req.params;
    const {title,status}=req.body;

    try{
        const updateTodo =await Task.findByIdAndUpdate(
            id,
            {title,status},
            {new:true}
        );
        if(!updateTodo){
            return res.status(400).json({massage:'Task not found'});

        }
        res.status(200).json(updateTodo);
    }
    catch(error){
        res.status(500).json({message : 'error updating task'})

    }
   
}
const deleteTodo=async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteTodo = await Task.findOneAndDelete(id,{new:true}) 
        if(!deleteTodo){
            res.status(400).json({messaage:"something wrong with find task"})
        }
        res.status(200).json(deleteTodo )
    }catch(error){
        res.status(500).json({message : 'error updating task'})
    }
}



module.exports ={
    getTodo,
    addToDo,
    updateTodo,
    deleteTodo
}