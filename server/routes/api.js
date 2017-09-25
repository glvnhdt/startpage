var express = require('express');
var router = express.Router();

var chatbot_controller = require('../controllers/chatbot_controller')

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('../');
});

router.post('/messages', chatbot_controller.process_new_message)

module.exports = router;
