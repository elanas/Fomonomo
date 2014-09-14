var express = require('express');
var db = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/movies', function(req,res) {
    console.log('hit the /movies');
    console.log(JSON.stringify(req.body)+ '\n\n\n')
    db.saveMovie(req.body);
    res.end();
});

module.exports = router;
