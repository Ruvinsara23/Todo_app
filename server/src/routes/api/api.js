const express =require('express');
const todoRouter = require('../taskes.router')

const api= express.Router()

api.use('/',todoRouter);

module.exports = api;