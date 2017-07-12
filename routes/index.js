var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing');
});

router.get('/data', function(req, res, next) {
  res.render('data/index', { title: 'NBI Bridge Data' });
});
module.exports = router;
