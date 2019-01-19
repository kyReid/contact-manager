var express = require('express');

/// TODO: these libraries are used somehow ( middleware (?) )
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var contacts = require('./routes/contacts');

var port = 3000;

var app = express();


/// TODO: figure out this code & re-implement
// View Engine
app.set('views', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
//app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', contacts);

app.listen(port, function(){
    console.log('Server started on port ' + port); 
});
