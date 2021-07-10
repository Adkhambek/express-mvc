//modules
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const {PORT} = require('./config');

const routers = require('./routes');

//ejs setting
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'))

app.use(routers)

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//listen
app.listen(PORT, () => console.log("server is working"));
