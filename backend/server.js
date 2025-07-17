const express = require('express')
const app = express();
const db = require('./db');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.use(cors())
const userRoutes = require('./routers/users.routers');
const candidateRoutes = require('./routers/candidate.routers');

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology :true
}).then(()=> console.log("Mongo connected"))
.catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})