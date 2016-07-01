var express = require('express');
var router = express.Router();
var data = require('../lib/data');


/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json(data);
});
router.get('/active_users', function(req, res, next) {
  res.json(data);
});
router.get('/users/:id', function(req, res, next) {
  res.json(data[req.params.id])
});

module.exports = router;
