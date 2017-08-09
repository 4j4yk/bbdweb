var express = require('express');
var router = express.Router();
var Bridge = require('../models/Bridge');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('landing');
});

//Landing page
router.get('/home', function(req, res, next) {
    res.render('data/index', { title: 'NBI Bridge Data' });
});
//All Bridges
router.get('/Bridges', function(req, res, next) {
    Bridge.count(function(err, count) {
        var options = {
            perPage: 4,
            delta: 3,
            page: req.query.page,
            classNameSpace: '',
            query: { q1: 'v1', q2: 'v2' }
        };
        var query = Bridge.find().sort({ 'id': 1 });

        query.paginater(options, function(err, result) {
            res.render('data/lookup', {
                title: 'All Bridges',
                pager: result
            });
        });
    });
});

router.get("/Bridges/:id", isLoggedIn, function(req, res) {
    var terms = req.body.terms;
    Bridge.find({ _id: req.params.id }, function(err, bridges) {
        res.render("data/allinfo", { title: 'Details of bridge', bridges: bridges });
        // res.json(bridges)
    });
});

// Search route
router.get('/findone/:id', isLoggedIn, function(req, res, next) {
    console.log('getting Bridge');
    var srch = req.params.id;
    Bridge.find({
            structureNumber: new RegExp(srch, 'i')
        })
        .exec(function(err, bridges) {
            if (err) {
                res.send('error occurred')
            } else {
                // console.log(bridges);
                //  res.json(bridges);
                res.render('data/findone', { title: 'NBI Bridge Data', bridges: bridges });
            }
        });
});
router.post('/findone/submit', isLoggedIn, function(err, req, res, next) {
    if (err) {
        res.send('error occurred')
    } else {
        // console.log(bridges);
        //  res.json(bridges);
        res.redsendirect('/findone/' + req.body.id);
    }
});


//People
router.get('/people', function(req, res, next) {
    res.render('data/people', { title: 'NBI Bridge Data' });
});
//Workshop
router.get('/workshop', function(req, res, next) {
    res.render('data/workshop', { title: 'NBI Bridge Data' });
});
// Partner
router.get('/partner', function(req, res, next) {
    res.render('data/partner', { title: 'NBI Bridge Data' });
});
//Pilot
router.get('/pilot', function(req, res, next) {
    res.render('data/pilot', { title: 'NBI Bridge Data' });

});
module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}