var express = require('express');
var router = express.Router();
var Structure = require('./../models/structure.js').Structure;

/* GET terra listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с terra');
});

/* Страница структуры */
router.get('/:nick', async function(req, res, next) {
  var structures = await Structure.find({nick: req.params.nick});
  console.log(structures);
  if (!structures.length) return next(new Error("Нет такой структуры в архиве Терры"));
  var structure = structures[0];
  res.render('structure', {
    title: structure.title,
    picture: structure.avatar,
    desc: structure.desc
  });
});

module.exports = router;