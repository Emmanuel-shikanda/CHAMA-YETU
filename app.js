let express = require('express');


let chamaController = require('./CHAMA-CONTROLLER/chamacontrolller');

require('dns').setServers(['8.8.8.8', '8.8.4.4']);

//.env file connection

require("dotenv").config();

let app = express();

//data-base

const mongoose = require('mongoose');

//data-base-connection

mongoose.connect(process.env.MONGO_URI)
.then(function(){
console.log('database-connected');

let PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
console.log(`connected to port : ${PORT}`);
})

})
.catch(function(err){

console.log(`mongodb connection failed :${err.message}`)

})









//autentication-module


let auth = require('./Authentication/user');

//view-engines

app.set('view engine','ejs');

//static pages

app.use(express.static('public'));

//form-reciveing

app.use(express.urlencoded({extended:true}));

//json-file-reading

app.use(express.json());


app.use(auth);

chamaController(app);


































































































































































