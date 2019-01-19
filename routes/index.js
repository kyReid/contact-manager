var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('Home.html');
});

router.get('/login', function(req, res, next){
//    res.render('Home.html');
});

router.get('/signup', function(req, res, next){
//    res.render('Home.html');
});

module.exports = router;
