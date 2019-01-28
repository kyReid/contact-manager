var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

// Configure:
var db = mongojs('mongodb://devteam:2019cop4331@localhost:27017/contacts', ['contacts']);


// Get All Contacts
router.get('/contacts', function(req, res, next){
    db.contacts.find(function(err, contacts){
        if(err){
            res.send(err);
        }
        res.json(contacts);
    });
});

module.exports = router;
