const express = require('express');
const mongoose=require('mongoose');
const todoRouter= require('../src/routes/taskes.router');
const api =require('../src/routes/api/api')
const cors =require('cors');

const dotenv= require('dotenv')

dotenv.config();

const app =express();
const MONGODB_URL=process.env.MONGODB_URL
const PORT = process.env.PORT||8000





app.use('/',api);
app.use(express.json());
app.use(cors());
app.use('/', api);


mongoose.connect(MONGODB_URL)
.then(()=>console.log('mongo db is connect'))
.catch((error)=>console.log(error));

app.listen(PORT,()=>console.log(`app is listning from ${PORT}`));
