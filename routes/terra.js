var express = require('express');
var router = express.Router();

/* GET terra listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с terra');
});

/* Страница структуры */
router.get('/:nick', function(req, res, next) {
  res.send(req.params.nick);
});

module.exports = router;