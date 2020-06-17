
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:false}));

//habilita cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS");
    next();
});

consign().include('./src/route')
          .then('./src/controller')
          .into(app);

module.exports = app;