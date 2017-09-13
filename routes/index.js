var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var date = new Date();
  res.render('index', { title: 'Startpage', time: date.getHours() + ":" + date.getMinutes() });
});

module.exports = router;
