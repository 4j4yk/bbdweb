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

// Bridges page
router.get('/Bridges', function(req, res, next) {
    Bridge.find(function(err, bridges) {
        console.log(bridges);
        res.render('data/lookup', { title: 'NBI Bridge Data', bridges: bridges });
    });
});

// router.get('/Bridges/:id', function(req, res, next) {
//     Bridge.findOne({ _id: req.params.id }, function(err, bridges) {
//         // console.log(bridges);
//         res.render('data/lookup', { title: 'NBI Bridge Data', bridges: bridges });
//     });
// });

router.get("/Bridges/:id", function(req, res) {
    var terms = req.body.terms;
    Bridge.find({ _id: req.params.id }, function(err, bridges) {
        res.render("data/allinfo", { title: 'Details of bridge', bridges: bridges });
        // res.json(bridges)
    });
});

// Search route
router.get('/findone/:id', function(req, res, next) {
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
router.post('/findone/submit', function(err, req, res, next) {
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
// router.get('/lookup', function(req, res, next) {
//   Bridge.find(function(err, BridgeRecs){
//   res.render('data/lookup', { title: 'NBI Bridge Data', BridgeRecs: BridgeRecs});
//   });

// });
// router.get('/lookup', function(req, res, next) {
//   Bridge.find(function(err, bridges){
//     console.log(bridges);
//     res.render('data/lookup', { title: bridges, bridges: bridges});
//   });

// });
// router.get('/bridge', function(req, res) {
//   console.log('getting all books');
//   Bridge.find({})
//     .exec(function(err, bridges) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         console.log(bridges);
//         res.json(bridges);
//       }
//     });
// });


// app.get('/bridge', function(req, res) {
//   console.log('getting all books');
//   Bridge.find({})
//     .exec(function(err, bridges) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         console.log(bridges);
//         res.json(bridges);
//       }
//     });
// });

module.exports = router;