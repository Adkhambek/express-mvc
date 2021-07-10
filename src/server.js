//express
const express = require('express');
const app = express();
//node modules
const path = require('path');
//PORT
const {PORT} = require('./config');
//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));


//listen
app.listen(PORT, () => console.log("server is working"));
