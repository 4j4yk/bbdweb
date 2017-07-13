var express = require('express');
var router = express.Router();
var Bridge = require('../models/Bridge');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing');
});

//data index page
router.get('/data', function(req, res, next) {
          res.render('data/index', { title: 'NBI Bridge Data'});
});


//lookup page
router.get('/lookup', function(req, res, next) {
    Bridge.find(function(err, bridges){
    // console.log(bridges);
    res.render('data/lookup', { title: 'NBI Bridge Data', bridges: bridges});
    }); 
});
// router.get('/lookup', function(req, res, next) {
//   console.log('getting all books');
//   Bridge.find({})
//     .exec(function(err, bridges) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         console.log(bridges);
//         res.render('data/lookup', { title: 'NBI Bridge Data', bridges: bridges});
//       }
//     });
// });



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