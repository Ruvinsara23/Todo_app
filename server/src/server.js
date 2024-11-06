const express = require('express');
const mongoose=require('mongoose');
const cors =require('cors');

const app =express();
const PORT=5000;
const MONGODB_URL='mongodb+srv://ruvinsara23:abcd1234@todo.aogmd.mongodb.net/Todo?retryWrites=true&w=majority&appName=Todo'

mongoose.connect(MONGODB_URL)
.then(()=>console.log('mongo db is connect'))
.catch((error)=>console.log(error));

app.listen(PORT,()=>console.log(`app is listning from ${PORT}`));
