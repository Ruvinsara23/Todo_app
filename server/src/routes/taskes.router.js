const express = require("express");

const {getTodo}= require('../controllers/taskes.contraller')

const todoRouter = express.Router();

todoRouter.get('/',getTodo);





