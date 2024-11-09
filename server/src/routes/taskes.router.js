const express = require("express");

const {getTodo,addToDo,updateTodo,deleteTodo}= require('../controllers/taskes.contraller')

const todoRouter = express.Router();

todoRouter.get('/',getTodo)
todoRouter.post('/add',addToDo)
todoRouter.put('/update/:id',updateTodo);
todoRouter.delete('/delete/:id',deleteTodo)

          

module.exports = todoRouter;



